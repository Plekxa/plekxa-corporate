"use client";

import Link from "next/link";
import { useRef } from "react";

export type HomeRailItem = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  href: string;
  image?: string | null;
  cta?: string;
};

export function HomeRail({ items, label }: { items: HomeRailItem[]; label: string }) {
  const railRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * Math.min(rail.clientWidth * 0.86, 720), behavior: "smooth" });
  };

  return (
    <div className="disney-rail-wrap">
      <div className="disney-rail-controls" aria-label={`${label} carousel controls`}>
        <button type="button" onClick={() => move(-1)} aria-label={`Previous ${label}`}>
          <span aria-hidden="true">‹</span>
        </button>
        <button type="button" onClick={() => move(1)} aria-label={`Next ${label}`}>
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div className="disney-rail" ref={railRef}>
        {items.map((item) => (
          <Link href={item.href} className="disney-card" key={item.id}>
            <div
              className="disney-card__image"
              style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}
              role="img"
              aria-label={item.title}
            />
            <div className="disney-card__body">
              {item.eyebrow ? <p>{item.eyebrow}</p> : null}
              <h3>{item.title}</h3>
              {item.description ? <span>{item.description}</span> : null}
              <strong>{item.cta || "Learn more"}</strong>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
