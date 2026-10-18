import { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import type { User } from './types';
import { coffeeTypes, seedProducts, coffeeShops, quotes, newsItems, initialRecipes } from './data/mockData';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import RecipesPage from './components/RecipesPage';
import BuySeedsPage from './components/BuySeedsPage';
import CoffeeShopsPage from './components/CoffeeShopsPage';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'menu', label: 'Menu' },
  { id: 'recipes', label: 'Recipes' },
  { id: 'buy-seeds', label: 'Buy Seeds' },
  { id: 'shops', label: 'Coffee Shops' },
];

const USER_STORAGE_KEY = 'coffee-tracker-user';

function loadUser(): User | null {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [user, setUser] = useState<User | null>(loadUser);
  const [showLogin, setShowLogin] = useState(false);

  // Persist login state.
  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_STORAGE_KEY);
    }
  }, [user]);

  // Scroll-spy: highlight the nav link for whichever section is on screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="app">
      <Navbar
        sections={SECTIONS}
        activeSection={activeSection}
        onNavigate={scrollTo}
        user={user}
        onLoginClick={() => setShowLogin(true)}
        onLogoutClick={() => setUser(null)}
      />

      <main>
        <section id="home">
          <HomePage quotes={quotes} newsItems={newsItems} onNavigate={scrollTo} />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="menu">
          <MenuPage coffeeTypes={coffeeTypes} />
        </section>
        <section id="recipes">
          <RecipesPage initialRecipes={initialRecipes} />
        </section>
        <section id="buy-seeds">
          <BuySeedsPage seedProducts={seedProducts} />
        </section>
        <section id="shops">
          <CoffeeShopsPage initialShops={coffeeShops} />
        </section>
      </main>

      <Footer sections={SECTIONS} onNavigate={scrollTo} />

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={(loggedInUser) => {
            setUser(loggedInUser);
            setShowLogin(false);
          }}
        />
      )}
    </div>
  );
}
