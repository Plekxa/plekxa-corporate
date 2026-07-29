export type HeaderLink = {
  label: string;
  href: string;
  newTab?: boolean;
};

export const publicEntertainmentLinks: HeaderLink[] = [
  { label: "Music", href: "/music" },
  { label: "Shows", href: "/shows" },
  { label: "Movies", href: "/movies" },
  { label: "Experiences", href: "/experiences" },
];
