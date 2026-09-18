import { getNavigation, getSettings } from "@/lib/cms";
import { MarketingHeader } from "./MarketingHeader";
import { publicEntertainmentLinks, type HeaderLink } from "@/lib/navigation";
import { MarketingFooter } from "./MarketingFooter";

export async function SiteHeader() {
  const rows = await getNavigation("header");
  const valid = rows.filter((row) => typeof row?.label === "string" && row.label.trim() && typeof row?.url === "string" && row.url.trim());
  const links: HeaderLink[] = valid.length
    ? valid.map((row) => ({ label: row.label.trim(), href: row.url.trim(), newTab: Boolean(row.open_new_tab) }))
    : publicEntertainmentLinks;
  return <MarketingHeader links={links} />;
}

export async function SiteFooter() {
  const [navigation, settings] = await Promise.all([getNavigation(), getSettings()]);
  return <MarketingFooter items={navigation} settings={settings} />;
}
