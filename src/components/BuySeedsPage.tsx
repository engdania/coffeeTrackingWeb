import { useState } from 'react';
import type { SeedProduct } from '../types';
import CupRating from './CupRating';
import CartModal from './CartModal';
import './BuySeedsPage.css';

interface BuySeedsPageProps {
  seedProducts: SeedProduct[];
}

export default function BuySeedsPage({ seedProducts }: BuySeedsPageProps) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [showCart, setShowCart] = useState(false);

  function addToCart(id: string) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  function incrementLine(id: string) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  function decrementLine(id: string) {
    setCart((prev) => {
      const current = prev[id] ?? 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: current - 1 };
    });
  }

  function removeLine(id: string) {
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

  function handleCheckout() {
    setCart({});
    setShowCart(false);
  }

  const totalItems = Object.values(cart).reduce((sum, n) => sum + n, 0);

  const cartLines = Object.entries(cart)
    .map(([id, quantity]) => {
      const product = seedProducts.find((s) => s.id === id);
      return product ? { product, quantity } : null;
    })
    .filter((line): line is { product: SeedProduct; quantity: number } => line !== null);

  return (
    <section className="seeds-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Take it home</span>
          <h2>Buy Coffee Seeds</h2>
        </div>
        <button className="btn" onClick={() => setShowCart(true)}>
          View cart {totalItems > 0 ? `(${totalItems})` : ''}
        </button>
      </div>

      <div className="grid">
        {seedProducts.map((seed) => (
          <div className="card seed-card" key={seed.id}>
            <span className="roast-tag">{seed.roastLevel} roast</span>
            <h3>{seed.name}</h3>
            <div className="origin">{seed.origin}</div>
            <p>{seed.description}</p>
            <div className="seed-footer">
              <CupRating percent={seed.quality} />
              <span className="price">${seed.pricePerKg}/kg</span>
            </div>
            <button className="btn primary add-btn" onClick={() => addToCart(seed.id)}>
              {cart[seed.id] ? `Added (${cart[seed.id]}) — Add another` : 'Add to cart'}
            </button>
          </div>
        ))}
      </div>

      {showCart && (
        <CartModal
          lines={cartLines}
          onClose={() => setShowCart(false)}
          onIncrement={incrementLine}
          onDecrement={decrementLine}
          onRemove={removeLine}
          onCheckout={handleCheckout}
        />
      )}
    </section>
  );
}
