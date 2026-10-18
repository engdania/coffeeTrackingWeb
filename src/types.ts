export type RoastLevel = 'Light' | 'Medium' | 'Medium-Dark' | 'Dark';

export interface CoffeeTypeInfo {
  id: string;
  name: string;
  description: string;
  brewTime: string;
}

export interface SeedProduct {
  id: string;
  name: string;
  origin: string;
  roastLevel: RoastLevel;
  pricePerKg: number;
  quality: number; // 0-100, used for the cup-rating meter
  description: string;
}

export interface ShopItem {
  id: string;
  name: string;
  likes: number;
}

export interface CoffeeShop {
  id: string;
  name: string;
  city: string;
  location: string; // street/area, e.g. "Italian Village, Erbil"
  logoUrl?: string; // put a real logo image path here later, e.g. "/logos/espresso-lab.png"
  items: ShopItem[];
}

export interface Quote {
  id: string;
  text: string;
  author: string;
}

export interface NewsItem {
  id: string;
  title: string;
  text: string;
}

export interface Recipe {
  id: string;
  title: string;
  author: string;
  method: string;
  ratio: string;
  grindSize: string;
  waterTemp: string;
  steps: string[];
  description: string;
  likedBy: string[];
  createdAt: number;
}

export interface User {
  name: string;
  email: string;
}

export const CURRENT_USER = 'You';
