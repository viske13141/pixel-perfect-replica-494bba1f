import type { ReactNode } from "react";
import "./aikyam.css";

export function SiteNav({ children }: { children?: ReactNode }) {
  return (
    <header className="aikyam-nav">
      <a className="aikyam-brand" href="/" aria-label="AIKYAM home">
        AIKYAM<span>From separation to wholeness</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="/about">About AIKYAM</a>
        <a href="/aikya-mandala">Mandala</a>
        <a href="/participate">Participate</a>
        {children}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="aikyam-footer">
      <a href="/">AIKYAM</a>
      <p>From separation to wholeness.</p>
      <a href="/about">About AIKYAM</a>
    </footer>
  );
}

export function JourneyLinks() {
  return (
    <div className="aikyam-actions">
      <a href="/aikya-mandala">
        Explore AIKYA Mandala <span aria-hidden>↗</span>
      </a>
      <a href="/participate">
        Discover Ways to Participate <span aria-hidden>↗</span>
      </a>
    </div>
  );
}

export function IntroPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="aikyam-page">
      <SiteNav />
      <main className="aikyam-intro">
        <p className="aikyam-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children}
        <a className="aikyam-back" href="/about">
          ← Back to About AIKYAM
        </a>
      </main>
      <SiteFooter />
    </div>
  );
}
