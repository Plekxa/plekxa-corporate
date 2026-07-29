import type { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/cms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://plekxa.com";
  const routes = [
    "/",
    "/music",
    "/shows",
    "/movies",
    "/experiences",
    "/company",
    "/products",
    "/products/plekxa",
    "/products/studio",
    "/products/experience",
    "/newsroom",
    "/careers",
    "/contact",
    "/events",
    "/terms",
    "/privacy",
    "/cookies",
    "/accessibility",
    "/community-guidelines",
  ] as const;

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));

  const articles = await getPublishedArticles(500);
  const articleRoutes: MetadataRoute.Sitemap = articles
    .filter((article) => typeof article.slug === "string" && Boolean(article.slug.trim()))
    .map((article) => {
      const dateValue = article.updated_at || article.published_at || article.created_at;
      const parsedDate = dateValue ? new Date(dateValue) : new Date();
      return {
        url: `${baseUrl}/newsroom/${encodeURIComponent(article.slug.trim())}`,
        lastModified: Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate,
        changeFrequency: "monthly",
        priority: 0.6,
      };
    });

  return [...staticRoutes, ...articleRoutes];
}
