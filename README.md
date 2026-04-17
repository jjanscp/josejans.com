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

## What's still TODO (requires one of your credentials)

- [ ] **GitHub push** — needs the Personal Access Token you'll paste.
- [ ] **Netlify deploy** — needs the Netlify access token; I'll connect the GitHub repo and kick off the first build.
- [ ] **Decap CMS auth** — after Netlify is connected, I'll enable Netlify Identity + Git Gateway (or GitHub OAuth) so `/admin/` signs you in.
- [ ] **Buttondown API key** — optional; paste when ready and I'll wire the newsletter form.
- [ ] **Academic profile URLs** — Google Scholar, ORCID, SSRN, ResearchGate. Fields already exist in `src/data/profile.ts`; set them to the live URLs when you have them.
- [ ] **DNS switch** — only after you approve the staging preview.

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
