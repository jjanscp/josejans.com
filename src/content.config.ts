import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lang = z.enum(['en', 'es']);

// Peer-reviewed articles, book chapters
const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    type: z.enum(['article', 'chapter', 'report', 'intervention', 'dataset', 'wip']),
    venue: z.string().optional(),
    volume: z.string().optional(),
    pages: z.string().optional(),
    publisher: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    pdf: z.string().optional(),
    cover: z.string().optional(),
    abstract: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    lang: lang.default('en'),
    status: z.string().optional(),
    // For amicus briefs:
    court: z.string().optional(),
    ruling: z.string().optional(),
    caseNumber: z.string().optional(),
  }),
});

// Blog / News posts (rich MDX, bilingual via lang field)
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    lang: lang.default('en'),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Research Archive — legacy/earlier work items (databases, old blog, strategic litigation portfolio items)
const archive = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/archive' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['dataset', 'litigation', 'writing', 'report']),
    date: z.coerce.date().optional(),
    year: z.number().optional(),
    summary: z.string().optional(),
    url: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    lang: lang.default('es'),
  }),
});

export const collections = { publications, posts, archive };
