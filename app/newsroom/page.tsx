import Link from "next/link";
import { CmsImage } from "@/components/CmsImage";
import { articleDate, formatDate, getCmsPage, getPublishedArticles } from "@/lib/cms";
export const metadata = { title: "Newsroom" };
export const revalidate = 60;
export default async function Page() {
  const [stories,page]=await Promise.all([getPublishedArticles(),getCmsPage("newsroom")]);
  const featured=stories.find(x=>x.featured)||stories[0];
  const latest=featured?stories.filter(x=>x.id!==featured.id):stories;
  const eyebrow=page?.eyebrow||"Newsroom";
  const headline=page?.headline||"Ideas, progress and stories from Plekxa.";
  const summary=page?.summary||"Company announcements, product updates and perspectives on entertainment and media.";
  return <>
    <section className="page-hero newsroom-hero"><div className="container page-hero__grid"><div><span className="eyebrow">{eyebrow}</span><h1>{headline}</h1></div><p>{summary}</p></div></section>
    {featured?<section className="section newsroom-feature-wrap"><div className="container"><Link href={`/newsroom/${featured.slug}`} className="newsroom-feature-card"><CmsImage src={featured.cover_image_url} alt={featured.title} className="newsroom-image" fallbackClass="newsroom-image--studio"/><div className="newsroom-feature-copy"><div className="newsroom-meta"><span>{featured.category||"News"}</span><time>{formatDate(articleDate(featured))}</time></div><h2>{featured.title}</h2><p>{featured.excerpt||"Read the latest from Plekxa."}</p><strong>Read story <b>↗</b></strong></div></Link></div></section>:null}
    <section className="section newsroom-list-section"><div className="container"><div className="section-heading section-heading--row"><div><span className="eyebrow">Latest</span><h2>More from Plekxa.</h2></div></div>{latest.length?<div className="newsroom-card-grid">{latest.map((story,index)=><Link href={`/newsroom/${story.slug}`} className="newsroom-card" key={story.id}><CmsImage src={story.cover_image_url} alt={story.title} className="newsroom-image" fallbackClass={`newsroom-image--${index%2?"infrastructure":"company"}`}/><div className="newsroom-card-copy"><div className="newsroom-meta"><span>{story.category||"News"}</span><time>{formatDate(articleDate(story))}</time></div><h3>{story.title}</h3><p>{story.excerpt||"Read the latest from Plekxa."}</p><strong>Read story <b>↗</b></strong></div></Link>)}</div>:!featured?<div className="empty-state"><h2>No published stories yet.</h2><p>Published Newsroom articles will appear here automatically.</p></div>:<p className="page-copy">More stories will appear here as they are published.</p>}</div></section>
    <section className="editorial-cta"><div className="container editorial-cta__inner"><div><span className="eyebrow">Press and media</span><h2>Looking for more information?</h2></div><a href="mailto:info@plekxa.com" className="button button-light">Contact our press team</a></div></section>
  </>;
}
