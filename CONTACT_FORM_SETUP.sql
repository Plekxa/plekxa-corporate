-- Run only if you do NOT set SUPABASE_SERVICE_ROLE_KEY on Vercel.
-- This permits anonymous visitors to create support requests but not read them.
alter table public.support_requests enable row level security;

drop policy if exists "Public can submit support requests" on public.support_requests;
create policy "Public can submit support requests"
on public.support_requests
for insert
to anon
with check (
  length(trim(name)) between 1 and 120
  and length(trim(email)) between 3 and 254
  and length(trim(topic)) between 1 and 180
  and length(trim(message)) between 10 and 5000
  and status = 'new'
);
