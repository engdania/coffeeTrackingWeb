import type { CoffeeTypeInfo } from '../types';
import './MenuPage.css';

interface MenuPageProps {
  coffeeTypes: CoffeeTypeInfo[];
}

export default function MenuPage({ coffeeTypes }: MenuPageProps) {
  return (
    <section className="menu-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Know your cup</span>
          <h2>Menu — Coffee Types</h2>
        </div>
      </div>
      <div className="grid">
        {coffeeTypes.map((type) => (
          <div className="card menu-card" key={type.id}>
            <h3>{type.name}</h3>
            <span className="brew-time">Brew time: {type.brewTime}</span>
            <p>{type.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
