import type { User } from '../types';
import './Navbar.css';

interface NavbarProps {
  sections: { id: string; label: string }[];
  activeSection: string;
  onNavigate: (id: string) => void;
  user: User | null;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

export default function Navbar({ sections, activeSection, onNavigate, user, onLoginClick, onLogoutClick }: NavbarProps) {
  return (
    <header className="navbar">
      <a
        href="#home"
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          onNavigate('home');
        }}
      >
        <span className="logo-mark">☕</span> Coffee Tracker
      </a>

      <nav className="nav-right">
        <ul className="nav-links">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={activeSection === s.id ? 'active' : ''}
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

        {user ? (
          <div className="user-chip">
            <span>Hi, {user.name}</span>
            <button className="btn ghost" onClick={onLogoutClick}>Logout</button>
          </div>
        ) : (
          <button className="btn primary" onClick={onLoginClick}>Login</button>
        )}
      </nav>
    </header>
  );
}
