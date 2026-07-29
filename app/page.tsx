import Link from "next/link";
import { CmsImage } from "@/components/CmsImage";
import { articleDate, formatDate, getPublishedArticles, getHomepageSections } from "@/lib/cms";

export const revalidate = 60;

const offerings = [
  {
    eyebrow: "For audiences",
    title: "Plekxa",
    copy: "A future home for music, stories and entertainment experiences made around real life.",
    href: "/products/plekxa",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=85",
  },
  {
    eyebrow: "For creators",
    title: "Plekxa Studio",
    copy: "A professional platform for discovering opportunities, pitching ideas and creating together.",
    href: "/products/studio",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1800&q=85",
  },
  {
    eyebrow: "Beyond the screen",
    title: "Plekxa Experiences",
    copy: "Digital, physical and live entertainment designed to turn ordinary moments into memorable ones.",
    href: "/products/experience",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1800&q=85",
  },
];

export default async function HomePage() {
  const [news, sections] = await Promise.all([getPublishedArticles(3), getHomepageSections()]);
  const byKey = Object.fromEntries(sections.map((section) => [section.section_key, section]));
  const hero = byKey.hero;
  const purpose = byKey.purpose;

  return (
    <main className="clean-home">
      <section className="clean-hero">
        <div
          className="clean-hero__media"
          style={hero?.image_url ? { backgroundImage: `url(${hero.image_url})` } : undefined}
          aria-hidden="true"
        />
        <div className="clean-hero__overlay" />
        <div className="container clean-hero__content">
          <p className="clean-kicker">{hero?.eyebrow || "Plekxa · Entertainment & Media"}</p>
          <h1>{hero?.title || "Entertainment for a fuller life."}</h1>
          <p>{hero?.subtitle || "We create music, stories, platforms and experiences that help people feel more, connect more and enjoy life more."}</p>
          <div className="clean-actions">
            <Link href={hero?.cta_url || "/products"} className="clean-button clean-button--primary">
              {hero?.cta_label || "Explore Plekxa"}
            </Link>
            <Link href={hero?.secondary_cta_url || "/company"} className="clean-button clean-button--light">
              {hero?.secondary_cta_label || "About the company"}
            </Link>
          </div>
        </div>
      </section>

      <section className="clean-intro">
        <div className="container clean-intro__inner">
          <p className="clean-kicker clean-kicker--dark">Our purpose</p>
          <h2>{purpose?.title || "Helping people live their best lives."}</h2>
          <p>{purpose?.body || "We believe entertainment can make everyday life richer—giving people something to feel, share, remember and look forward to."}</p>
          <Link href={purpose?.cta_url || "/company"} className="clean-text-link">
            {purpose?.cta_label || "Our story"} <span>→</span>
          </Link>
        </div>
      </section>

      <section className="clean-offerings">
        <div className="container clean-section-heading">
          <div>
            <p className="clean-kicker clean-kicker--dark">Our world</p>
            <h2>One company. More ways to experience entertainment.</h2>
          </div>
          <Link href="/products" className="clean-text-link">See everything <span>→</span></Link>
        </div>

        <div className="container clean-feature-list">
          {offerings.map((item) => (
            <Link href={item.href} className="clean-feature" key={item.title}>
              <div className="clean-feature__image" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="clean-feature__copy">
                <p>{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <span>{item.copy}</span>
                <strong>Discover more <b>→</b></strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="clean-news">
        <div className="container clean-section-heading">
          <div>
            <p className="clean-kicker clean-kicker--dark">Latest</p>
            <h2>From Plekxa.</h2>
          </div>
          <Link href="/newsroom" className="clean-text-link">Visit newsroom <span>→</span></Link>
        </div>

        <div className="container clean-news-grid">
          {news.length ? news.map((item) => (
            <Link key={item.id} href={`/newsroom/${item.slug}`} className="clean-news-card">
              <CmsImage src={item.cover_image_url} alt={item.title} className="clean-news-card__image" />
              <div className="clean-news-card__copy">
                <p>{item.category || "News"} · {formatDate(articleDate(item))}</p>
                <h3>{item.title}</h3>
                <span>Read story →</span>
              </div>
            </Link>
          )) : (
            <div className="clean-news-empty">
              <p>Newsroom</p>
              <h3>Stories published in Enterprise OS will appear here automatically.</h3>
            </div>
          )}
        </div>
      </section>

      <section className="clean-careers">
        <div className="container clean-careers__inner">
          <div>
            <p className="clean-kicker clean-kicker--dark">Careers</p>
            <h2>Make something people will remember.</h2>
          </div>
          <Link href="/careers" className="clean-button clean-button--primary">Work with us</Link>
        </div>
      </section>
    </main>
  );
}
