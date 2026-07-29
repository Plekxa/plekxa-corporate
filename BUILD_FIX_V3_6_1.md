# Build fix v3.6.1

- Added an explicit `app/not-found.tsx` route.
- Hardened shared header and footer rendering against incomplete/null CMS navigation records.
- Removed unsafe calls to `trim()` and `startsWith()` on unvalidated CMS values.
- Rebuilt `app/sitemap.ts` with explicit Next.js sitemap typing, current public routes, slug validation, and safe dates.
- Preserved the v3.6 entertainment navigation and compact homepage rails.
