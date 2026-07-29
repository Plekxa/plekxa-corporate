import Link from "next/link";
import type { ContentItem } from "@/lib/cms";

export function ContentCatalogue({title,intro,items,emptyLabel,imageShape="portrait"}:{title:string;intro:string;items:ContentItem[];emptyLabel:string;imageShape?:"portrait"|"square"}){
  return <main className="catalogue-page">
    <header className="catalogue-hero container">
      <h1>{title}</h1>
      <p>{intro}</p>
    </header>
    <section className={`container catalogue-grid${imageShape === "square" ? " catalogue-grid--square" : ""}`}>
      {items.length ? items.map(item => <Link className="catalogue-card" href={item.media_url || item.preview_url || '#'} key={item.id}>
        <div className="catalogue-card__image" style={item.artwork_url?{backgroundImage:`url(${item.artwork_url})`}:undefined}/>
        <h2>{item.title}</h2>
        <p>{item.description || item.content_type || title}</p>
      </Link>) : <div className="catalogue-empty"><h2>{emptyLabel}</h2><p>Published content from Enterprise OS will appear here automatically.</p></div>}
    </section>
  </main>;
}
