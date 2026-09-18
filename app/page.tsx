import Link from "next/link";
import { HomeRail, type HomeRailItem } from "@/components/HomeRail";
import { articleDate, formatDate, getHomepageSections, getPublishedArticles, getPublishedContentItems, getPublishedReleases, getPublishedCollections } from "@/lib/cms";

export const revalidate = 60;

const productItems: HomeRailItem[] = [
  {
    id: "plekxa",
    eyebrow: "PLEKXA",
    title: "Plekxa",
    description: "Music, stories and entertainment experiences built around real life.",
    href: "/products/plekxa",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1500&q=86",
  },
  {
    id: "studio",
    eyebrow: "PLEKXA STUDIO",
    title: "Create with Plekxa",
    description: "Discover opportunities, pitch ideas and collaborate with creators.",
    href: "/products/studio",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1500&q=86",
  },
  {
    id: "events",
    eyebrow: "LIVE & EVENTS",
    title: "Beyond the screen",
    description: "Live entertainment and shared moments from Plekxa.",
    href: "/events",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1500&q=86",
  },
  {
    id: "company",
    eyebrow: "COMPANY",
    title: "Inside Plekxa",
    description: "Learn about our purpose, people and the world we are building.",
    href: "/company",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=86",
  },
];

const movieFallback: HomeRailItem[] = [
  { id:"movie-1", title:"Bittersweet", eyebrow:"PLEKXA ORIGINAL", href:"/products/plekxa", image:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=88" },
  { id:"movie-2", title:"Stories and Moonlight", eyebrow:"COMING SOON", href:"/products/plekxa", image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=88" },
  { id:"movie-3", title:"Dancing in the Rain", eyebrow:"PLEKXA ORIGINAL", href:"/products/plekxa", image:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=88" },
  { id:"movie-4", title:"Antidepressant", eyebrow:"IN DEVELOPMENT", href:"/products/plekxa", image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=88" },
  { id:"movie-5", title:"Late Night Reflections", eyebrow:"PLEKXA ORIGINAL", href:"/products/plekxa", image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=88" },
];

const musicFallback: HomeRailItem[] = [
  { id:"music-1", title:"Bittersweet", eyebrow:"PLEKXA MUSIC", href:"/music", image:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1100&q=88" },
  { id:"music-2", title:"Dancing in the Rain", eyebrow:"PLEKXA MUSIC", href:"/music", image:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1100&q=88" },
  { id:"music-3", title:"Antidepressant", eyebrow:"PLEKXA MUSIC", href:"/music", image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=88" },
  { id:"music-4", title:"Late Night Reflections", eyebrow:"PLEKXA MUSIC", href:"/music", image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1100&q=88" },
];

const showFallback: HomeRailItem[] = [
  { id:"show-1", title:"The Listening Room", description:"A live audience experience.", href:"/events", image:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1100&q=88" },
  { id:"show-2", title:"Stories After Dark", description:"Music, conversation and atmosphere.", href:"/events", image:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1100&q=88" },
  { id:"show-3", title:"Plekxa Live", description:"Creators and audiences in one room.", href:"/events", image:"https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1100&q=88" },
  { id:"show-4", title:"Dancing in the Rain", description:"An immersive entertainment experience.", href:"/events", image:"https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1100&q=88" },
];

export default async function HomePage() {
  const [articles, sections, contentItems, releases, collections] = await Promise.all([
    getPublishedArticles(60),
    getHomepageSections(),
    getPublishedContentItems(100),
    getPublishedReleases(100),
    getPublishedCollections(50),
  ]);

  const byKey = Object.fromEntries(sections.map((section) => [section.section_key, section]));
  const hero = byKey.hero;
  const promo = byKey.promo || byKey.homepage_promo || byKey.final_promo;

  const newsItems: HomeRailItem[] = articles.length
    ? articles.slice(0, 12).map((article) => ({
        id: article.id,
        eyebrow: `${article.category || "News"} · ${formatDate(articleDate(article))}`,
        title: article.title,
        description: article.excerpt || undefined,
        href: `/newsroom/${article.slug}`,
        image: article.cover_image_url,
      }))
    : [{ id:"newsroom-placeholder", eyebrow:"NEWSROOM", title:"Plekxa stories will appear here.", description:"Company stories and updates will appear here as they are published.", href:"/newsroom", image:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1500&q=86" }];

  // Movies and shows are entertainment content, not newsroom articles.
  // They are sourced from Enterprise OS Content Studio (`content_items`).
  const movieContent = contentItems.filter((item) => /movie|film|cinema|feature|short film/i.test(item.content_type || ""));
  const showContent = contentItems.filter((item) => /show|series|programme|program|episode|television|tv/i.test(item.content_type || ""));
  const musicContent = contentItems.filter((item) => /music|song|single|album|ep|audio|soundtrack/i.test(item.content_type || ""));

  const movieItems: HomeRailItem[] = movieContent.length
    ? movieContent.map((item) => ({
        id: item.id,
        title: item.title,
        eyebrow: item.content_type || "MOVIE",
        href: item.media_url || item.preview_url || "/products/plekxa",
        image: item.artwork_url,
      }))
    : movieFallback;

  const showItems: HomeRailItem[] = showContent.length
    ? showContent.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description || undefined,
        eyebrow: item.content_type || "SHOW",
        href: item.media_url || item.preview_url || "/products/plekxa",
        image: item.artwork_url,
      }))
    : showFallback;

  const musicReleases = releases.filter((item) => /music|audio/i.test(item.asset_type || ""));
  const musicItems: HomeRailItem[] = musicReleases.length
    ? musicReleases.map((item) => ({ id:item.release_id, title:item.title, description:item.description||undefined, eyebrow:item.profile_name||"PLEKXA MUSIC", href:item.platform_url||"/music", image:item.artwork_url }))
    : musicContent.length ? musicContent.map((item)=>({id:item.id,title:item.title,description:item.description||undefined,eyebrow:item.content_type||"MUSIC",href:item.media_url||item.preview_url||"/music",image:item.artwork_url})) : musicFallback;

  const collectionItems: HomeRailItem[] = collections.map((collection) => ({
    id: collection.id, title: collection.title, description: collection.description || undefined,
    eyebrow: collection.collection_type.toUpperCase(), href: collection.slug ? `/collections#${collection.slug}` : "/collections", image: collection.artwork_url
  }));

  return (
    <main className="disney-home">
      <section className="disney-hero">
        <div className="disney-hero__image" style={hero?.image_url ? { backgroundImage: `url(${hero.image_url})` } : undefined} aria-hidden="true" />
        <div className="disney-hero__shade" />
        <div className="container disney-hero__content">
          <p>{hero?.eyebrow || "Plekxa · Entertainment & Media"}</p>
          <h1>{hero?.title || "Entertainment for a fuller life."}</h1>
          <span>{hero?.subtitle || "We create music, stories, releases and collections that help people feel more, connect more and enjoy life more."}</span>
          <div className="disney-hero__actions">
            <Link href={hero?.cta_url || "/products"} className="disney-button disney-button--light">{hero?.cta_label || "Explore Plekxa"}</Link>
            <Link href={hero?.secondary_cta_url || "/company"} className="disney-button disney-button--outline">{hero?.secondary_cta_label || "About us"}</Link>
          </div>
        </div>
      </section>

      <section className="disney-section disney-section--news">
        <div className="container disney-section__heading"><h2>Latest from Plekxa</h2></div>
        <HomeRail items={newsItems} label="Latest from Plekxa" variant="feature" />
        <div className="disney-section__action"><Link href="/newsroom" className="disney-button disney-button--light">Visit newsroom</Link></div>
      </section>

      <section className="disney-section disney-section--music">
        <div className="container disney-section__heading"><h2>Music</h2></div>
        <HomeRail items={musicItems} label="Music" variant="compact" />
      </section>

      <section className="disney-section disney-section--shows">
        <div className="container disney-section__heading"><h2>Shows</h2></div>
        <HomeRail items={showItems} label="Shows" variant="show" />
      </section>

      <section className="disney-section disney-section--collections">
        <div className="container disney-section__heading"><h2>Collections</h2></div>
        <HomeRail items={collectionItems} label="Collections" variant="feature" />
      </section>

      <section className="disney-section disney-section--movies">
        <div className="container disney-section__heading"><h2>Movies</h2></div>
        <HomeRail items={movieItems} label="Movies" variant="poster" />
      </section>

      <section className="disney-promo">
        <div className="container disney-promo__frame" style={promo?.image_url ? { backgroundImage:`url(${promo.image_url})` } : undefined}>
          <div className="disney-promo__shade" />
          <div className="disney-promo__content">
            <p>{promo?.eyebrow || "MORE FROM PLEKXA"}</p>
            <h2>{promo?.title || "Entertainment that stays with you."}</h2>
            <span>{promo?.subtitle || promo?.body || "Discover the stories, creators and releases shaping the world of Plekxa."}</span>
            <Link href={promo?.cta_url || "/products"} className="disney-button disney-button--light">{promo?.cta_label || "Explore our world"}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
