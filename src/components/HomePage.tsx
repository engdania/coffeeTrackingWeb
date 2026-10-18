import { useEffect, useState } from "react";
import type { Quote, NewsItem } from "../types";
import "./HomePage.css";

interface HomePageProps {
  quotes: Quote[];
  newsItems: NewsItem[];
  onNavigate: (id: string) => void;
}

export default function HomePage({
  quotes,
  newsItems,
  onNavigate,
}: HomePageProps) {
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Rotate the featured quote every 6 seconds.
  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  const activeQuote = quotes[quoteIndex];

  return (
    <div className="home-page">
      <section className="hero">
        <span className="eyebrow">Iraq's first coffee tracker</span>
        <h1 className="hero-title">
          Track your <span>coffee</span>, one cup at a time.
        </h1>
        <p className="hero-sub">
          Discover coffee types, order seeds, and find out which shops make the
          best drinks in Erbil — all rated by people who actually tried them.
        </p>
        <div className="hero-actions">
          <button className="btn primary" onClick={() => onNavigate("shops")}>
            See coffee shops
          </button>
          <button className="btn" onClick={() => onNavigate("menu")}>
            Explore the menu
          </button>
        </div>

        {activeQuote && (
          <div className="card quote-spotlight">
            <p className="quote-text">&ldquo;{activeQuote.text}&rdquo;</p>
            <div className="quote-author">— {activeQuote.author}</div>
          </div>
        )}
      </section>

      <section className="news">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Fresh from the roastery</span>
            <h2>New in coffee</h2>
          </div>
        </div>
        <div className="grid">
          {newsItems.map((item) => (
            <div className="card news-card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
