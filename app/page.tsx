import Link from "next/link";
import { HomeRail, type HomeRailItem } from "@/components/HomeRail";
import { articleDate, formatDate, getHomepageSections, getPublishedArticles } from "@/lib/cms";

export const revalidate = 60;

const productItems: HomeRailItem[] = [
  {
    id: "plekxa",
    eyebrow: "For audiences",
    title: "Plekxa",
    description: "Music, stories and entertainment experiences built around real life.",
    href: "/products/plekxa",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1500&q=86",
    cta: "Discover Plekxa",
  },
  {
    id: "studio",
    eyebrow: "For creators",
    title: "Plekxa Studio",
    description: "A place to discover opportunities, pitch ideas and create with others.",
    href: "/products/studio",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1500&q=86",
    cta: "Explore Studio",
  },
  {
    id: "experiences",
    eyebrow: "Live and physical",
    title: "Plekxa Experiences",
    description: "Entertainment that moves beyond the screen and into memorable moments.",
    href: "/products/experience",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1500&q=86",
    cta: "Explore experiences",
  },
  {
    id: "company",
    eyebrow: "The company",
    title: "Inside Plekxa",
    description: "Learn about our purpose, our people and the world we are building.",
    href: "/company",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=86",
    cta: "About Plekxa",
  },
];

export default async function HomePage() {
  const [articles, sections] = await Promise.all([
    getPublishedArticles(12),
    getHomepageSections(),
  ]);

  const byKey = Object.fromEntries(sections.map((section) => [section.section_key, section]));
  const hero = byKey.hero;

  const newsItems: HomeRailItem[] = articles.length
    ? articles.map((article) => ({
        id: article.id,
        eyebrow: `${article.category || "News"} · ${formatDate(articleDate(article))}`,
        title: article.title,
        description: article.excerpt || undefined,
        href: `/newsroom/${article.slug}`,
        image: article.cover_image_url,
        cta: "Read story",
      }))
    : [
        {
          id: "newsroom-placeholder",
          eyebrow: "Newsroom",
          title: "Plekxa stories will appear here.",
          description: "Publish an article in Enterprise OS and it will automatically join this slider.",
          href: "/newsroom",
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1500&q=86",
          cta: "Visit newsroom",
        },
      ];

  return (
    <main className="disney-home">
      <section className="disney-hero">
        <div
          className="disney-hero__image"
          style={hero?.image_url ? { backgroundImage: `url(${hero.image_url})` } : undefined}
          aria-hidden="true"
        />
        <div className="disney-hero__shade" />
        <div className="container disney-hero__content">
          <p>{hero?.eyebrow || "Plekxa · Entertainment & Media"}</p>
          <h1>{hero?.title || "Entertainment for a fuller life."}</h1>
          <span>
            {hero?.subtitle ||
              "We create music, stories, platforms and experiences that help people feel more, connect more and enjoy life more."}
          </span>
          <div className="disney-hero__actions">
            <Link href={hero?.cta_url || "/products"} className="disney-button disney-button--light">
              {hero?.cta_label || "Explore Plekxa"}
            </Link>
            <Link href={hero?.secondary_cta_url || "/company"} className="disney-button disney-button--outline">
              {hero?.secondary_cta_label || "About us"}
            </Link>
          </div>
        </div>
      </section>

      <section className="disney-section">
        <div className="container disney-section__heading">
          <div>
            <p>Explore</p>
            <h2>The world of Plekxa</h2>
          </div>
          <Link href="/products">View all</Link>
        </div>
        <HomeRail items={productItems} label="The world of Plekxa" />
      </section>

      <section className="disney-section disney-section--soft">
        <div className="container disney-section__heading">
          <div>
            <p>Latest</p>
            <h2>From Plekxa</h2>
          </div>
          <Link href="/newsroom">Visit newsroom</Link>
        </div>
        <HomeRail items={newsItems} label="Latest from Plekxa" />
      </section>

      <section className="disney-purpose">
        <div className="container disney-purpose__inner">
          <div>
            <p>Our purpose</p>
            <h2>Helping people live their best lives.</h2>
          </div>
          <div>
            <span>We believe entertainment can make everyday life richer—giving people something to feel, share, remember and look forward to.</span>
            <Link href="/company">Discover our story <b aria-hidden="true">→</b></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
