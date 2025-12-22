# Nextworks Blocks Demo

Demo app for **Nextworks Blocks** (section gallery + page templates). This repo exists so you can quickly browse what the Blocks kit looks like when installed into a clean Next.js App Router project.

- **Live demo:** https://nextworks-demo.vercel.app/
- **Main repo (CLI + kits):** https://github.com/jblh/nextworks-cli
- **npm (CLI):** https://www.npmjs.com/package/nextworks

## What’s inside

Routes to try:
- `/` — demo index (links to everything)
- `/templates/gallery` — component/section gallery
- `/templates/productlaunch` — product launch template
- `/templates/saasdashboard` — SaaS dashboard marketing template
- `/templates/digitalagency` — digital agency template

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Install Blocks into your own app

From your Next.js app root:

```bash
npx nextworks add blocks --sections --templates
```

## Notes

- This demo is **Blocks-only** (no database required).
