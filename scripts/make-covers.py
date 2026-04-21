#!/usr/bin/env python3
"""
Generate stylized publication cover thumbnails for the Publications page.
These are typographic placeholders styled to echo the real covers
(Universidad Libre, FIDH, CSPP, CAJAR), not literal reproductions.
"""

from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

OUT = Path("/Users/josecarretero/Library/CloudStorage/Box-Box/josejans.com/site/public/covers")
OUT.mkdir(parents=True, exist_ok=True)

# 3:4 aspect ratio at high enough res for retina
W, H = 480, 640

# Pick a system serif + sans available on macOS
def font(size, bold=False, serif=False):
    if serif:
        paths = [
            "/System/Library/Fonts/Supplemental/Georgia Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Georgia.ttf",
            "/Library/Fonts/Georgia.ttf",
        ]
    else:
        paths = [
            "/System/Library/Fonts/Helvetica.ttc",
            "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        ]
    for p in paths:
        try:
            return ImageFont.truetype(p, size)
        except Exception:
            continue
    return ImageFont.load_default()


def wrap(draw, text, max_w, fnt):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        bb = draw.textbbox((0, 0), trial, font=fnt)
        if bb[2] - bb[0] > max_w and cur:
            lines.append(cur)
            cur = w
        else:
            cur = trial
    if cur:
        lines.append(cur)
    return lines


def draw_text_block(draw, text, top, fnt, color, max_w=W-80, line_gap=6, align="left", left=40):
    lines = wrap(draw, text, max_w, fnt)
    y = top
    for ln in lines:
        bb = draw.textbbox((0, 0), ln, font=fnt)
        w = bb[2] - bb[0]
        h = bb[3] - bb[1]
        if align == "center":
            x = (W - w) // 2
        elif align == "right":
            x = W - left - w
        else:
            x = left
        draw.text((x, y), ln, font=fnt, fill=color)
        y += h + line_gap
    return y


def cover_libre():
    """Universidad Libre — Discusiones acuerdo final de paz."""
    img = Image.new("RGB", (W, H), (32, 76, 130))  # blue sky
    d = ImageDraw.Draw(img)
    # gradient-ish top band
    for y in range(0, 260):
        shade = 32 + int((y / 260) * 60)
        d.line([(0, y), (W, y)], fill=(shade, shade + 40, 150))
    # green mountain band
    d.polygon([(0, 320), (120, 230), (260, 290), (400, 240), (W, 280), (W, H), (0, H)],
              fill=(56, 110, 60))
    d.polygon([(0, 420), (160, 340), (320, 400), (W, 360), (W, H), (0, H)],
              fill=(40, 82, 44))
    # flag strokes (Colombia)
    d.rectangle([(W-90, 300), (W-54, 320)], fill=(255, 214, 0))
    d.rectangle([(W-90, 320), (W-54, 330)], fill=(22, 85, 150))
    d.rectangle([(W-90, 330), (W-54, 340)], fill=(190, 45, 40))
    # UN flag silhouette
    d.rectangle([(140, 300), (180, 340)], fill=(95, 145, 200))
    # Title
    title = "Discusiones sobre la implementación del acuerdo final de paz"
    sub = "Una mirada desde la academia"
    y = draw_text_block(d, title, 38, font(28, bold=True), (255, 255, 255))
    y = draw_text_block(d, sub, y + 6, font(20, serif=True), (245, 225, 170))
    # footer badge
    d.rectangle([(0, H - 60), (W, H)], fill=(25, 52, 92))
    d.text((40, H - 46), "UNIVERSIDAD LIBRE · OBSERVATORIO DE PAZ",
           font=font(12, bold=True), fill=(245, 225, 170))
    img.save(OUT / "cover-libre-2018.jpg", quality=88)


def cover_fidh():
    """FIDH & CAJAR — Colombia at Risk for Impunity."""
    img = Image.new("RGB", (W, H), (58, 34, 76))  # deep purple
    d = ImageDraw.Draw(img)
    # dark photo area (top half)
    for y in range(0, 340):
        r = 20 + int((y / 340) * 60)
        g = 15 + int((y / 340) * 40)
        b = 40 + int((y / 340) * 70)
        d.line([(0, y), (W, y)], fill=(r, g, b))
    # orange "MAS VIVOS QUE NUNCA" stripe
    d.rectangle([(20, 240), (W - 20, 280)], fill=(215, 120, 40))
    d.text((40, 248), "MÁS VIVOS QUE NUNCA", font=font(20, bold=True), fill=(255, 255, 255))
    # fidh badge
    d.rectangle([(30, 300), (130, 330)], fill=(255, 255, 255))
    d.text((48, 306), "fidh", font=font(20, bold=True), fill=(58, 34, 76))
    # title
    y = draw_text_block(d, "Colombia at Risk for Impunity",
                        370, font(28, bold=True), (255, 255, 255))
    y = draw_text_block(d, "The blind spots in transitional justice and international crimes under ICC jurisdiction",
                        y + 10, font(18, serif=True), (230, 220, 240))
    d.text((40, H - 50), "NOVEMBER 2020 · N° 751a",
           font=font(11, bold=True), fill=(180, 170, 200))
    img.save(OUT / "cover-fidh-2020.jpg", quality=88)


def cover_desmantel():
    """CSPP — Desmantelamiento del paramilitarismo."""
    img = Image.new("RGB", (W, H), (255, 255, 255))
    d = ImageDraw.Draw(img)
    # left green bar
    d.rectangle([(0, 0), (30, H)], fill=(40, 90, 52))
    d.rectangle([(0, 100), (30, 280)], fill=(220, 120, 30))
    # illustration area background (sky blues)
    for y in range(260, 520):
        t = (y - 260) / 260
        r = int(180 - t * 30)
        g = int(215 - t * 20)
        b = int(230 - t * 10)
        d.line([(30, y), (W, y)], fill=(r, g, b))
    # ground
    d.rectangle([(30, 480), (W, H)], fill=(70, 130, 60))
    # stylized sun
    d.ellipse([(W - 140, 290), (W - 40, 390)], fill=(255, 220, 80))
    # Title
    y = draw_text_block(d, "DESMANTELAMIENTO",
                        50, font(30, bold=True), (215, 100, 20), left=60)
    y = draw_text_block(d, "DEL PARAMILITARISMO",
                        y + 4, font(30, bold=True), (215, 100, 20), left=60)
    draw_text_block(d, "Propuesta de lineamientos de política pública",
                    y + 12, font(18, serif=True), (40, 90, 52), left=60)
    # footer
    d.text((60, H - 40), "CSPP · 2020",
           font=font(12, bold=True), fill=(40, 90, 52))
    img.save(OUT / "cover-desmantel-2020.jpg", quality=88)


def cover_telaranas():
    """CAJAR — Telarañas de la impunidad."""
    img = Image.new("RGB", (W, H), (15, 15, 18))
    d = ImageDraw.Draw(img)
    # 3 image tiles at top
    tiles = [(20, 30, 155, 165), (165, 30, 310, 165), (320, 30, 460, 165)]
    colors = [(120, 180, 220), (100, 160, 80), (120, 100, 80)]
    for (x0, y0, x1, y1), c in zip(tiles, colors):
        d.rectangle([(x0, y0), (x1, y1)], fill=c)
    # Title
    y = draw_text_block(d, "TELARAÑAS",
                        220, font(42, bold=True), (220, 40, 40), align="center")
    y = draw_text_block(d, "DE LA IMPUNIDAD",
                        y + 4, font(36, bold=True), (220, 40, 40), align="center")
    draw_text_block(d, "Las voces de resiliencia frente a la violencia estatal-paramilitar en el Magdalena Medio (1998–2000)",
                    y + 24, font(15, serif=True), (255, 255, 255), align="center")
    # CAJAR footer
    d.text((40, H - 40), "COLECTIVO DE ABOGADOS · JOSÉ ALVEAR RESTREPO · 2019",
           font=font(10, bold=True), fill=(200, 200, 200))
    img.save(OUT / "cover-telaranas-2019.jpg", quality=88)


def cover_wiwa():
    """CAJAR — La verdadera historia del pueblo Wiwa."""
    img = Image.new("RGB", (W, H), (20, 18, 14))  # deep earth-dark
    d = ImageDraw.Draw(img)
    # Sky & mountain gradient (Sierra Nevada de Santa Marta feel)
    for y in range(0, 320):
        t = y / 320
        r = int(30 + t * 80)
        g = int(40 + t * 60)
        b = int(80 - t * 40)
        d.line([(0, y), (W, y)], fill=(r, g, b))
    # Mountain silhouette (snowy peaks)
    d.polygon([(0, 260), (80, 160), (160, 220), (260, 130), (360, 200), (W, 170), (W, 320), (0, 320)],
              fill=(160, 180, 200))
    d.polygon([(0, 290), (100, 240), (200, 270), (320, 230), (W, 255), (W, 320), (0, 320)],
              fill=(80, 90, 100))
    # Ground / forest band
    d.rectangle([(0, 310), (W, H)], fill=(28, 44, 28))
    # Figures (silhouettes of ceremonial circle)
    circle_cx, circle_cy, radius = 240, 420, 65
    import math
    for i in range(7):
        angle = (2 * math.pi * i / 7) - math.pi / 2
        px = int(circle_cx + radius * math.cos(angle))
        py = int(circle_cy + radius * math.sin(angle))
        # Head
        d.ellipse([(px-9, py-28), (px+9, py-10)], fill=(200, 170, 130))
        # Body (flowing robe)
        d.polygon([(px-11, py-12), (px+11, py-12), (px+16, py+28), (px-16, py+28)],
                  fill=(220, 215, 200))
        # Red accent (headwrap)
        d.ellipse([(px-10, py-32), (px+10, py-18)], fill=(180, 40, 40))
    # Ceremonial fire center
    d.ellipse([(circle_cx-8, circle_cy-8), (circle_cx+8, circle_cy+8)], fill=(255, 200, 60))
    d.ellipse([(circle_cx-5, circle_cy-5), (circle_cx+5, circle_cy+5)], fill=(255, 240, 150))
    # Title area (dark band)
    d.rectangle([(0, 500), (W, H)], fill=(15, 12, 10))
    # SIVJRNR badge
    d.rectangle([(30, 470), (W-30, 498)], fill=(60, 50, 35))
    d.text((40, 475), "INFORME AL SIVJRNR  ·  2019", font=font(10, bold=True), fill=(215, 195, 140))
    # Title
    y = draw_text_block(d, "La historia cierta del pueblo Wiwa",
                        520, font(30, bold=True, serif=True), (215, 195, 140))
    draw_text_block(d, "desde el corazón del mundo, en el contexto del conflicto armado",
                    y + 10, font(16, serif=True), (180, 165, 130))
    # CAJAR footer
    d.text((30, H-36), "COLECTIVO DE ABOGADOS  ·  JOSÉ ALVEAR RESTREPO",
           font=font(10, bold=True), fill=(140, 130, 110))
    img.save(OUT / "cover-wiwa-2019.jpg", quality=88)


if __name__ == "__main__":
    cover_libre()
    cover_fidh()
    cover_desmantel()
    cover_telaranas()
    cover_wiwa()
    for p in sorted(OUT.glob("*.jpg")):
        print(p.name, p.stat().st_size, "bytes")
