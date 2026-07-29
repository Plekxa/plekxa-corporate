import {ContentCatalogue} from '@/components/ContentCatalogue';
import {getPublishedContentItems} from '@/lib/cms';
export const revalidate=60;
export default async function MusicPage(){const all=await getPublishedContentItems(200);const items=all.filter(x=>/music|song|single|album|ep|audio|soundtrack/i.test(x.content_type||''));return <ContentCatalogue title="Music" intro="Music and sound-led releases from Plekxa." items={items} emptyLabel="Music is coming"/>}
