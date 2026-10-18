import { useEffect, useState } from 'react';
import type { CoffeeShop } from '../types';
import './CoffeeShopsPage.css';

interface CoffeeShopsPageProps {
  initialShops: CoffeeShop[];
}

const STORAGE_KEY = 'coffee-tracker-shops';

function loadShops(fallback: CoffeeShop[]): CoffeeShop[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CoffeeShop[]) : fallback;
  } catch {
    return fallback;
  }
}

export default function CoffeeShopsPage({ initialShops }: CoffeeShopsPageProps) {
  const [shops, setShops] = useState<CoffeeShop[]>(() => loadShops(initialShops));
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());
  const [brokenLogos, setBrokenLogos] = useState<Set<string>>(new Set());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(shops));
  }, [shops]);

  function toggleLike(shopId: string, itemId: string) {
    const key = `${shopId}:${itemId}`;
    const alreadyLiked = likedItems.has(key);

    setShops((prev) =>
      prev.map((shop) =>
        shop.id !== shopId
          ? shop
          : {
              ...shop,
              items: shop.items.map((item) =>
                item.id !== itemId
                  ? item
                  : { ...item, likes: item.likes + (alreadyLiked ? -1 : 1) }
              ),
            }
      )
    );

    setLikedItems((prev) => {
      const next = new Set(prev);
      if (alreadyLiked) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function markLogoBroken(shopId: string) {
    setBrokenLogos((prev) => new Set(prev).add(shopId));
  }

  return (
    <section className="shops-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Where to go</span>
          <h2>Coffee Shops</h2>
        </div>
      </div>

      <div className="grid">
        {shops.map((shop) => {
          const logoFailed = brokenLogos.has(shop.id) || !shop.logoUrl;
          return (
            <div className="card shop-card" key={shop.id}>
              <div className="shop-header">
                {logoFailed ? (
                  <div className="logo-fallback">{shop.name.charAt(0)}</div>
                ) : (
                  <img
                    className="shop-logo"
                    src={shop.logoUrl}
                    alt={`${shop.name} logo`}
                    onError={() => markLogoBroken(shop.id)}
                  />
                )}
                <div>
                  <h3>{shop.name}</h3>
                  <div className="shop-city">{shop.location}</div>
                  <a
                    className="map-link"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.name + ' ' + shop.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on map ↗
                  </a>
                </div>
              </div>

              <ul className="shop-items">
                {shop.items.map((item) => {
                  const key = `${shop.id}:${item.id}`;
                  const liked = likedItems.has(key);
                  return (
                    <li key={item.id}>
                      <span className="item-name">{item.name}</span>
                      <button
                        className={`like-btn ${liked ? 'liked' : ''}`}
                        onClick={() => toggleLike(shop.id, item.id)}
                      >
                        {liked ? '♥' : '♡'} {item.likes}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
