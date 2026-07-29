"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { publicEntertainmentLinks, type HeaderLink } from "@/lib/navigation";

export function MarketingHeader({ links = publicEntertainmentLinks }: { links?: HeaderLink[] }) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const safeLinks = links.filter(
    (item) =>
      typeof item?.label === "string" &&
      Boolean(item.label.trim()) &&
      typeof item?.href === "string" &&
      Boolean(item.href.trim()),
  );

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-logo" aria-label="Plekxa home">
          <Image src="/brand/plekxa-logo-black.png" alt="Plekxa" width={397} height={126} priority />
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {safeLinks.map((item) => {
            const href = item.href.trim();
            const active = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
            return (
              <Link
                key={`${href}-${item.label}`}
                href={href}
                target={item.newTab ? "_blank" : undefined}
                rel={item.newTab ? "noopener noreferrer" : undefined}
                className={active ? "is-active" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="site-menu-button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`site-mobile-menu ${open ? "is-open" : ""}`}>
        <nav className="container" aria-label="Mobile navigation">
          {safeLinks.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href.trim()}
              target={item.newTab ? "_blank" : undefined}
              rel={item.newTab ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
