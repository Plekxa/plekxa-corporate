import Image from "next/image";
import Link from "next/link";
import type { CmsNavItem } from "@/lib/cms";

type FooterGroup = {
  title: string;
  links: [string, string][];
};

const fallback: FooterGroup[] = [
  {
    title: "Company",
    links: [
      ["About", "/company"],
      ["Newsroom", "/newsroom"],
      ["Careers", "/careers"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Entertainment",
    links: [
      ["Music", "/music"],
      ["Shows", "/shows"],
      ["Movies", "/movies"],
      ["Experiences", "/experiences"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
      ["Cookies", "/cookies"],
      ["Accessibility", "/accessibility"],
      ["Community Guidelines", "/community-guidelines"],
    ],
  },
];

export function MarketingFooter({
  items = [],
  settings = {},
}: {
  items?: CmsNavItem[];
  settings?: Record<string, string>;
}) {
  const grouped: Record<string, [string, string][]> = {};

  for (const item of items) {
    if (
      typeof item?.location !== "string" ||
      !item.location.startsWith("footer-") ||
      typeof item?.label !== "string" ||
      !item.label.trim() ||
      typeof item?.url !== "string" ||
      !item.url.trim()
    ) {
      continue;
    }

    const key = item.location.slice("footer-".length).trim() || "links";
    (grouped[key] ??= []).push([item.label.trim(), item.url.trim()]);
  }

  const groups: FooterGroup[] = Object.keys(grouped).length
    ? Object.entries(grouped).map(([key, links]) => ({
        title: key.replace(/[-_]+/g, " ").replace(/\b\w/g, (character) => character.toUpperCase()),
        links,
      }))
    : fallback;

  const email = "info@plekxa.com";

  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <Link href="/" className="site-logo site-logo--footer" aria-label="Plekxa home">
            <Image src="/brand/plekxa-logo.png" alt="Plekxa" width={397} height={126} />
          </Link>
          <p>{settings.footer_tagline?.trim() || "Entertainment and media for a fuller life."}</p>
        </div>

        <div className="site-footer__links">
          {groups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map(([label, href]) => (
                <Link href={href} key={`${href}-${label}`}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Plekxa Group Limited. All rights reserved.</span>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </footer>
  );
}
