import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/company", "/products", "/products/plekxa", "/products/studio",
    "/products/experience", "/newsroom", "/newsroom/why-plekxa",
    "/newsroom/introducing-plekxa-studio", "/newsroom/better-infrastructure",
    "/contact", "/careers", "/privacy", "/terms", "/cookies",
    "/accessibility", "/community-guidelines",
  ];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
