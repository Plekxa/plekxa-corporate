export const metadata = {
  title: "Company",
};

const principles = [
  {
    title: "Opportunity",
    copy: "We believe talented creators should be able to discover meaningful opportunities without relying on closed networks or chance connections.",
  },
  {
    title: "Craft",
    copy: "Professional tools, clear collaboration and thoughtful workflows should support great creative work at every stage.",
  },
  {
    title: "Connection",
    copy: "Creators, collaborators and audiences are strongest when they are connected through systems designed with trust and clarity.",
  },
];

export default function Page() {
  return (
    <>
      <section className="page-hero page-hero-dark">
        <div className="container narrow">
          <span className="eyebrow">About Plekxa</span>

          <h1>Building the infrastructure behind the next generation of entertainment.</h1>

          <p>
            Plekxa is a media and technology company creating connected
            products that help creators discover opportunities, collaborate
            professionally and bring exceptional stories to audiences.
          </p>
        </div>
      </section>

      <section className="section company-intro">
        <div className="container split">
          <div>
            <span className="eyebrow">Our Mission</span>

            <h2>Great stories deserve better systems.</h2>
          </div>

          <div>
            <p>
              Every year, talented creators struggle to access the opportunities,
              collaborators and professional infrastructure needed to bring
              ambitious ideas to life.
            </p>

            <p>
              We believe creativity should be supported by better systems—not
              unnecessary barriers. That's why we're building products that make
              the journey from opportunity to audience simpler, clearer and more
              connected.
            </p>
          </div>
        </div>
      </section>

      <section className="section company-intro">
        <div className="container split">
          <div>
            <span className="eyebrow">Our Vision</span>

            <h2>A connected entertainment ecosystem.</h2>
          </div>

          <div>
            <p>
              Plekxa is more than a single platform. We're building an ecosystem
              where creators can discover opportunities, develop projects,
              collaborate with confidence and eventually reach audiences through
              connected experiences.
            </p>

            <p>
              Every product we build is designed to strengthen that journey,
              creating better outcomes for creators and better experiences for
              audiences.
            </p>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <span className="eyebrow">Our Principles</span>

          <div className="values-grid">
            {principles.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>

                <h3>{item.title}</h3>

                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section company-intro">
        <div className="container split">
          <div>
            <span className="eyebrow">What We Build</span>

            <h2>Connected products for every stage of the creative journey.</h2>
          </div>

          <div>
            <p>
              <strong>Plekxa Studio</strong> gives creators professional tools to
              discover opportunities, pitch projects, manage collaboration and
              deliver work with confidence.
            </p>

            <p>
              <strong>Plekxa Experience</strong> will become a destination for
              audiences to discover original entertainment built within the
              Plekxa ecosystem.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}