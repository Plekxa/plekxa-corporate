import Link from "next/link";

export const metadata = { title: "Newsroom" };

const stories = [
  { category: "Product", title: "Introducing the new Plekxa Creator Studio", excerpt: "A professional workspace designed to help creators move from opportunity to finished work.", date: "Coming soon", href: "/newsroom/introducing-plekxa-studio", image: "studio" },
  { category: "Company", title: "Why we are building Plekxa", excerpt: "Our vision for a connected entertainment ecosystem spanning creation, distribution and experiences.", date: "Coming soon", href: "/newsroom/why-plekxa", image: "company" },
  { category: "Perspective", title: "Designing better infrastructure for entertainment", excerpt: "Why workflows, rights management and visibility matter just as much as creative tools.", date: "Coming soon", href: "/newsroom/better-infrastructure", image: "infrastructure" },
];

export default function Page() {
  return (
    <>
      <section className="page-hero newsroom-hero">
        <div className="container page-hero__grid">
          <div>
            <span className="eyebrow">Newsroom</span>
            <h1>Ideas, progress and stories from Plekxa.</h1>
          </div>
          <p>Follow what we are building across entertainment, creator technology and connected audience experiences.</p>
        </div>
      </section>

      <section className="section newsroom-feature-wrap">
        <div className="container">
          <Link href={stories[0].href} className="newsroom-feature-card">
            <div className="newsroom-image newsroom-image--studio"><span>Product update</span></div>
            <div className="newsroom-feature-copy">
              <div className="newsroom-meta"><span>{stories[0].category}</span><time>{stories[0].date}</time></div>
              <h2>{stories[0].title}</h2>
              <p>{stories[0].excerpt}</p>
              <strong>Read story <b>↗</b></strong>
            </div>
          </Link>
        </div>
      </section>

      <section className="section newsroom-list-section">
        <div className="container">
          <div className="section-heading section-heading--row">
            <div><span className="eyebrow">Latest</span><h2>From across the company.</h2></div>
            <p>Company announcements, product thinking and perspectives on the future of entertainment.</p>
          </div>
          <div className="newsroom-card-grid">
            {stories.slice(1).map((story) => (
              <Link href={story.href} className="newsroom-card" key={story.title}>
                <div className={`newsroom-image newsroom-image--${story.image}`} />
                <div className="newsroom-card-copy">
                  <div className="newsroom-meta"><span>{story.category}</span><time>{story.date}</time></div>
                  <h3>{story.title}</h3>
                  <p>{story.excerpt}</p>
                  <strong>Read story <b>↗</b></strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-cta">
        <div className="container editorial-cta__inner">
          <div><span className="eyebrow">Press and media</span><h2>Looking for more information?</h2></div>
          <a href="mailto:press@plekxa.com" className="button button-light">Contact our press team</a>
        </div>
      </section>
    </>
  );
}
