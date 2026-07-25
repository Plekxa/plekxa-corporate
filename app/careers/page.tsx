export const metadata = {
  title: "Careers",
};

export default function Page() {
  return (
    <>
      <section className="page-hero page-hero-dark">
        <div className="container narrow">
          <span className="eyebrow">Careers</span>

          <h1>Build the future of independent entertainment.</h1>

          <p>
            We're building products that help creators discover opportunities,
            collaborate professionally and reach audiences around the world. If
            you're passionate about technology, design, media and meaningful
            work, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Our Culture</span>

            <h2>Small team. Big ambition.</h2>
          </div>

          <div>
            <p>
              Plekxa is being built with long-term thinking, thoughtful product
              design and a commitment to quality over speed. We believe great
              companies are created by curious people who care deeply about what
              they build.
            </p>

            <p>
              As we grow, we'll be looking for people who are collaborative,
              ambitious and excited to help shape the future of entertainment.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-list">
          <article>
            <span>01</span>

            <h2>Purpose</h2>

            <p>
              Build products that create real opportunities for creators and
              storytellers.
            </p>
          </article>

          <article>
            <span>02</span>

            <h2>Craft</h2>

            <p>
              We value thoughtful design, strong engineering and attention to
              detail in everything we do.
            </p>
          </article>

          <article>
            <span>03</span>

            <h2>Growth</h2>

            <p>
              Join early and help shape the culture, products and future of
              Plekxa.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container narrow empty-state">
          <span className="eyebrow">Open Roles</span>

          <h2>There are currently no public openings.</h2>

          <p>
            We're still building the foundation of Plekxa. Follow our journey
            and check back soon for opportunities to join the team.
          </p>
        </div>
      </section>
    </>
  );
}