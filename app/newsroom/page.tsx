import { NewsCard } from "@/components/NewsCard";

export const metadata = {
  title: "Newsroom",
};

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

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Newsroom</span>

          <h1>Stories from inside Plekxa.</h1>

          <p>
            Follow our progress as we build products, share ideas and explore
            the future of independent entertainment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">What you'll find</span>

            <h2>Building in public.</h2>
          </div>

          <div>
            <p>
              The Newsroom is where we share product announcements, company
              updates, engineering progress and perspectives on the creative
              industry.
            </p>

            <p>
              As Plekxa grows, this will become a living record of the company,
              its products and the people building them.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container news-grid">
          {stories.map((story, index) => (
            <NewsCard
              key={story.title}
              category={story.category}
              title={story.title}
              date={story.date}
              href={story.href}
              index={index + 1}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container narrow prose-large">
          <span className="eyebrow">Looking ahead</span>

          <h2>This is only the beginning.</h2>

          <p>
            Over the coming months we'll share product launches, design
            decisions, engineering updates and the milestones shaping Plekxa
            into a new media and technology company.
          </p>
        </div>
      </section>
    </>
  );
}