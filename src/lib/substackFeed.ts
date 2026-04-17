// Build-time Substack RSS consumer. Soft-fails: when the feed is unreachable or the
// publication hasn't gone live yet, returns an empty array so the UI falls back to
// a "subscribe for updates" CTA instead of breaking the build.

export interface SubstackPost {
  title: string;
  url: string;
  published: Date;
  summary: string;
  author?: string;
}

function strip(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function extract(xml: string, tag: string): string[] {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'gi');
  const out: string[] = [];
  let m;
  while ((m = re.exec(xml))) out.push(m[1]);
  return out;
}

function unwrapCDATA(s: string): string {
  return s.replace(/^<!\[CDATA\[|\]\]>$/g, '').trim();
}

export async function fetchSubstackFeed(feedUrl: string, limit = 3): Promise<SubstackPost[]> {
  try {
    const res = await fetch(feedUrl, {
      headers: { 'User-Agent': 'josejans.com build-time RSS reader' },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = extract(xml, 'item').slice(0, limit);
    return items.map((item) => {
      const title = strip(unwrapCDATA(extract(item, 'title')[0] ?? ''));
      const link = unwrapCDATA(extract(item, 'link')[0] ?? '').trim();
      const pubDate = unwrapCDATA(extract(item, 'pubDate')[0] ?? '');
      const descRaw = extract(item, 'description')[0] ?? extract(item, 'content:encoded')[0] ?? '';
      const author = strip(unwrapCDATA(extract(item, 'dc:creator')[0] ?? '')) || undefined;
      const summary = strip(unwrapCDATA(descRaw)).slice(0, 240);
      return {
        title,
        url: link,
        published: pubDate ? new Date(pubDate) : new Date(),
        summary: summary + (summary.length === 240 ? '…' : ''),
        author,
      } satisfies SubstackPost;
    });
  } catch (err) {
    // Silent fail — let the page render the fallback CTA.
    console.warn('[substackFeed] Could not fetch feed:', (err as Error).message);
    return [];
  }
}
