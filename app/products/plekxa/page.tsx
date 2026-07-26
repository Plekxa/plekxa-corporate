import Link from "next/link";

export const metadata = { title: "Plekxa" };

export default function Page() {
  return (
    <>
      <section className="experience-hero">
        <div className="experience-glow" />
        <div className="container narrow">
          <span className="eyebrow">Plekxa</span>
          <h1>A new way to experience entertainment.</h1>
          <p>Plekxa is our future consumer platform, designed to connect audiences with music, stories, creators and digital experiences in one connected ecosystem.</p>
          <span className="coming-pill">In development</span>
        </div>
        <div className="experience-tiles"><i /><i /><i /><i /><i /></div>
      </section>
      <section className="section">
        <div className="container split">
          <div><span className="eyebrow">The experience</span><h2>More than content consumption.</h2></div>
          <div>
            <p>Traditional platforms are built mainly around watching, listening or scrolling. Plekxa is being designed around connected entertainment experiences that help audiences discover, engage with and remember creative work in more meaningful ways.</p>
            <p>The platform will grow alongside the wider Plekxa ecosystem, connecting original intellectual property, creators, community and future physical and digital experiences.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container feature-list">
          <article><span>01</span><h2>Discover</h2><p>Find entertainment through moods, moments, stories and experiences—not only genres or algorithms.</p></article>
          <article><span>02</span><h2>Connect</h2><p>Move naturally between creators, projects and the wider worlds built around their work.</p></article>
          <article><span>03</span><h2>Experience</h2><p>Go beyond passive streaming through interactive, immersive and community-led entertainment.</p></article>
        </div>
      </section>
      <section className="section">
        <div className="container narrow prose-large">
          <span className="eyebrow">Creator foundation</span><h2>It begins with Plekxa Studio.</h2>
          <p>While the consumer platform is in development, Plekxa Studio is building the creator infrastructure and original work that will power the ecosystem.</p>
          <Link href="/products/studio" className="text-link">Explore Plekxa Studio <b>↗</b></Link>
        </div>
      </section>
    </>
  );
}
