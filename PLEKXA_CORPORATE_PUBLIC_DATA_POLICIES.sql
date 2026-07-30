-- Run once in the same Supabase project used by Enterprise OS.
-- Allows the public corporate website to read only published content and submit enquiries.

alter table if exists public.content_items enable row level security;
alter table if exists public.experiences enable row level security;
alter table if exists public.cms_articles enable row level security;
alter table if exists public.cms_homepage_sections enable row level security;
alter table if exists public.support_requests enable row level security;

drop policy if exists "public read published content items" on public.content_items;
create policy "public read published content items"
on public.content_items for select
to anon, authenticated
using (status = 'published');

drop policy if exists "public read published experiences" on public.experiences;
create policy "public read published experiences"
on public.experiences for select
to anon, authenticated
using (status = 'published');

drop policy if exists "public read published articles" on public.cms_articles;
create policy "public read published articles"
on public.cms_articles for select
to anon, authenticated
using (status = 'published');

drop policy if exists "public read published homepage" on public.cms_homepage_sections;
create policy "public read published homepage"
on public.cms_homepage_sections for select
to anon, authenticated
using (status = 'published');

drop policy if exists "Visitors can submit support requests" on public.support_requests;
create policy "Visitors can submit support requests"
on public.support_requests for insert
to anon, authenticated
with check (true);

notify pgrst, 'reload schema';
