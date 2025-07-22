// Types for the sports supplement e-commerce

export interface Product {
  id: string;
  name: string;
  category: 'proteina' | 'creatina' | 'pre-entreno';
  price: number;
  description: string;
  image: string;
  brand: string;
  weight?: string;
  flavors?: string[];
  benefits: string[];
  ingredients: string;
  instructions: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  flavor?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}