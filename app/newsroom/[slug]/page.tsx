import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CmsImage } from "@/components/CmsImage";
import { articleDate, formatDate, getArticleBySlug, getPublishedArticles, plainTextBody } from "@/lib/cms";

export const revalidate = 60;

type Props = { params: Promise<{slug:string}> };

export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params;
  const article=await getArticleBySlug(slug);
  if(!article) return {title:"Article not found"};
  return {title:article.seo_title||article.title,description:article.seo_description||article.excerpt||undefined,openGraph:{title:article.seo_title||article.title,description:article.seo_description||article.excerpt||undefined,images:article.cover_image_url?[article.cover_image_url]:undefined}};
}

export default async function ArticlePage({params}:Props){
  const {slug}=await params;
  const article=await getArticleBySlug(slug);
  if(!article) notFound();
  const paragraphs=plainTextBody(article.body);
  const related=(await getPublishedArticles(4)).filter(x=>x.id!==article.id).slice(0,3);
  return <main>
    <article>
      <header className="article-header">
        <div className="container article-header__inner">
          <div className="article-kicker"><span>{article.category||"News"}</span><time>{formatDate(articleDate(article))}</time></div>
          <h1>{article.title}</h1>
          {article.excerpt&&<p>{article.excerpt}</p>}
          {article.author_name&&<div className="article-author">By {article.author_name}</div>}
        </div>
      </header>
      <div className="container article-cover-wrap"><CmsImage src={article.cover_image_url} alt={article.title} className="article-cover" fallbackClass="article-cover--fallback"/></div>
      <div className="container article-body">
        {paragraphs.length?paragraphs.map((paragraph,index)=><p key={index}>{paragraph}</p>):article.excerpt?<p>{article.excerpt}</p>:<p>This story has been published without body content.</p>}
      </div>
    </article>
    {related.length>0&&<section className="section newsroom-list-section"><div className="container"><div className="section-heading section-heading--row"><div><span className="eyebrow">Keep reading</span><h2>More from Plekxa.</h2></div></div><div className="newsroom-card-grid">{related.map((story,index)=><Link href={`/newsroom/${story.slug}`} className="newsroom-card" key={story.id}><CmsImage src={story.cover_image_url} alt={story.title} className="newsroom-image" fallbackClass={`newsroom-image--${index%2?"company":"studio"}`}/><div className="newsroom-card-copy"><div className="newsroom-meta"><span>{story.category||"News"}</span><time>{formatDate(articleDate(story))}</time></div><h3>{story.title}</h3><p>{story.excerpt||"Read the latest from Plekxa."}</p><strong>Read story <b>↗</b></strong></div></Link>)}</div></div></section>}
  </main>
}
