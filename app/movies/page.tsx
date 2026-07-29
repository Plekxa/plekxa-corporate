import {ContentCatalogue} from '@/components/ContentCatalogue';
import {getPublishedContentItems} from '@/lib/cms';
export const revalidate=60;
export default async function MoviesPage(){const all=await getPublishedContentItems(200);const items=all.filter(x=>/movie|film|cinema|feature|short film/i.test(x.content_type||''));return <ContentCatalogue title="Movies" intro="Films and visual stories from Plekxa." items={items} emptyLabel="Movies are coming"/>}
