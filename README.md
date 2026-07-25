# Plekxa Corporate Website

Production-ready Next.js App Router starter for Plekxa.com.

## Run

Node.js 20.9+

```bash
npm install
npm run dev
```

## GitHub

```bash
git init
git add .
git commit -m "Launch Plekxa corporate website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Vercel and domain

1. Import the GitHub repository into a new Vercel project.
2. Deploy with the default Next.js settings.
3. Open Settings > Domains.
4. Add `plekxa.com` and `www.plekxa.com`.
5. Follow the exact DNS records shown by Vercel.
6. Make `plekxa.com` primary and redirect `www` to it.
7. Preserve the existing streaming project, then later connect it to `app.plekxa.com`.

Recommended structure: `plekxa.com` corporate, `studio.plekxa.com` Studio, `app.plekxa.com` Experience.

Before launch, update contact inboxes, social links, legal text and newsroom dates.
