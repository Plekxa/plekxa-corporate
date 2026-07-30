# Corporate database connection

The Corporate Website must use the exact same Supabase project as Enterprise OS.

Add these in Vercel > Corporate project > Settings > Environment Variables for Production, Preview and Development:

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY

Redeploy after saving them. The service role key is server-only and must never be prefixed with NEXT_PUBLIC_.

Data sources:
- Music, Shows and Movies: public.content_items (status = published)
- Experiences: public.experiences (status = published)
- Newsroom: public.cms_articles (status = published)
- Homepage Manager: public.cms_homepage_sections (status = published)
- Contact form / CRM: public.support_requests
