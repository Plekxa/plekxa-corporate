import Link from "next/link";

type NewsCardProps = {
  category: string;
  title: string;
  date: string;
  href: string;
  index: number;
};

export function NewsCard({
  category,
  title,
  date,
  href,
  index,
}: NewsCardProps) {
  return (
    <Link href={href} className="news-card">
      <div className={`news-art news-art-${index}`} aria-hidden="true">
        <span />
        <i />
        <b>0{index}</b>
      </div>

      <div className="news-card-meta">
        <span>{category}</span>
        <time>{date}</time>
      </div>

      <h3>{title}</h3>
      <span className="arrow-link">
        Read story <b aria-hidden="true">↗</b>
      </span>
    </Link>
  );
}
