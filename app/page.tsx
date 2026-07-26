import Link from "next/link";

const products = [
  {
    name: "Plekxa",
    label: "Entertainment platform",
    copy: "Stories, sound and experiences—all in one place.",
    href: "/products/plekxa",
    className: "product-card--plekxa",
    number: "01",
  },
  {
    name: "Plekxa Studio",
    label: "Creative technology",
    copy: "Tools and infrastructure for making ambitious work happen.",
    href: "/products/studio",
    className: "product-card--studio",
    number: "02",
  },
  {
    name: "Plekxa Experience",
    label: "Live and immersive",
    copy: "Entertainment that moves beyond the screen.",
    href: "/products/experience",
    className: "product-card--experience",
    number: "03",
  },
];

const news = [
  {
    category: "Company",
    title: "Why we are building Plekxa",
    date: "Coming soon",
    href: "/newsroom/why-plekxa",
  },
  {
    category: "Products",
    title: "Introducing Plekxa Studio",
    date: "Coming soon",
    href: "/newsroom/introducing-plekxa-studio",
  },
  {
    category: "Ideas",
    title: "A bigger canvas for entertainment and technology",
    date: "Coming soon",
    href: "/newsroom/better-infrastructure",
  },
];

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__media" aria-hidden="true">
          <div className="hero-tile hero-tile--music">
            <span>Music</span>
          </div>
          <div className="hero-tile hero-tile--people">
            <span>Together</span>
          </div>
          <div className="hero-tile hero-tile--play">
            <span>Play</span>
          </div>
          <div className="hero-tile hero-tile--live">
            <span>Live</span>
          </div>
          <div className="hero-orbit hero-orbit--one" />
          <div className="hero-orbit hero-orbit--two" />
        </div>

        <div className="container home-hero__inner">
          <p className="home-kicker">Plekxa</p>
          <h1>Made for<br />what moves you.</h1>
          <p className="home-hero__intro">
            Entertainment, experiences and technology for a more connected world.
          </p>
          <div className="home-hero__actions">
            <Link className="home-button home-button--light" href="/products">
              View products
            </Link>
            <Link className="home-text-link home-text-link--light" href="/company">
              Meet Plekxa <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="home-hero__rail" aria-label="Plekxa focus areas">
          <span>Stories</span>
          <span>Music</span>
          <span>Technology</span>
          <span>Experiences</span>
          <span>Community</span>
        </div>
      </section>

      <section className="home-products home-section">
        <div className="container">
          <div className="home-heading-row">
            <div>
              <p className="home-eyebrow">Our products</p>
              <h2>Different ways to enter the world of Plekxa.</h2>
            </div>
            <Link className="home-text-link" href="/products">
              All products <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="product-showcase">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className={`product-card ${product.className}`}
              >
                <span className="product-card__number">{product.number}</span>
                <div className="product-card__visual" aria-hidden="true">
                  <div className="product-card__device" />
                  <div className="product-card__pulse" />
                </div>
                <div className="product-card__content">
                  <p>{product.label}</p>
                  <h3>{product.name}</h3>
                  <span>{product.copy}</span>
                </div>
                <span className="product-card__arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-worlds home-section">
        <div className="container">
          <div className="home-heading-row home-heading-row--light">
            <div>
              <p className="home-eyebrow home-eyebrow--light">Experiences</p>
              <h2>More to watch. Hear. Play. Feel.</h2>
            </div>
            <Link className="home-text-link home-text-link--light" href="/products/experience">
              Explore experiences <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="world-grid">
            <Link href="/products/experience" className="world-card world-card--music">
              <span className="world-card__tag">Music</span>
              <div>
                <h3>Turn it up.</h3>
                <p>Sounds, artists and moments worth sharing.</p>
              </div>
            </Link>

            <Link href="/products/experience" className="world-card world-card--live">
              <span className="world-card__tag">Live</span>
              <div>
                <h3>Be there.</h3>
                <p>Events designed to bring people into the moment.</p>
              </div>
            </Link>

            <Link href="/products/experience" className="world-card world-card--play">
              <span className="world-card__tag">Interactive</span>
              <div>
                <h3>Join the story.</h3>
                <p>New worlds where audiences do more than watch.</p>
              </div>
            </Link>

            <Link href="/products/experience" className="world-card world-card--culture">
              <span className="world-card__tag">Culture</span>
              <div>
                <h3>Made together.</h3>
                <p>Ideas and experiences that travel across communities.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="company-band">
        <div className="company-band__art" aria-hidden="true">
          <div className="company-band__word">PLEKXA</div>
          <div className="company-band__shape company-band__shape--one" />
          <div className="company-band__shape company-band__shape--two" />
        </div>
        <div className="container company-band__inner">
          <p className="home-eyebrow home-eyebrow--light">The company</p>
          <h2>Entertainment is where we begin. Not where we end.</h2>
          <p>
            Plekxa builds consumer products, creative technology and experiences
            with the freedom to grow into what comes next.
          </p>
          <Link className="home-button home-button--light" href="/company">
            About Plekxa
          </Link>
        </div>
      </section>

      <section className="people-section home-section">
        <div className="container people-section__grid">
          <div className="people-collage" aria-hidden="true">
            <div className="people-card people-card--one"><span>Create</span></div>
            <div className="people-card people-card--two"><span>Connect</span></div>
            <div className="people-card people-card--three"><span>Celebrate</span></div>
          </div>
          <div className="people-section__copy">
            <p className="home-eyebrow">People make it possible</p>
            <h2>Big ideas need every kind of talent.</h2>
            <p>
              We are bringing together people across entertainment, design,
              technology and business to build work audiences love.
            </p>
            <Link className="home-text-link" href="/careers">
              Explore careers <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="newsroom-section home-section">
        <div className="container">
          <div className="home-heading-row">
            <div>
              <p className="home-eyebrow">Newsroom</p>
              <h2>What is happening at Plekxa.</h2>
            </div>
            <Link className="home-text-link" href="/newsroom">
              View newsroom <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="news-layout">
            <Link href={news[0].href} className="news-feature">
              <div className="news-feature__art" aria-hidden="true">
                <span>PLEKXA</span>
              </div>
              <div className="news-feature__content">
                <p>{news[0].category}</p>
                <h3>{news[0].title}</h3>
                <span>{news[0].date}</span>
              </div>
            </Link>

            <div className="news-list">
              {news.slice(1).map((story, index) => (
                <Link href={story.href} className="news-row" key={story.title}>
                  <span className="news-row__index">0{index + 2}</span>
                  <div>
                    <p>{story.category}</p>
                    <h3>{story.title}</h3>
                    <span>{story.date}</span>
                  </div>
                  <span className="news-row__arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-closing">
        <div className="home-closing__glow" aria-hidden="true" />
        <div className="container home-closing__inner">
          <p className="home-eyebrow home-eyebrow--light">What comes next</p>
          <h2>Let&apos;s make something unforgettable.</h2>
          <div className="home-closing__actions">
            <Link className="home-button home-button--light" href="/contact">
              Contact Plekxa
            </Link>
            <Link className="home-text-link home-text-link--light" href="/careers">
              Join our team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
