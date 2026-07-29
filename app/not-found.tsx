import Link from "next/link";

export default function NotFound() {
  return (
    <main className="legal-page">
      <div className="container legal-page__inner">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or may have moved.</p>
        <Link href="/" className="disney-button disney-button--dark">Return home</Link>
      </div>
    </main>
  );
}
