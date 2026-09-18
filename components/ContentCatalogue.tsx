import Link from "next/link";
import type { ContentItem } from "@/lib/cms";

export function ContentCatalogue({title,intro,items,emptyLabel,imageShape="portrait"}:{title:string;intro:string;items:ContentItem[];emptyLabel:string;imageShape?:"portrait"|"square"}){
  return <main className="catalogue-page">
    <header className="catalogue-hero container">
      <h1>{title}</h1>
      <p>{intro}</p>
    </header>
    <section className={`container catalogue-grid${imageShape === "square" ? " catalogue-grid--square" : ""}`}>
      {items.length ? items.map(item => { const href=item.media_url || item.preview_url; const inner=<><div className="catalogue-card__image" style={item.artwork_url?{backgroundImage:`url(${item.artwork_url})`}:undefined}/><h2>{item.title}</h2><p>{item.description || item.content_type || title}</p></>; return href?<Link className="catalogue-card" href={href} key={item.id}>{inner}</Link>:<article className="catalogue-card" key={item.id}>{inner}</article> }) : <div className="catalogue-empty"><h2>{emptyLabel}</h2><p>New Plekxa releases will appear here as they are published.</p></div>}

    </section>
  </main>;
}
