export type CmsArticle = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  body: unknown;
  cover_image_url: string | null;
  category: string | null;
  author_name: string | null;
  featured: boolean;
  seo_title: string | null;
  seo_description: string | null;
  published_at: string | null;
  scheduled_for: string | null;
  created_at: string;
  updated_at: string;
};

export type CmsJob = {
  id: string;
  title: string;
  slug: string;
  department: string | null;
  location: string | null;
  employment_type: string | null;
  summary: string | null;
  description: unknown;
  requirements: unknown;
  closes_at: string | null;
  application_url: string | null;
  created_at: string;
};

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function rest<T>(path: string): Promise<T> {
  if (!url || !serviceKey) throw new Error("Corporate CMS environment variables are not configured.");
  const response = await fetch(`${url}/rest/v1/${path}`, {
    headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` },
    next: { revalidate: 60 },
  });
  if (!response.ok) throw new Error(`CMS request failed (${response.status}).`);
  return response.json() as Promise<T>;
}

function isVisibleArticle(article: CmsArticle) {
  const now = Date.now();
  const effective = article.published_at || article.scheduled_for;
  return !effective || new Date(effective).getTime() <= now;
}

export async function getPublishedArticles(limit = 50): Promise<CmsArticle[]> {
  try {
    const query = `cms_articles?select=*&status=eq.published&order=featured.desc,published_at.desc,created_at.desc&limit=${limit}`;
    const rows = await rest<CmsArticle[]>(query);
    return rows.filter(isVisibleArticle);
  } catch {
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<CmsArticle | null> {
  try {
    const query = `cms_articles?select=*&slug=eq.${encodeURIComponent(slug)}&status=eq.published&limit=1`;
    const rows = await rest<CmsArticle[]>(query);
    const article = rows[0] || null;
    return article && isVisibleArticle(article) ? article : null;
  } catch {
    return null;
  }
}

export async function getPublishedJobs(): Promise<CmsJob[]> {
  try {
    const query = "cms_jobs?select=*&status=in.(open,published)&order=created_at.desc";
    const rows = await rest<CmsJob[]>(query);
    return rows.filter((job) => !job.closes_at || new Date(job.closes_at).getTime() >= Date.now());
  } catch {
    return [];
  }
}

export function articleDate(article: CmsArticle) {
  return article.published_at || article.scheduled_for || article.created_at;
}

export function formatDate(value: string | null | undefined) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
}

export function plainTextBody(value: unknown): string[] {
  if (!value) return [];
  if (typeof value === "string") return value.split(/\n{2,}/).map((x) => x.trim()).filter(Boolean);
  if (Array.isArray(value)) {
    return value.flatMap((item) => {
      if (typeof item === "string") return [item];
      if (item && typeof item === "object") {
        const row = item as Record<string, unknown>;
        const text = row.text ?? row.content ?? row.value;
        if (typeof text === "string") return [text];
        if (Array.isArray(text)) return text.filter((x): x is string => typeof x === "string");
      }
      return [];
    });
  }
  if (typeof value === "object") {
    const row = value as Record<string, unknown>;
    const text = row.text ?? row.content ?? row.value;
    return typeof text === "string" ? [text] : [];
  }
  return [];
}

export type CmsHomepageSection = { id:string; section_key:string; eyebrow:string|null; title:string; subtitle:string|null; body:string|null; image_url:string|null; video_url:string|null; cta_label:string|null; cta_url:string|null; secondary_cta_label:string|null; secondary_cta_url:string|null; display_order:number; status:string };
export type CmsPage = { id:string; title:string; slug:string; template:string|null; eyebrow:string|null; headline:string|null; summary:string|null; body:string|null; hero_image_url:string|null; hero_video_url:string|null; seo_title:string|null; seo_description:string|null; status:string };
export type CmsNavItem = { id:string; label:string; url:string; location:string; parent_key:string|null; display_order:number; open_new_tab:boolean; status:string };
export type CmsLeader = { id:string; name:string; role:string; bio:string|null; image_url:string|null; linkedin_url:string|null; display_order:number };
export type CmsEvent = { id:string; title:string; slug:string; summary:string|null; description:string|null; image_url:string|null; location:string|null; starts_at:string|null; ends_at:string|null; ticket_url:string|null };

export async function getHomepageSections(): Promise<CmsHomepageSection[]> { try { return await rest<CmsHomepageSection[]>('cms_homepage_sections?select=*&status=eq.published&order=display_order.asc'); } catch { return []; } }
export async function getHomepageSection(key:string): Promise<CmsHomepageSection|null> { const rows=await getHomepageSections(); return rows.find(x=>x.section_key===key)||null; }
export async function getCmsPage(slug:string): Promise<CmsPage|null> { try { const rows=await rest<CmsPage[]>(`cms_pages?select=*&slug=eq.${encodeURIComponent(slug)}&status=eq.published&limit=1`); return rows[0]||null; } catch { return null; } }
export async function getNavigation(location?:string): Promise<CmsNavItem[]> { try { const filter=location?`&location=eq.${encodeURIComponent(location)}`:''; return await rest<CmsNavItem[]>(`cms_navigation?select=*&status=eq.published${filter}&order=display_order.asc`); } catch { return []; } }
export async function getLeadership(): Promise<CmsLeader[]> { try { return await rest<CmsLeader[]>('cms_leadership?select=*&status=eq.published&order=display_order.asc'); } catch { return []; } }
export async function getEvents(): Promise<CmsEvent[]> { try { return await rest<CmsEvent[]>('cms_events?select=*&status=eq.published&order=starts_at.asc'); } catch { return []; } }
export async function getSettings(): Promise<Record<string,string>> { try { const rows=await rest<Array<{setting_key:string;value:string|null}>>('cms_settings?select=setting_key,value&status=eq.active'); return Object.fromEntries(rows.map(x=>[x.setting_key,x.value||''])); } catch { return {}; } }


export type ContentItem = {
  id: string;
  title: string;
  slug: string | null;
  content_type: string | null;
  description: string | null;
  artwork_url: string | null;
  media_url: string | null;
  preview_url: string | null;
  release_at: string | null;
  duration_seconds: number | null;
  status: string | null;
  created_at?: string | null;
};

export type PublicExperience = {
  id: string;
  title: string;
  slug: string | null;
  summary?: string | null;
  description?: string | null;
  image_url?: string | null;
  artwork_url?: string | null;
  location?: string | null;
  published_at: string | null;
  status: string | null;
  created_at?: string | null;
};

export async function getPublishedContentItems(limit = 100): Promise<ContentItem[]> {
  try {
    return await rest<ContentItem[]>(
      `content_items?select=*&status=eq.published&order=release_at.desc,created_at.desc&limit=${limit}`
    );
  } catch {
    return [];
  }
}

export async function getPublishedExperiences(limit = 50): Promise<PublicExperience[]> {
  try {
    return await rest<PublicExperience[]>(
      `experiences?select=*&status=eq.published&order=published_at.desc,created_at.desc&limit=${limit}`
    );
  } catch {
    return [];
  }
}
