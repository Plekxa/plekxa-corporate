import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

const groups = [
  {
    title: "Products",
    links: [
      ["Plekxa Studio", "/products/studio"],
      ["Plekxa Experience", "/products/experience"],
      ["All Products", "/products"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Company", "/company"],
      ["Newsroom", "/newsroom"],
      ["Careers", "/careers"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Creators",
    links: [
      ["Creator Studio", "https://studio.plekxa.com"],
      ["Creator Support", "/contact"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Terms of Use", "/terms"],
      ["Privacy Policy", "/privacy"],
      ["Cookie Policy", "/cookies"],
    ],
  },
];

const socialLinks = [
  ["LinkedIn", "https://linkedin.com/company/plekxa"],
  ["Instagram", "https://instagram.com/plekxa"],
  ["YouTube", "https://youtube.com/@plekxa"],
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-lead">
          <BrandMark />

          <p>
            Building the future of independent entertainment through connected
            products for creators and audiences.
          </p>
        </div>

        <div className="footer-grid">
          {groups.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>

              {group.links.map(([label, href]) =>
                href.startsWith("http") ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                ) : (
                  <Link key={label} href={href}>
                    {label}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Plekxa Group Ltd. All rights reserved.
          </p>

          <div>
            {socialLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}