import { site } from "@/lib/site";

export const metadata = {
  title: "Plekxa Studio",
};

const features = [
  {
    title: "Discover Opportunities",
    copy: "Browse verified creative opportunities and find projects that match your skills, ambitions and experience.",
  },
  {
    title: "Pitch Ideas",
    copy: "Submit professional proposals with structured applications designed for creators and production teams.",
  },
  {
    title: "Manage Projects",
    copy: "Keep contracts, milestones, revisions, uploads and communication organised in one workspace.",
  },
  {
    title: "Collaborate",
    copy: "Work confidently with producers, collaborators and clients using professional workflows built for creative teams.",
  },
];

export default function Page() {
  return (
    <>
      <section className="product-hero product-hero-rose">
        <div className="container">
          <span className="eyebrow">Plekxa Studio</span>

          <h1>The professional workspace for modern creators.</h1>

          <p>
            Discover opportunities, pitch ideas, manage projects and collaborate
            with confidence through one connected creative platform.
          </p>

          <a href={site.studioUrl} className="button button-dark">
            Open Studio
          </a>

          <div className="studio-window">
            <div className="studio-window-bar">
              <i />
              <i />
              <i />
              <span>Plekxa Studio</span>
            </div>

            <div className="studio-window-body">
              <aside>
                <b>P</b>
                <span />
                <span />
                <span />
                <span />
              </aside>

              <div className="studio-window-main">
                <div className="window-heading">
                  <span />
                  <span />
                </div>

                <div className="window-stats">
                  <i />
                  <i />
                  <i />
                </div>

                <div className="window-cards">
                  <article />
                  <article />
                  <article />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Why Studio</span>

            <h2>Everything creators need. Nothing they don't.</h2>
          </div>

          <div>
            <p>
              Plekxa Studio brings together every stage of professional creative
              work into one platform—from discovering opportunities to delivering
              completed projects.
            </p>

            <p>
              Instead of juggling multiple tools, creators can focus on building
              great work while Studio handles the workflow behind it.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-list">
            {features.map((feature, index) => (
              <article key={feature.title}>
                <span>0{index + 1}</span>

                <h2>{feature.title}</h2>

                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <span className="eyebrow">Designed for professionals</span>

          <h2>
            Built for creators who take their work seriously.
          </h2>

          <p>
            Whether you're responding to opportunities, managing production or
            collaborating with a team, Studio provides the structure that helps
            creative work move forward with confidence.
          </p>
        </div>
      </section>
    </>
  );
}