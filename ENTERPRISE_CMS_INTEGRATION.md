# Enterprise CMS integration

This corporate site reads from the existing shared Supabase database without requiring a database migration or Enterprise OS code change.

Connected now:
- `cms_articles`: homepage latest stories, newsroom listing and dynamic article pages
- `cms_jobs`: public careers listing
- `support_requests`: contact form submissions

Publication rules:
- Only `cms_articles.status = published` is public.
- Scheduled/published dates in the future remain hidden.
- Draft, review and archived articles remain hidden.
- Only `cms_jobs.status = published` and non-expired jobs are public.

Required Vercel variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only; required because the existing CMS RLS is admin-only)

Important existing Enterprise limitation:
The database already contains `cms_articles.body`, `cover_image_url`, `featured`, `seo_title`, `seo_description` and `published_at`, and this website consumes them. The current Enterprise Newsroom editor, however, does not expose controls for all of those fields. This site cannot make those fields editable without changing the Enterprise OS. Existing values in those columns will display correctly.
