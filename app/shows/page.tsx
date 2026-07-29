import {ContentCatalogue} from '@/components/ContentCatalogue';
import {getPublishedContentItems} from '@/lib/cms';
export const revalidate=60;
export default async function ShowsPage(){const all=await getPublishedContentItems(200);const items=all.filter(x=>/show|series|programme|program|episode|television|tv/i.test(x.content_type||''));return <ContentCatalogue title="Shows" intro="Series, programmes and live entertainment from Plekxa." items={items} emptyLabel="Shows are coming"/>}
