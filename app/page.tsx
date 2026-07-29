import Link from "next/link";
import { CmsImage } from "@/components/CmsImage";
import { articleDate, formatDate, getPublishedArticles, getHomepageSections } from "@/lib/cms";

const worlds = [
  { title: "Music", copy: "Soundtracks for the moments people remember.", href: "/products/experience", className: "world-card--music" },
  { title: "Stories", copy: "Original ideas told across film, audio and emerging formats.", href: "/products/experience", className: "world-card--stories" },
  { title: "Live", copy: "Shared experiences that bring people closer to the moment.", href: "/products/experience", className: "world-card--live" },
  { title: "Interactive", copy: "Entertainment people can enter, shape and experience together.", href: "/products/experience", className: "world-card--interactive" },
];



export const revalidate = 60;

export default async function HomePage() {
  const [news, sections] = await Promise.all([getPublishedArticles(3), getHomepageSections()]);
  const byKey = Object.fromEntries(sections.map(section => [section.section_key, section]));
  const hero = byKey.hero;
  const purpose = byKey.purpose;
  return (
    <main>
      <section className="cinematic-hero">
        <div className="cinematic-hero__image" style={hero?.image_url ? {backgroundImage:`url(${hero.image_url})`} : undefined} />
        <div className="cinematic-hero__shade" />
        <div className="container cinematic-hero__content">
          <p className="kicker kicker--light">{hero?.eyebrow || "Plekxa · Entertainment & Media"}</p>
          <h1>{hero?.title || <>More life<br />in every moment.</>}</h1>
          <p className="cinematic-hero__copy">{hero?.subtitle || "We create entertainment, media and experiences that help people feel more, connect more and get more out of life."}</p>
          <div className="hero-actions">
            <Link href={hero?.cta_url || "/company"} className="pill-button pill-button--light">{hero?.cta_label || "Discover Plekxa"}</Link>
            <Link href={hero?.secondary_cta_url || "/products"} className="arrow-link arrow-link--light">{hero?.secondary_cta_label || "Explore our world"} <span>↗</span></Link>
          </div>
        </div>
        <div className="cinematic-hero__ticker" aria-hidden="true"><span>Music</span><span>Stories</span><span>Experiences</span><span>Creators</span><span>Culture</span></div>
      </section>

      <section className="statement-section">
        <div className="container statement-grid">
          <p className="kicker">Why we exist</p>
          <div>
            <h2>Entertainment is not just something people consume. It is part of how they live.</h2>
            <p>It gives people reasons to celebrate, places to escape, stories to carry and moments to share. Plekxa exists to make those experiences richer, more meaningful and more connected.</p>
          </div>
        </div>
      </section>

      <section className="worlds-section">
        <div className="container section-heading-row">
          <div><p className="kicker kicker--light">Our world</p><h2>Made to be felt.</h2></div>
          <Link href="/products/experience" className="arrow-link arrow-link--light">Explore experiences <span>↗</span></Link>
        </div>
        <div className="container entertainment-grid">
          {worlds.map((world) => (
            <Link key={world.title} href={world.href} className={`entertainment-card ${world.className}`}>
              <div className="entertainment-card__overlay" />
              <div className="entertainment-card__content"><span>Explore</span><h3>{world.title}</h3><p>{world.copy}</p></div>
              <b aria-hidden="true">↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="ecosystem-section">
        <div className="container ecosystem-intro">
          <p className="kicker">The Plekxa ecosystem</p>
          <h2>One entertainment company.<br />Many ways to create and experience.</h2>
        </div>
        <div className="container ecosystem-grid">
          <Link href="/products/plekxa" className="ecosystem-card ecosystem-card--consumer">
            <div className="ecosystem-card__visual"><span className="orb orb--one"/><span className="orb orb--two"/><strong>P</strong></div>
            <div className="ecosystem-card__copy"><p>For audiences</p><h3>Plekxa</h3><span>A future destination for music, stories and experiences.</span></div>
          </Link>
          <Link href="/products/studio" className="ecosystem-card ecosystem-card--studio">
            <div className="studio-window"><span/><span/><span/><div className="studio-window__body"><b>CREATE</b><i>COLLABORATE</i><em>OWN</em></div></div>
            <div className="ecosystem-card__copy"><p>For creators</p><h3>Plekxa Studio</h3><span>The professional platform for creating entertainment together.</span></div>
          </Link>
          <Link href="/products/experience" className="ecosystem-card ecosystem-card--experience">
            <div className="experience-rings"><span/><span/><span/></div>
            <div className="ecosystem-card__copy"><p>For everyone</p><h3>Plekxa Experiences</h3><span>Digital, physical and live experiences designed around real life.</span></div>
          </Link>
        </div>
      </section>

      <section className="purpose-banner">
        <div className="purpose-banner__image" style={purpose?.image_url ? {backgroundImage:`url(${purpose.image_url})`} : undefined} />
        <div className="purpose-banner__overlay" />
        <div className="container purpose-banner__content">
          <p className="kicker kicker--light">{purpose?.eyebrow || "Our ambition"}</p>
          <h2>{purpose?.title || "Helping people live their best lives."}</h2>
          <p>{purpose?.body || "Not by telling people how to live—but by creating more reasons to feel alive."}</p>
          <Link href={purpose?.cta_url || "/company"} className="pill-button pill-button--light">{purpose?.cta_label || "Read our story"}</Link>
        </div>
      </section>

      <section className="news-home">
        <div className="container section-heading-row">
          <div><p className="kicker">Newsroom</p><h2>From Plekxa.</h2></div>
          <Link href="/newsroom" className="arrow-link">View all news <span>↗</span></Link>
        </div>
        <div className="container editorial-grid">
          {news.length ? news.map((item, index) => <Link key={item.id} href={`/newsroom/${item.slug}`} className={`editorial-card editorial-card--${["one","two","three"][index]}`}><CmsImage src={item.cover_image_url} alt={item.title} className="editorial-card__art"/><div><p>{item.category || "News"} · {formatDate(articleDate(item))}</p><h3>{item.title}</h3><span>Read more ↗</span></div></Link>) : <div className="news-empty"><p>Newsroom</p><h3>Stories published in Enterprise OS will appear here automatically.</h3><Link href="/newsroom">Open newsroom ↗</Link></div>}
        </div>
      </section>

      <section className="careers-callout">
        <div className="container careers-callout__inner"><div><p className="kicker kicker--light">Careers</p><h2>Make something people will remember.</h2></div><Link href="/careers" className="pill-button pill-button--light">Work with us</Link></div>
      </section>
    </main>
  );
}
