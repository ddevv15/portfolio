# Agents Directory

A working guide to the specialized agents (and checklists) that keep this portfolio healthy across build, deploy, UI, performance, assets, and Git hygiene. Each agent has a **system prompt**, **inputs**, **checklist/runbook**, and **expected outputs**.

> Project context
>
> - Framework: **Next.js 15 (App Router) + TypeScript** with `output: 'export'`
> - Hosting: **GitHub Pages** via `gh-pages` CLI or **GitHub Actions** to Pages
> - Domains: Project page (`https://ddevv15.github.io/portfolio/`) and custom domain **shahdev.com** (root)
> - Known pitfalls: basePath/assetPrefix for subpath builds, hydration mismatch from extensions, huge media folder (>4 GB), CSS hardcoded colors vs CSS variables, GH Pages branch separation, Git LFS for large assets

---

## Global Constraints (applies to all agents)

- **Never** commit or deploy: `.next/`, `node_modules/`, large raw videos inside the site bundle.
- Keep deploy branch **gh-pages** strictly **build artifacts only**.
- For custom domain (**root path**): **do not** use `basePath` or `assetPrefix`.
- For GitHub **Project Page** under `/portfolio`: enable `basePath:'/portfolio'` and `assetPrefix:'/portfolio/'` **at build time** only.
- Use **Git LFS** for large media; keep the deployment (out/) under **1 GB** (GitHub Pages limit). Keep **repo < 2 GB**.

### Repo snippets

```gitignore
# .gitignore (core)
.next
node_modules
out
.env*
.vercel
.DS_Store
coverage
```

```gitattributes
# Track heavy assets with LFS
*.mov filter=lfs diff=lfs merge=lfs -text
*.mp4 filter=lfs diff=lfs merge=lfs -text
*.avi filter=lfs diff=lfs merge=lfs -text
*.mkv filter=lfs diff=lfs merge=lfs -text
*.jpg filter=lfs diff=lfs merge=lfs -text
*.jpeg filter=lfs diff=lfs merge=lfs -text
*.png filter=lfs diff=lfs merge=lfs -text
*.gif filter=lfs diff=lfs merge=lfs -text
*.webp filter=lfs diff=lfs merge=lfs -text
```

---

## 1) **Build/Export Agent** (Static Next.js)

**Goal:** Produce a clean static export suited to the target (root vs subpath) without server-only features.

**System Prompt**

> You are the Build/Export Agent. Prepare a static export for Next.js 15 App Router. For root domains, do **not** set basePath/assetPrefix. For GitHub Project Pages under `/portfolio`, enable both. Ensure images are optimized or unoptimized per config and that videos are excluded from webpack emission. Output: a ready-to-publish `out/` directory under 1 GB.

**Inputs**

- `next.config.(js|mjs|ts)`
- target: `root` (shahdev.com) **or** `project` (`/portfolio`)

**Runbook**

1. Verify `output: 'export'` in `next.config`.
2. Ensure no server-only features (API routes, middleware, ISR, redirects/rewrites).
3. For **root**: remove `basePath`/`assetPrefix`.
4. For **project**: set `basePath:'/portfolio'`, `assetPrefix:'/portfolio/'`.
5. Confirm images setup (`unoptimized: false` or custom loader) and skip emission of large video files.
6. Run `npm run build` (which performs static export).

**Expected Output**

- `out/` folder with `index.html`, route folders, `_next/static/…` and optional `CNAME` if using custom domain.

**Config pattern (dual-target)**

```js
// next.config.js (example pattern)
const isProject = process.env.GITHUB_PAGES === "true";
/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: false,
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  ...(isProject ? { basePath: "/portfolio", assetPrefix: "/portfolio/" } : {}),
  webpack: (config) => {
    // prevent bundling/emit of raw videos into out/
    config.module.rules.push({
      test: /\.(mov|mp4|avi|mkv)$/i,
      type: "asset/resource",
      generator: { emit: false },
    });
    return config;
  },
};
```

---

## 2) **Deploy Agent** (GitHub Pages & Actions)

**Goal:** Publish `out/` to **gh-pages** cleanly, keep custom domain working.

**System Prompt**

> You are the Deploy Agent. Deploy the static export to GitHub Pages. When using a custom domain, avoid any automatic basePath injection. Ensure `CNAME` and `.nojekyll` are present. Do not push source files to gh-pages.

**Inputs**

- `out/` folder from Build Agent
- target host: `project` or `root`

**Runbook (CLI)**

1. For **root** domain, ensure `out/CNAME` contains `shahdev.com`.
2. `touch out/.nojekyll`
3. `npx gh-pages -d out`

**Runbook (GitHub Actions)**

- Ensure workflow **does not** pass `static_site_generator: next` if it auto-injects `basePath`.
- Steps: checkout → setup Node → `npm ci` → build → upload artifact → deploy to Pages.

**Minimal scripts**

```json
{
  "scripts": {
    "build": "next build",
    "export": "next build",
    "deploy": "npm run export && touch out/.nojekyll && gh-pages -d out"
  }
}
```

**Custom domain**

- Add `out/CNAME` with a single line: `shahdev.com`
- In repo Settings → Pages: set custom domain & enforce HTTPS.

---

## 3) **Domain/DNS Agent** (Root vs Subpath)

**Goal:** Make `shahdev.com` load assets from `/` (no `/portfolio` prefix) and avoid iframe-based forwarding.

**System Prompt**

> You are the Domain/DNS Agent. Ensure `shahdev.com` points to GitHub Pages correctly without masked redirects. Root path must serve `/_next/*` assets, not `/portfolio/_next/*`.

**Checklist**

- DNS apex A records → `185.199.108.153/109/110/111`.
- `www` CNAME → `ddevv15.github.io`.
- **No masked forwarding** at registrar.
- Repo Pages → Custom domain set (generates/uses `CNAME`).

---

## 4) **UI/Theming Agent** (CSS variables & theming)

**Goal:** Keep terminal theme consistent; avoid hard-coded colors overriding variables.

**System Prompt**

> You are the UI/Theming Agent. Replace hard-coded colors on `html, body` with CSS variables (`hsl(var(--background))`, `hsl(var(--foreground))`) and ensure shadcn/ui variables exist. Keep ASCII art and scrollbars on brand.

**Checklist**

- In `globals.css`: use variables for background, foreground, primary.
- Ensure `:root` and `.dark` define the full token set.
- Verify no component reintroduces hard-coded `#000`/`#0f0` over variables.

---

## 5) **Hydration Debug Agent**

**Goal:** Prevent hydration mismatches from extensions/timestamps/SSR-only code.

**System Prompt**

> You are the Hydration Debug Agent. Add `suppressHydrationWarning` to `<html>`/`<body>`. Ensure time and `window` usage occur in `useEffect`. Silence noise from Grammarly-like extensions.

**Checklist**

- `<html lang="en" suppressHydrationWarning>`
- `<body ... suppressHydrationWarning data-gramm="false">`
- Client-only timestamps; mount guards; no `new Date().toLocale...` on server.

---

## 6) **Performance Agent** (Gallery & Animations)

**Goal:** Smooth gallery with minimal CPU/GPU burn.

**System Prompt**

> You are the Performance Agent. Defer non-critical work, batch loads, reduce animation complexity, leverage GPU transforms, lazy-load images/videos, and use `contain` CSS where helpful.

**Checklist**

- Batch load first 12–20 items; progressively reveal the rest.
- Simplify GSAP timelines; prefer fade-in over directional transforms.
- `loading="lazy"` for images; `preload="metadata"` for videos.
- `transform: translateZ(0)`; `backface-visibility: hidden`.
- `contain: layout style paint` on heavy containers.

---

## 7) **Asset/Gallery Agent** (Naming, sizes, LFS)

**Goal:** Keep assets organized, within limits, and high quality.

**System Prompt**

> You are the Asset/Gallery Agent. Maintain consistent naming (e.g., one.jpg..five.JPG, then 6.jpg..). Preserve originals where requested (e.g., `vaaniyo.jpg`). Keep large videos out of deploy bundle. Provide data-driven gallery config.

**Checklist**

- Rename via script; update gallery data (`app/data/galleryData.ts`).
- Preserve special files.
- Host huge videos externally or LFS; **do not** emit into `out/`.
- Use `object-fit: contain` and preserve aspect ratios.

---

## 8) **Security Agent**

**Goal:** Keep dependencies clean & configs safe.

**System Prompt**

> You are the Security Agent. Run audits, remove CRA leftovers, and ensure no secret leakage in public configs.

**Checklist**

- `npm audit` (aim for 0 vulns). Remove unused deps from CRA era.
- No `.env*` in repo or deploy.

---

## 9) **Git Hygiene Agent** (History & branches)

**Goal:** Healthy history, clean deployments, correct branches.

**System Prompt**

> You are the Git Hygiene Agent. Keep `main` for source, `gh-pages` for static artifacts. Use LFS. If history is polluted, clean with `git-filter-repo`. Avoid corrupted refs.

**Checklist**

- Source only on `main`; build artifacts only on `gh-pages`.
- LFS for media; `.nojekyll` and optional `CNAME` on deploy.
- If needed, orphan reset for clean baseline; or `git filter-repo` to drop junk.

---

## 10) **Migration Agent** (CRA → Next.js)

**Goal:** Safe port with TS, routing, and UI intact.

**System Prompt**

> You are the Migration Agent. Convert CRA components to Next.js App Router with TypeScript. Replace React Router with file-based routes. Ensure dynamic client-only parts use `use client` and/or dynamic imports.

**Checklist**

- Move to `app/` structure; `.tsx` typing.
- Replace routing; fix imports to `@/` aliases.
- Dynamic import for WebGL/GSAP heavy components where SSR causes issues.

---

## 11) **Accessibility & SEO Agent**

**Goal:** Semantic, usable, and discoverable.

**System Prompt**

> You are the A11y & SEO Agent. Ensure landmarks, alt text, focus styles, and per-page metadata are present.

**Checklist**

- `alt` on images; visible focus states.
- Metadata in `layout.tsx` and/or per page.

---

## 12) **Error Triage Agent** (Console & Network)

**Goal:** Fast diagnosis and minimal downtime.

**System Prompt**

> You are the Error Triage Agent. On breakage, open DevTools. If 404s to `/portfolio/_next/*` on root, rebuild without basePath. If hydration errors, apply Hydration Agent fixes. If CSS wrong, validate variable overrides.

**Checklist**

- **Network 404s**: Check asset prefix & basePath.
- **Hydration mismatch**: timestamps/extension attributes/`window` access.
- **Theming**: Inspect computed styles for hard-coded overrides.

---

## Ready-to-Copy Prompts (Cursor/Agent Tasks)

### Deploy (root domain)

```
SYSTEM: Deploy Agent
TASK: Build the site for root domain (no basePath), ensure out/CNAME=shahdev.com, add .nojekyll, and publish out/ to gh-pages using gh-pages CLI. Confirm assets load from /_next/ on shahdev.com.
```

### Deploy (project page)

```
SYSTEM: Deploy Agent
TASK: Build the site for project page under /portfolio (set basePath & assetPrefix), add .nojekyll, and publish out/ via gh-pages. Confirm assets load from /portfolio/_next/ on ddevv15.github.io/portfolio.
ENV: GITHUB_PAGES=true
```

### Hydration triage

```
SYSTEM: Hydration Debug Agent
TASK: If hydration mismatch occurs, add suppressHydrationWarning to html/body, guard Date() and window access in useEffect, and retest.
```

### Gallery optimization

```
SYSTEM: Performance + Asset/Gallery Agent
TASK: Batch-load items (first 20 priority), lazy-load remaining, switch hover effects to lightweight transitions, and ensure object-fit: contain with preserved aspect ratios.
```

### Git cleanup & LFS

```
SYSTEM: Git Hygiene + Asset Agent
TASK: Track large media with LFS, remove massive files from history if present, keep gh-pages artifacts only, and confirm repo < 2 GB and deploy bundle < 1 GB.
```

---

## Verification Checklists

- **Root domain**: No requests to `/portfolio/_next/*`. All assets from `/_next/*`.
- **Project page**: All assets from `/portfolio/_next/*`.
- **UI**: Terminal theme via CSS variables; no hard-coded overrides.
- **Performance**: Smooth scroll/animations; no main-thread jank.
- **Hydration**: No warnings from Grammarly/extension injections.
- **Deploy**: gh-pages contains only built files + `.nojekyll` + optional `CNAME`.

---

## Appendix: Useful Commands

```bash
# Dual builds
GITHUB_PAGES=true npm run build   # subpath export (/portfolio)
npm run build                     # root export (shahdev.com)

# Deploy via CLI
echo shahdev.com > out/CNAME
Touch out/.nojekyll
npx gh-pages -d out

# LFS setup
git lfs install
# (attributes are in .gitattributes)

# Clean history (if ever needed)
brew install git-filter-repo  # macOS
# remove build junk from history
git filter-repo --force \
  --path .next --path-glob 'node_modules/**' --invert-paths
```

---

**End of agents.md**
