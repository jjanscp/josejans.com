# josejans.com

Personal academic site for José Jans Carretero Pardo — PhD Student in Political Science, University of Illinois Chicago · Fulbright–MinCiencias Scholar.

Built with [Astro 5](https://astro.build/), bilingual (English + Spanish), deployed on Netlify, content managed via [Decap CMS](https://decapcms.org/).

---

## Quick start — for José

### Run locally

```bash
cd site
npm install        # first time only
npm run dev        # opens http://localhost:4321
```

### Edit content in a browser (no code)

Once the site is deployed to Netlify, open:

> **https://josejans.com/admin/**

Sign in with GitHub. You can:

- **Write a blog post** — "Blog posts" → New → fill title, date, language, body (markdown, images, videos). Set *Draft* to `true` if you're not ready to publish.
- **Add a paper** — "Publications" → New → fill title, authors, year, type (article / chapter / report / intervention / dataset / wip), venue, DOI, abstract, tags.
- **Add a Work in Progress** — same "Publications" → set Type to `Work in progress` and fill Status ("Under review at...", "In preparation", etc.).
- **Upload a photo or PDF** — use the image / file widgets in the editor; files land in `site/public/media/`.
- **Update the Research Archive** — "Research archive" → New → pick kind (dataset, litigation, writing, report).

Every save creates a commit on GitHub. Netlify re-deploys automatically (~1 min).

### Replace the JJC placeholder with a real headshot

1. Put your headshot at `site/public/headshot.jpg` (square, 512×512 or larger).
2. Edit `site/src/components/Avatar.astro` and swap the initials block for:
   ```astro
   <img src="/headshot.jpg" alt="José Jans Carretero Pardo" class="avatar avatar-img" />
   ```

### Update the CV PDF

Drop a new PDF at `site/public/cv.pdf` — overwrites the old one. The download link on the CV page picks it up automatically.

### DNS switch (when you're ready)

The plan is to keep `josejans.com` pointing to WordPress.com until you've reviewed the Netlify staging site. When you're happy:

1. Go to https://wordpress.com/domains/manage/josejans.com/dns/josejans.com
2. Remove the existing A and CNAME records for WordPress.com.
3. Add the Netlify values (I'll paste them in the chat when the staging site is ready — they're the standard Netlify A record + `www` CNAME).
4. Wait ~15–60 min for propagation. SSL is automatic.

---

## Structure

```
site/
├── src/
│   ├── pages/
│   │   ├── en/              EN pages (about, research, publications, teaching, archive, blog, cv, contact, thanks)
│   │   └── es/              Mirror in Spanish
│   ├── content/
│   │   ├── publications/    Every paper / chapter / report / amicus brief / WIP (one .md per item)
│   │   ├── archive/         Research Archive (datasets, litigation portfolio, earlier writing)
│   │   └── posts/           Blog posts
│   ├── components/          Header, Footer, Avatar
│   ├── layouts/             BaseLayout with SEO + hreflang
│   ├── data/                profile.ts (contact, socials), i18n.ts (labels)
│   └── styles/              global.css
├── public/
│   ├── admin/               Decap CMS (config.yml + index.html)
│   ├── cv.pdf               Downloadable CV
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs
├── netlify.toml             Build config + 301 redirects from old WP URLs
└── package.json
```

---

## Stack & costs

| Layer | Tool | Monthly cost |
|---|---|---|
| Framework | Astro 5 | free |
| Hosting | Netlify (Free plan) | $0 |
| CMS | Decap CMS | $0 |
| Forms | Netlify Forms | $0 (up to 100 submissions/mo) |
| Newsletter | Buttondown | $0 (up to 100 subscribers) |
| Domain | josejans.com (already owned via WordPress.com) | ~$13/year |

---

## Current status

- **Staging live:** https://josejans-com.netlify.app — deployed via direct ZIP upload to the Netlify site `josejans-com` (id `e4547088-6efd-43b5-9954-4baaacca6fce`, owner `jjanscp`). 31 pages, English + Spanish, redirects from the old WordPress URLs working.
- **GitHub repo:** not yet pushed. The local `site/.git` repo is committed. The PAT you provided (`ghp_...2hrEa`) is a fine-grained token scoped only to your `Zotero` repo, so it can neither create `josejans.com` nor push to it. To enable git-based deploys + CMS, either:
  1. Generate a new **classic** PAT with `repo` scope at https://github.com/settings/tokens/new and paste it, OR
  2. Create the repo yourself at https://github.com/new (name `josejans.com`), then run locally:
     ```bash
     cd site
     git remote add origin https://github.com/jjanscp/josejans.com.git
     git push -u origin main
     ```
  Once the repo is live, I can connect it to Netlify for auto-deploys and enable Git Gateway for the `/admin/` CMS.
- **Buttondown newsletter:** wired — the embedded form on `/contact/#newsletter` posts to `buttondown.com/api/emails/embed-subscribe/jose_jans`. Confirmed via API.
- **Academic profiles in footer:** Google Scholar, ResearchGate, Academia.edu, UIC, LinkedIn, X, GitHub, Email.
- **DNS switch:** deliberately not touched. Walk through the staging URL, and when you're happy paste back the word "go" and I'll give you the exact Netlify records to put into WordPress.com DNS.

### TODO (small things I left for you)

- [ ] Create a GitHub repo + generate a PAT with `repo` scope so I can push.
- [ ] Replace the JJC initials avatar with a headshot at `site/public/headshot.jpg` (instructions above).
- [ ] Review copy for tone on About/Research/Publications — corrections in `src/content/publications/*.md` and `src/pages/{en,es}/*.astro`.
- [ ] When you're happy, approve DNS switch.

---

## Content reframing principle

All work done before the PhD (JEP, CAJAR, FIDH, CSPP, amicus briefs) is presented as **sociolegal scholarship and strategic-litigation research**, not as "legal work before grad school". The Publications page groups amicus briefs as constitutional-court interventions; the Research Archive frames the old databases and case portfolio as empirical foundations for the doctoral agenda.

If something sounds off to you, the fix is usually to edit `src/content/publications/*.md` (authors, abstract, tags) or the copy in `src/pages/en/*.astro` and `src/pages/es/*.astro`.

---

## Build

```bash
npm run build       # → ./dist (31 pages, static)
npm run preview     # serve ./dist locally
```

Netlify runs `npm run build` and publishes `dist/` automatically on every push to `main`.
