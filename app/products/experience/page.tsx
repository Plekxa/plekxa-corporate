import Link from "next/link";

export const metadata = {
  title: "Plekxa Experience",
};

export default function Page() {
  return (
    <>
      <section className="experience-hero">
        <div className="experience-glow" />

        <div className="container narrow">
          <span className="eyebrow">Plekxa Experience</span>

          <h1>Entertainment, reimagined for independent stories.</h1>

          <p>
            Plekxa Experience will become a destination where audiences discover
            original films, series and creative work emerging from the Plekxa
            ecosystem—thoughtfully curated and built around quality, not
            algorithms.
          </p>

          <span className="coming-pill">Coming Soon</span>
        </div>

        <div className="experience-tiles">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Our Vision</span>

            <h2>A better experience for audiences.</h2>
          </div>

          <div>
            <p>
              Great entertainment deserves more than endless scrolling.
              We're designing an experience that helps audiences discover
              meaningful stories while giving creators a platform where original
              work can thrive.
            </p>

            <p>
              Every decision is being made with quality, simplicity and trust in
              mind. When Plekxa Experience launches, it will be because it's
              ready—not because it's rushed.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-list">
          <article>
            <span>01</span>

            <h2>Original Stories</h2>

            <p>
              A curated catalogue celebrating distinctive voices and independent
              creativity.
            </p>
          </article>

          <article>
            <span>02</span>

            <h2>Thoughtful Discovery</h2>

            <p>
              Designed to help audiences find exceptional entertainment instead
              of chasing endless recommendations.
            </p>
          </article>

          <article>
            <span>03</span>

            <h2>Connected Ecosystem</h2>

            <p>
              Bringing audiences closer to the creators and productions that
              begin inside Plekxa Studio.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container narrow prose-large">
          <span className="eyebrow">Until then</span>

          <h2>Every great experience begins with great creators.</h2>

          <p>
            While Plekxa Experience is under development, we're focused on
            building the professional infrastructure that helps creators develop
            remarkable work through Plekxa Studio.
          </p>

          <Link href="/products/studio" className="text-link">
            Explore Plekxa Studio <b>↗</b>
          </Link>
        </div>
      </section>
    </>
  );
}
