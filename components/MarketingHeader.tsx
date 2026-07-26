"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Company", href: "/company" },
  { label: "Products", href: "/products" },
  { label: "Experiences", href: "/products/experience" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Careers", href: "/careers" },
];

export function MarketingHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-logo" aria-label="Plekxa home">
          <Image src="/brand/plekxa-logo.png" alt="Plekxa" width={397} height={126} priority />
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={pathname.startsWith(item.href) ? "is-active" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="site-header__contact">Contact</Link>

        <button type="button" className="site-menu-button" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
          <span /><span />
        </button>
      </div>

      <div className={`site-mobile-menu ${open ? "is-open" : ""}`}>
        <nav className="container" aria-label="Mobile navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
