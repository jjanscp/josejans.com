#!/usr/bin/env python3
"""
Auto-crop white borders from photos extracted from PDF pages.
Uses row/column scan to find rows with enough non-white content.
"""
from PIL import Image
import os, shutil, numpy as np

PHOTOS = "/Users/josecarretero/Library/CloudStorage/Box-Box/josejans.com/site/public/photos"
BACKUP = os.path.join(PHOTOS, "originals")
os.makedirs(BACKUP, exist_ok=True)

# A pixel is "content" if its min RGB channel is below 230 (i.e. not nearly-white)
CONTENT_THRESH = 225
# A row/column is "content" if >= this fraction of pixels are content
ROW_FRAC = 0.02

def content_bbox(img):
    """Find bounding box of rows/cols that have content."""
    arr = np.array(img.convert("RGB"))
    # True where any channel is non-white
    mask = arr.min(axis=2) < CONTENT_THRESH  # H x W
    row_has = mask.mean(axis=1) >= ROW_FRAC
    col_has = mask.mean(axis=0) >= ROW_FRAC
    if not row_has.any() or not col_has.any():
        return None
    t = int(np.argmax(row_has))
    b = int(len(row_has) - np.argmax(row_has[::-1]))
    l = int(np.argmax(col_has))
    r = int(len(col_has) - np.argmax(col_has[::-1]))
    return l, t, r, b

def crop_white(path):
    img = Image.open(path).convert("RGB")
    bb = content_bbox(img)
    if not bb:
        print(f"  {os.path.basename(path)}: empty, skipping")
        return
    l,t,r,b = bb
    pad = 4
    l = max(0, l-pad); t = max(0, t-pad)
    r = min(img.width, r+pad); b = min(img.height, b+pad)
    cropped = img.crop((l,t,r,b))
    cropped.save(path, "JPEG", quality=90, optimize=True)
    print(f"  {os.path.basename(path)}: {img.size} -> {cropped.size}")

def backup(name):
    src = os.path.join(PHOTOS, name)
    dst = os.path.join(BACKUP, name)
    if os.path.exists(src) and not os.path.exists(dst):
        shutil.copy2(src, dst)

def restore_from_backup(name):
    """Restore original from ./originals/ before re-processing."""
    src = os.path.join(BACKUP, name)
    dst = os.path.join(PHOTOS, name)
    if os.path.exists(src):
        shutil.copy2(src, dst)

def split_memorial():
    """advocacy-memorial.jpg compound: memorial top / classroom bottom.
    Split at whitespace between them, then auto-crop each."""
    restore_from_backup("advocacy-memorial.jpg")
    img = Image.open(os.path.join(PHOTOS, "advocacy-memorial.jpg")).convert("RGB")
    w, h = img.size  # 1082 x 1400
    # Scan for the gap between top photo and bottom photo
    arr = np.array(img)
    mask = arr.min(axis=2) < CONTENT_THRESH
    row_has = mask.mean(axis=1) >= ROW_FRAC
    # Find the longest run of False rows to locate the gap
    runs = []
    start = None
    for i, v in enumerate(row_has):
        if not v and start is None:
            start = i
        elif v and start is not None:
            runs.append((start, i, i-start))
            start = None
    if start is not None:
        runs.append((start, len(row_has), len(row_has)-start))
    # Exclude the leading/trailing white; pick the largest internal gap
    middle = [r for r in runs if r[0] > 50 and r[1] < h-50]
    if not middle:
        print("  No internal gap found for memorial split")
        return
    middle.sort(key=lambda r: -r[2])
    gap_start, gap_end, _ = middle[0]
    split_y = (gap_start + gap_end) // 2
    top = img.crop((0, 0, w, split_y))
    bottom = img.crop((0, split_y, w, h))
    # Auto-crop each half
    bb_top = content_bbox(top)
    bb_bot = content_bbox(bottom)
    if bb_top:
        t_img = top.crop(bb_top)
        t_img.save(os.path.join(PHOTOS, "advocacy-memorial.jpg"),
                   "JPEG", quality=90, optimize=True)
        print(f"  advocacy-memorial.jpg (memorial): {t_img.size}")
    if bb_bot:
        b_img = bottom.crop(bb_bot)
        b_img.save(os.path.join(PHOTOS, "teaching-clinic.jpg"),
                   "JPEG", quality=90, optimize=True)
        print(f"  teaching-clinic.jpg (classroom): {b_img.size}")

def main():
    all_files = [
        "advocacy-tribunales.jpg",
        "hero-fulbright.jpg",
        "icc-assembly.jpg",
        "media-radio.jpg",
        "personal-ironman.jpg",
        "portrait-colombia.jpg",
        "portrait-jep.jpg",
        "headshot.jpg",
        "advocacy-memorial.jpg",
        "teaching-clinic.jpg",
    ]
    print("=== Backing up originals (once) ===")
    for n in all_files:
        backup(n)

    print("=== Splitting memorial compound ===")
    split_memorial()

    print("=== Cropping white borders ===")
    for n in all_files:
        if n in ("advocacy-memorial.jpg", "teaching-clinic.jpg"):
            continue  # already handled by split
        restore_from_backup(n)
        crop_white(os.path.join(PHOTOS, n))

if __name__ == "__main__":
    main()
