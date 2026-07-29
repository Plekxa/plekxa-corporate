import {getNavigation,getSettings} from '@/lib/cms';
import {MarketingHeader} from './MarketingHeader';
import {MarketingFooter} from './MarketingFooter';
export async function SiteHeader(){const rows=await getNavigation('header');return <MarketingHeader links={rows.length?rows.map(x=>({label:x.label,href:x.url,newTab:x.open_new_tab})):undefined}/>}
export async function SiteFooter(){const [nav,settings]=await Promise.all([getNavigation(),getSettings()]);return <MarketingFooter items={nav} settings={settings}/>}
