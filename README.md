# Plekxa Corporate Website v2.0

Entertainment-first corporate website for Plekxa Group Limited.

## Run

```bash
npm install
npm run dev
```

## Shared Supabase support centre

Add the same public Supabase values used by Plekxa Studio and Enterprise OS:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

The contact form inserts into the existing `support_requests` table using the anonymous insert policy. Expected columns: `name`, `email`, `topic`, `category`, `message`, `status`.

## Important

The site retains the existing Terms, Privacy and Cookie documents in `public/legal/`.
