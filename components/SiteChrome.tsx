import { getNavigation, getSettings } from "@/lib/cms";
import { MarketingHeader } from "./MarketingHeader";
import { publicEntertainmentLinks, type HeaderLink } from "@/lib/navigation";
import { MarketingFooter } from "./MarketingFooter";

export async function SiteHeader() {
  const rows = await getNavigation("header");

  const cmsByLabel = new Map(
    rows
      .filter(
        (row) =>
          typeof row?.label === "string" &&
          Boolean(row.label.trim()) &&
          typeof row?.url === "string" &&
          Boolean(row.url.trim()),
      )
      .map((row) => [row.label.trim().toLowerCase(), row] as const),
  );

  const links: HeaderLink[] = publicEntertainmentLinks.map((item) => {
    const cmsItem = cmsByLabel.get(item.label.toLowerCase());

    return cmsItem
      ? {
          label: item.label,
          href: cmsItem.url.trim() || item.href,
          newTab: Boolean(cmsItem.open_new_tab),
        }
      : item;
  });

  return <MarketingHeader links={links} />;
}

export async function SiteFooter() {
  const [navigation, settings] = await Promise.all([getNavigation(), getSettings()]);
  return <MarketingFooter items={navigation} settings={settings} />;
}
