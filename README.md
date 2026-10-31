# suited-in

Website for **SUITED IN** — *The work comes first.* Built with React + Vite.

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Deployment

Every push to `main` builds and deploys the site to GitHub Pages via
`.github/workflows/deploy.yml`.

One-time setup: in the GitHub repo go to **Settings → Pages → Source** and select **GitHub Actions**.

Live URL: https://reema008.github.io/suited-in/

> If the repo is renamed or a custom domain is used, update `base` in `vite.config.js`.
