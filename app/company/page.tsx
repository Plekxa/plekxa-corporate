import Link from "next/link";

export const metadata = { title: "Company" };

const principles = [
  { title: "Creator empowerment", copy: "We build infrastructure that gives creators better ways to develop ideas, collaborate, manage rights and participate in long-term value." },
  { title: "Connected experiences", copy: "We connect creation, distribution, discovery and audience engagement instead of treating them as separate worlds." },
  { title: "Long-term thinking", copy: "We are building an adaptable entertainment ecosystem designed to grow across products, formats and markets." },
];

export default function Page() {
  return (
    <>
      <section className="page-hero page-hero-dark">
        <div className="container narrow">
          <span className="eyebrow">About Plekxa</span>
          <h1>Building a more connected future for entertainment.</h1>
          <p>Plekxa is an entertainment technology company developing products and services that empower creators, enable businesses and transform how people experience entertainment.</p>
        </div>
      </section>

      <section className="section company-intro">
        <div className="container split">
          <div><span className="eyebrow">What we are building</span><h2>Better infrastructure for creativity.</h2></div>
          <div>
            <p>Founded on the belief that creativity deserves better infrastructure, Plekxa is building an integrated ecosystem where creators can develop ideas, collaborate across disciplines, manage intellectual property and connect their work to audiences through innovative digital experiences.</p>
            <p>Our ambition extends beyond individual products. We are connecting every stage of the entertainment value chain—from creation and collaboration to distribution, discovery, engagement and immersive experiences.</p>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <span className="eyebrow">Our principles</span>
          <div className="values-grid">
            {principles.map((item, index) => (
              <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section company-intro">
        <div className="container split">
          <div><span className="eyebrow">Our products</span><h2>One company. A connected ecosystem.</h2></div>
          <div>
            <p><strong>Plekxa Studio</strong> is the creator platform at the heart of our ecosystem. It gives creators tools and opportunities to collaborate on projects, develop original intellectual property, manage rights, generate royalties and participate in entertainment experiences.</p>
            <p><strong>Plekxa</strong> is our future consumer platform, designed to bring together entertainment, creators and digital experiences in ways that go beyond simply watching, listening or streaming.</p>
            <Link href="/products" className="text-link">Explore our products <b>↗</b></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow prose-large">
          <span className="eyebrow">Looking ahead</span>
          <h2>Building for the long term.</h2>
          <p>Beginning with creator infrastructure through Plekxa Studio and expanding into consumer experiences through future Plekxa products, we are creating an integrated entertainment ecosystem for the next generation of creators and audiences.</p>
          <p>We believe the future of entertainment will be more connected, collaborative and immersive—and Plekxa is building the technology to help make that future possible.</p>
        </div>
      </section>
    </>
  );
}
