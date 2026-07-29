import type { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/cms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://plekxa.com";
  const routes = [
    "/",
    "/company",
    "/products",
    "/products/plekxa",
    "/products/studio",
    "/products/experience",
    "/newsroom",
    "/careers",
    "/contact",
    "/terms",
    "/privacy",
    "/cookies",
    "/accessibility",
    "/community-guidelines",
  ];

  const articles = await getPublishedArticles(500);

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/newsroom/${article.slug}`,
    lastModified: new Date(article.updated_at || article.created_at),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
