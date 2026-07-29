-- Plekxa corporate homepage sample media and experience content
-- Safe additive seed. It does not alter or delete existing records.
-- Movies and Shows are stored in content_items, not cms_articles.

insert into public.content_items
  (title, slug, content_type, description, artwork_url, media_url, preview_url, release_at, status)
select * from (values
  ('Bittersweet', 'bittersweet', 'Movie', 'A Plekxa Original about love, memory and the feelings that remain.', 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=88', null::text, null::text, now(), 'published'),
  ('Stories and Moonlight', 'stories-and-moonlight', 'Movie', 'An atmospheric story collection made for quiet nights.', 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=88', null::text, null::text, now(), 'published'),
  ('Dancing in the Rain', 'dancing-in-the-rain-film', 'Movie', 'A visual story about movement, freedom and beginning again.', 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=88', null::text, null::text, now(), 'published'),
  ('Antidepressant', 'antidepressant-film', 'Movie', 'A human story about surviving the days that feel too heavy.', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=88', null::text, null::text, now(), 'published'),
  ('Late Night Reflections', 'late-night-reflections-film', 'Movie', 'A reflective visual experience for the hours when the world becomes quiet.', 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=88', null::text, null::text, now(), 'published'),
  ('The Listening Room', 'the-listening-room-show', 'Show', 'An intimate series built around music, stories and honest conversation.', 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1100&q=88', null::text, null::text, now(), 'published'),
  ('Stories After Dark', 'stories-after-dark-show', 'Show', 'A late-night programme of music, atmosphere and personal stories.', 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1100&q=88', null::text, null::text, now(), 'published'),
  ('Plekxa Live', 'plekxa-live-show', 'Show', 'Creators, performances and audiences brought together in one room.', 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1100&q=88', null::text, null::text, now(), 'published'),
  ('Dancing in the Rain: The Experience', 'dancing-in-the-rain-show', 'Show', 'A performance series inspired by release, joy and movement.', 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1100&q=88', null::text, null::text, now(), 'published')
) as seed(title, slug, content_type, description, artwork_url, media_url, preview_url, release_at, status)
where not exists (
  select 1 from public.content_items existing where existing.slug = seed.slug
);

-- Existing experiences table currently guarantees title, slug, published_at and status.
insert into public.experiences (title, slug, published_at, status)
select * from (values
  ('The Listening Room', 'the-listening-room', now(), 'published'),
  ('Stories After Dark', 'stories-after-dark', now(), 'published'),
  ('Dancing in the Rain', 'dancing-in-the-rain', now(), 'published'),
  ('Late Night Reflections', 'late-night-reflections', now(), 'published')
) as seed(title, slug, published_at, status)
where not exists (
  select 1 from public.experiences existing where existing.slug = seed.slug
);
