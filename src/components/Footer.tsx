import './Footer.css';

interface FooterProps {
  sections: { id: string; label: string }[];
  onNavigate: (id: string) => void;
}

export default function Footer({ sections, onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="logo-mark">☕</span> Coffee Tracker
          <p>Iraq's first coffee tracking site — brands, recipes, and rankings, all in one place.</p>
        </div>

        <div className="footer-links">
          <span className="footer-heading">Explore</span>
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(s.id);
                  }}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-note">
          <span className="footer-heading">A small note</span>
          <p>"Taste it black first. Everything you add after that is a choice, not a rescue."</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Coffee Tracker. Built with ♥ over many cups of coffee.</span>
      </div>
    </footer>
  );
}
