# Plekxa Corporate v3.6.5

The contact form now submits to `/api/contact`, which validates the request and stores it in the Enterprise `support_requests` table.

## Vercel variables
Set `NEXT_PUBLIC_SUPABASE_URL` and preferably `SUPABASE_SERVICE_ROLE_KEY` in Vercel, then redeploy. `NEXT_PUBLIC_SUPABASE_ANON_KEY` remains useful for existing public integrations.

Optional email alerts use `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL`.

All public contact addresses on the contact page and footer now use `info@plekxa.com`.
