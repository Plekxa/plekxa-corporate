import { ProductPreview } from "@/components/ProductPreview";

export const metadata = {
  title: "Products",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Products</span>

          <h1>One ecosystem. Built for every stage of the creative journey.</h1>

          <p>
            Plekxa is creating connected products that help creators discover
            opportunities, collaborate professionally and bring exceptional
            entertainment to audiences.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our ecosystem</span>

            <h2>Purpose-built experiences.</h2>

            <p>
              Every Plekxa product is designed to solve a different challenge
              while working together as one connected platform.
            </p>
          </div>

          <div className="product-grid">
            <ProductPreview
              eyebrow="Available Today"
              title="Plekxa Studio"
              copy="A professional workspace where creators discover opportunities, submit pitches, manage contracts, collaborate with teams and deliver ambitious projects."
              href="/products/studio"
              status="Available now"
              variant="rose"
            />

            <ProductPreview
              eyebrow="Coming Soon"
              title="Plekxa Experience"
              copy="A new entertainment destination where audiences discover original films, series and creative work emerging from the Plekxa ecosystem."
              href="/products/experience"
              status="Coming soon"
              variant="dark"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Why they're connected</span>

            <h2>From opportunity to audience.</h2>
          </div>

          <div>
            <p>
              Most platforms solve only one part of the creative process.
              Plekxa is building an ecosystem where creators can move from
              discovering an opportunity to developing a project, collaborating
              professionally and eventually reaching audiences.
            </p>

            <p>
              Each product is valuable on its own. Together, they create a
              stronger future for independent entertainment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}