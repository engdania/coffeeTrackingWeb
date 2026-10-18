import type { CoffeeTypeInfo, SeedProduct, CoffeeShop, Quote, NewsItem, Recipe } from '../types';

export const coffeeTypes: CoffeeTypeInfo[] = [
  { id: 'type-espresso', name: 'Espresso', description: 'A concentrated shot pulled through finely-ground, tightly-packed coffee. The base of nearly every milk drink.', brewTime: '25–30 sec' },
  { id: 'type-iced-latte', name: 'Iced Latte', description: 'Espresso poured over cold milk and ice — smooth, sweet, and the most ordered drink on hot afternoons.', brewTime: '2 min' },
  { id: 'type-cappuccino', name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and thick milk foam for a light, airy cup.', brewTime: '3 min' },
  { id: 'type-americano', name: 'Americano', description: 'Espresso diluted with hot water for a lighter body that still keeps the espresso flavor.', brewTime: '2 min' },
  { id: 'type-macchiato', name: 'Macchiato', description: 'Espresso "stained" with a small spoon of milk foam — strong, short, and intense.', brewTime: '1 min' },
  { id: 'type-mocha', name: 'Mocha', description: 'Espresso with chocolate and steamed milk, topped with whipped cream for a dessert-like cup.', brewTime: '3 min' },
  { id: 'type-turkish', name: 'Turkish Coffee', description: 'Extra-fine grounds simmered directly in a small pot, served unfiltered with the grounds settled at the bottom — a regional favorite.', brewTime: '5–8 min' },
  { id: 'type-coldbrew', name: 'Cold Brew', description: 'Coarse grounds steeped in cold water for hours, producing a smooth, low-acid coffee served over ice.', brewTime: '12–18 hrs' },
];

export const seedProducts: SeedProduct[] = [
  {
    id: 'seed-1',
    name: 'Yemeni Mocha Beans',
    origin: 'Haraz Mountains, Yemen',
    roastLevel: 'Medium',
    pricePerKg: 28,
    quality: 92,
    description: 'A rare, low-yield varietal with wine-like acidity and notes of dried fruit and spice.',
  },
  {
    id: 'seed-2',
    name: 'Yirgacheffe Reserve',
    origin: 'Sidamo, Ethiopia',
    roastLevel: 'Light',
    pricePerKg: 24,
    quality: 90,
    description: 'Floral and tea-like with a bright, juicy blueberry finish. Great for pour over.',
  },
  {
    id: 'seed-3',
    name: 'Huila Supremo',
    origin: 'Huila, Colombia',
    roastLevel: 'Medium',
    pricePerKg: 20,
    quality: 87,
    description: 'Balanced and sweet with red apple and caramel notes — a reliable daily-drinker.',
  },
  {
    id: 'seed-4',
    name: 'Cerrado Dark Roast',
    origin: 'Cerrado, Brazil',
    roastLevel: 'Dark',
    pricePerKg: 18,
    quality: 82,
    description: 'Low-acid and nutty with dark chocolate depth — built for espresso and Turkish coffee alike.',
  },
  {
    id: 'seed-5',
    name: 'Nyeri AA',
    origin: 'Nyeri, Kenya',
    roastLevel: 'Medium',
    pricePerKg: 26,
    quality: 89,
    description: 'Bold and juicy with blackcurrant and grapefruit acidity — a favorite among home roasters.',
  },
];

export const initialRecipes: Recipe[] = [
  {
    id: 'recipe-1',
    title: 'Slow Sunday Pour Over',
    author: 'Mira K.',
    method: 'Pour Over',
    ratio: '1:16',
    grindSize: 'Medium-fine',
    waterTemp: '94°C',
    steps: [
      'Rinse filter and add 20g of coffee, ground medium-fine.',
      'Bloom with 40g water for 45 seconds, swirling gently.',
      'Pour to 150g in slow circles, let drawdown begin.',
      'Pour remaining water to 320g total in two pulses.',
    ],
    description: 'A gentle, floral cup — great with a light-roast Ethiopian bean.',
    likedBy: ['Diego', 'Anna', 'Priya', 'Sam'],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 6,
  },
  {
    id: 'recipe-2',
    title: 'Everyday Double Shot',
    author: 'Anna B.',
    method: 'Espresso',
    ratio: '1:2',
    grindSize: 'Fine',
    waterTemp: '93°C',
    steps: [
      'Dose 18g into the portafilter, distribute evenly.',
      'Tamp firmly and level.',
      'Pull to 36g output in 27–30 seconds.',
    ],
    description: 'Reliable and nutty — built for milk drinks but balanced enough to sip on its own.',
    likedBy: ['Mira', 'Diego', 'Priya', 'Sam', 'Leo'],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 9,
  },
  {
    id: 'recipe-3',
    title: 'Overnight Concentrate',
    author: 'Sam T.',
    method: 'Cold Brew',
    ratio: '1:8',
    grindSize: 'Coarse',
    waterTemp: 'Room temp',
    steps: [
      'Combine 100g coarse-ground coffee with 800g room-temp water.',
      'Steep covered at room temperature for 14 hours.',
      'Strain through a cloth filter or fine mesh.',
    ],
    description: 'A cocoa-heavy concentrate that stays smooth even after a couple of weeks in the fridge.',
    likedBy: ['Mira', 'Priya'],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
];

export const coffeeShops: CoffeeShop[] = [
  {
    id: 'shop-espresso-lab',
    name: 'Espresso Lab',
    city: 'Erbil',
    location: 'Italian Village, Erbil',
    items: [{ id: 'i1', name: 'Ice Spanish Latte', likes: 34 }],
  },
  {
    id: 'shop-urban',
    name: 'Urban',
    city: 'Erbil',
    location: 'Empire World, Erbil',
    items: [{ id: 'i2', name: 'Ice Pumpkin Spice Latte', likes: 21 }],
  },
  {
    id: 'shop-mars',
    name: 'Mars',
    city: 'Erbil',
    location: 'Gulan Street, Erbil',
    items: [
      { id: 'i3', name: 'Ice Spanish Latte', likes: 28 },
      { id: 'i4', name: 'Matcha', likes: 19 },
    ],
  },
  {
    id: 'shop-origin',
    name: 'Origin',
    city: 'Erbil',
    location: '100m Road, Erbil',
    items: [{ id: 'i5', name: 'Ice Spanish Latte', likes: 25 }],
  },
  {
    id: 'shop-barns',
    name: 'Barn\'s',
    city: 'Erbil',
    location: 'Dream City, Erbil',
    items: [{ id: 'i6', name: 'Ice White Mocha', likes: 17 }],
  },
];

export const quotes: Quote[] = [
  { id: 'q1', text: 'A good pour over asks for patience; it rewards you with clarity you can taste.', author: 'Community favorite' },
  { id: 'q2', text: 'The best cup is rarely the fanciest one — it is the one brewed with attention.', author: 'Local barista wisdom' },
  { id: 'q3', text: 'Coffee is a small ritual that turns an ordinary morning into a deliberate one.', author: 'Coffee Tracker member' },
  { id: 'q4', text: 'Every bean carries the story of the soil, the rain, and the hands that picked it.', author: 'Roastery notes' },
  { id: 'q5', text: 'Some mornings need silence, a window, and something dark and warm in your hands.', author: 'Coffee Tracker member' },
  { id: 'q6', text: 'Taste it black first. Everything you add after that is a choice, not a rescue.', author: 'Local barista wisdom' },
];

export const newsItems: NewsItem[] = [
  {
    id: 'n1',
    title: 'Why Yemeni beans taste different',
    text: 'Grown on ancient terraces without irrigation, Yemeni coffee trees are stressed by drought — which concentrates sugars and gives the beans their signature intensity.',
  },
  {
    id: 'n2',
    title: 'Iced Spanish Latte is having a moment',
    text: 'The mix of espresso, condensed milk, and regular milk over ice has become one of the most ordered drinks across coffee shops this year.',
  },
  {
    id: 'n3',
    title: 'Storing your beans properly',
    text: 'Keep beans in an airtight container away from light and heat — not the freezer — and use them within a few weeks of the roast date for the best flavor.',
  },
];
