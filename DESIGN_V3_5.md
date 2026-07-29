# Corporate Website v3.5

Movies and Shows now read from Enterprise OS **Content Studio** (`content_items`). They no longer use newsroom articles.

An Experiences rail reads published records from the existing `experiences` table.

Run `PLEKXA_CONTENT_SEED_V3_5.sql` once in Supabase to add sample published content. Existing records are preserved and duplicate slugs are skipped.
