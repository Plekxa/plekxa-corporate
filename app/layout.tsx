import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Plekxa — Entertainment for life",
    template: "%s — Plekxa",
  },
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "512x512", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Plekxa — Entertainment for life",
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Plekxa — Entertainment for life",
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
