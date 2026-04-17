import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { profile } from '~/data/profile';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts', (p: any) => !p.data.draft))
    .sort((a: any, b: any) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: `${profile.shortName} — Blog`,
    description: `Research notes, teaching, and commentary from ${profile.name}.`,
    site: context.site ?? 'https://josejans.com',
    items: posts.map((p: any) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.summary ?? '',
      link: `/${p.data.lang}/blog/${p.id.replace(/\.(md|mdx)$/, '')}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
