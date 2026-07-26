import Link from "next/link";

type ProductPreviewProps = {
  eyebrow: string;
  title: string;
  copy: string;
  href: string;
  status: string;
  variant: "rose" | "dark" | "signal" | "paper" | "night";
  index?: string;
};

export function ProductPreview({
  eyebrow,
  title,
  copy,
  href,
  status,
  variant,
  index,
}: ProductPreviewProps) {
  return (
    <Link href={href} className={`product-preview product-preview-${variant}`}>
      <div className="product-preview-top">
        <span>{eyebrow}</span>
        {index ? <b>{index}</b> : null}
      </div>

      <div className="product-preview-copy">
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>

      <div className="product-preview-bottom">
        <strong>{status}</strong>
        <b aria-hidden="true">↗</b>
      </div>
    </Link>
  );
}
