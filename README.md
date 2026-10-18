# Coffee Tracker

Iraq's coffee tracking site: one scrolling page with Home, About, Menu (coffee
types), Buy Seeds, and Coffee Shops (with likeable items). Includes a login
modal. Warm brown visual theme.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Structure

```
src/
  types.ts               shared TypeScript types
  main.tsx                React entry point
  global.css              brown design tokens + shared button/card/grid styles
  App.tsx / App.css        page shell, scroll-spy nav state, login state
  data/
    mockData.ts            coffee types, seed products, coffee shops, quotes, news
  components/
    Navbar.tsx / .css       logo (left) + section links & login button (right)
    HomePage.tsx / .css     hero, rotating quote (useState + useEffect timer), news cards
    AboutPage.tsx / .css    "about the website" text
    MenuPage.tsx / .css     coffee type reference cards
    BuySeedsPage.tsx / .css seed products with quality meter + add-to-cart (useState)
    CoffeeShopsPage.tsx / .css  shop cards, logo image w/ fallback, likeable items (persisted)
    LoginModal.tsx / .css   controlled login form (useState)
    CupRating.tsx / .css    signature "filling cup" meter used instead of stars
```

## Notes

- **One page, anchor navigation**: clicking a nav link smooth-scrolls to that
  `<section>`. An `IntersectionObserver` in `App.tsx` watches which section is
  in view and highlights the matching nav link (`useState` + `useEffect`).
- **Login** is simulated — the form just stores a name/email in state and
  `localStorage`, no real backend/auth yet.
- **Coffee shop logos**: each shop in `data/mockData.ts` has an optional
  `logoUrl`. Drop your own image path in there (e.g. `/logos/espresso-lab.png`,
  placed in a `public/logos/` folder) and it'll show automatically. If the
  image fails to load (or none is set), a colored initial-letter badge is
  shown instead - no code changes needed.
- Shop item likes and cart adds use `localStorage` so they survive refreshes
  but are local to your browser. Swap for real API calls when you add a backend.
