import Link from "next/link";
import { getPublishedJobs } from "@/lib/cms";
export const metadata = { title: "Careers" };
export const revalidate = 60;
export default async function Page() {
  const jobs=await getPublishedJobs();
  return <>
    <section className="page-hero page-hero-dark"><div className="container narrow"><span className="eyebrow">Careers</span><h1>Build the future of entertainment and media.</h1><p>Join a company creating entertainment, experiences and platforms designed to help people get more out of life.</p></div></section>
    <section className="section"><div className="container split"><div><span className="eyebrow">Our culture</span><h2>Small team. Big ambition.</h2></div><div><p>Plekxa is being built with long-term thinking, thoughtful design and a commitment to quality. We value curious people who care deeply about what they make.</p><p>As we grow, we are looking for collaborative, ambitious people excited to shape the future of entertainment.</p></div></div></section>
    <section className="section"><div className="container feature-list"><article><span>01</span><h2>Purpose</h2><p>Create work that gives people more reasons to feel, connect and enjoy life.</p></article><article><span>02</span><h2>Craft</h2><p>Bring care, imagination and attention to detail to everything we make.</p></article><article><span>03</span><h2>Growth</h2><p>Join early and help shape the culture, products and future of Plekxa.</p></article></div></section>
    <section className="section"><div className="container"><div className="section-heading section-heading--row"><div><span className="eyebrow">Open roles</span><h2>{jobs.length?"Find your place at Plekxa.":"There are currently no public openings."}</h2></div><p>Roles published in the Enterprise OS Careers module appear here automatically.</p></div>{jobs.length?<div className="jobs-grid">{jobs.map(job=><article className="job-card" key={job.id}><div><span>{job.department||"Plekxa"}</span><h3>{job.title}</h3><p>{[job.location,job.employment_type].filter(Boolean).join(" · ")}</p></div>{job.summary&&<p>{job.summary}</p>}{job.application_url?<a href={job.application_url} className="arrow-link" target="_blank" rel="noreferrer">Apply now <b>↗</b></a>:<Link href={`/contact?topic=${encodeURIComponent(`Career: ${job.title}`)}`} className="arrow-link">Enquire <b>↗</b></Link>}</article>)}</div>:<div className="empty-state"><p>New opportunities will appear here after they are marked published in Enterprise OS.</p></div>}</div></section>
  </>;
}
