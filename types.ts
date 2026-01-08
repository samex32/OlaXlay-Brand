
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  videoUrl?: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface User {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export enum CollectionCategory {
  ALL = 'All',
  TRADITION = 'Tradition & Cultural Dresses',
  FUSION = 'Modern Indigenous Fusion',
  CORPORATE = 'Corporate & Professional gowns',
  CASUAL = 'Casual & Everyday Wear',
  EVENT = 'Event-Based Fashion'
}
