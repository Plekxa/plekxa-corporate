import Image from "next/image";
import Link from "next/link";

const groups = [
  { title: "Company", links: [["About", "/company"], ["Newsroom", "/newsroom"], ["Careers", "/careers"], ["Contact", "/contact"]] },
  { title: "Products", links: [["Plekxa", "/products/plekxa"], ["Plekxa Studio", "/products/studio"], ["Plekxa Experience", "/products/experience"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"], ["Cookies", "/cookies"], ["Accessibility", "/accessibility"], ["Community Guidelines", "/community-guidelines"]] },
];

export function MarketingFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <Link href="/" className="site-logo site-logo--footer" aria-label="Plekxa home">
            <Image src="/brand/plekxa-logo.png" alt="Plekxa" width={397} height={126} />
          </Link>
          <p>Entertainment, experiences and technology for a more connected world.</p>
        </div>
        <div className="site-footer__links">
          {groups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            </div>
          ))}
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© 2026 Plekxa Group Limited. All rights reserved.</span>
        <a href="mailto:hello@plekxa.com">hello@plekxa.com</a>
      </div>
    </footer>
  );
}
