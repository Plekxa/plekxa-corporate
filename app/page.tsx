import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductPreview } from "@/components/ProductPreview";
import { NewsCard } from "@/components/NewsCard";
import { site } from "@/lib/site";

const stories = [
  {
    category: "Product",
    title: "Introducing the new Plekxa Creator Studio",
    date: "Coming soon",
    href: "/newsroom/introducing-plekxa-studio",
  },
  {
    category: "Company",
    title: "Why we are building Plekxa",
    date: "Coming soon",
    href: "/newsroom/why-plekxa",
  },
  {
    category: "Perspective",
    title: "Designing better infrastructure for independent entertainment",
    date: "Coming soon",
    href: "/newsroom/better-infrastructure",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

        <div className="container hero-inner">
          <span className="eyebrow">Media & Technology Company</span>

          <h1>Great stories deserve better systems.</h1>

          <p>
            Plekxa builds connected products that help creators discover
            opportunities, collaborate professionally, and bring ambitious
            entertainment to audiences.
          </p>

          <div className="button-row">
            <Link href="/company" className="button button-primary">
              Discover Plekxa
            </Link>

            <a href={site.studioUrl} className="button button-ghost">
              Open Studio
            </a>
          </div>
        </div>

        <div className="hero-frame">
          <div className="hero-frame-top">
            <span>PLEKXA / 01</span>
            <span>MEDIA & TECHNOLOGY</span>
          </div>

          <div className="hero-frame-center">
            <i />
            <i />
            <i />
          </div>

          <div className="hero-frame-bottom">
            <span>Discover</span>
            <span>Create</span>
            <span>Experience</span>
          </div>
        </div>
      </section>

      <section className="statement section">
        <div className="container narrow">
          <p>
            Talent is everywhere.
            <strong> Opportunity is not.</strong>
          </p>

          <p>
            Plekxa exists to create clearer paths between creative potential,
            professional collaboration, and real audiences.
          </p>
        </div>
      </section>

      <section className="section products-section">
        <div className="container">
          <SectionHeading
            eyebrow="Our ecosystem"
            title="One company. Two connected experiences."
            copy="Professional infrastructure for creators today, and a new destination for audiences tomorrow."
          />

          <div className="product-grid">
            <ProductPreview
              eyebrow="For creators"
              title="Plekxa Studio"
              copy="Discover opportunities, pitch ideas, sign contracts, manage projects and move creative work from possibility to delivery."
              href="/products/studio"
              status="Available now"
              variant="rose"
            />

            <ProductPreview
              eyebrow="For audiences"
              title="Plekxa Experience"
              copy="A future destination for original stories, independent voices and entertainment built differently."
              href="/products/experience"
              status="Coming soon"
              variant="dark"
            />
          </div>
        </div>
      </section>

      <section className="section ecosystem">
        <div className="container">
          <SectionHeading
            eyebrow="The Plekxa journey"
            title="From opportunity to audience."
            copy="Every Plekxa product is designed to support a different stage of the entertainment journey."
            align="center"
          />

          <div className="steps">
            <article>
              <span>01</span>
              <h3>Discover</h3>
              <p>
                Find meaningful opportunities, original ideas and projects
                worth pursuing.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Create</h3>
              <p>
                Build ambitious work with the right collaborators, tools and
                professional structure.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Experience</h3>
              <p>
                Bring distinctive entertainment to audiences through a
                connected platform.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="feature-story section">
        <div className="container feature-story-grid">
          <div className="feature-visual">
            <div className="feature-ring" />

            <div className="feature-card">
              <span>BUILDING</span>
              <strong>
                BETTER
                <br />
                SYSTEMS
              </strong>
            </div>
          </div>

          <div className="feature-copy">
            <span className="eyebrow">Our point of view</span>

            <h2>Building the future of independent entertainment.</h2>

            <p>
              Plekxa is creating an ecosystem where creators, collaborators and
              audiences are connected through products designed to support
              every stage of the creative journey.
            </p>

            <Link href="/company" className="text-link">
              Learn more about Plekxa <b>↗</b>
            </Link>
          </div>
        </div>
      </section>

      <section className="section newsroom-preview">
        <div className="container">
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="Latest from Plekxa"
              title="Newsroom"
              copy="Product updates, company news and perspectives on the future of entertainment."
            />

            <Link href="/newsroom" className="text-link">
              View all stories <b>↗</b>
            </Link>
          </div>

          <div className="news-grid">
            {stories.map((story, index) => (
              <NewsCard
                key={story.title}
                {...story}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="container narrow">
          <span className="eyebrow">The next chapter</span>

          <h2>The next great story starts with an opportunity.</h2>

          <p>
            Discover projects, build professional collaborations and create
            work worth experiencing.
          </p>

          <div className="button-row">
            <a href={site.studioUrl} className="button button-light">
              Open Studio
            </a>

            <Link href="/contact" className="button button-outline-light">
              Contact Plekxa
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}