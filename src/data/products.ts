export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  colors?: string[];
}

export const categories = [
  { id: 1, name: "Electronics", icon: "📱" },
  { id: 2, name: "Fashion", icon: "👕" },
  { id: 3, name: "Home", icon: "🏠" },
  { id: 4, name: "Beauty", icon: "💄" },
  { id: 5, name: "Sports", icon: "⚽" },
  { id: 6, name: "Books", icon: "📚" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    rating: 4.8,
    reviews: 2341,
    category: "Electronics",
    description: "Premium wireless headphones with active noise cancellation, 40-hour battery life, and studio-quality sound. Designed for the modern audiophile.",
    colors: ["#1a1a1a", "#f5f5f5", "#0066ff"],
  },
  {
    id: 2,
    name: "Smart Watch Ultra",
    price: 449.00,
    originalPrice: 549.00,
    image: "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=400&q=80",
    rating: 4.9,
    reviews: 1856,
    category: "Electronics",
    description: "Advanced health monitoring, GPS tracking, and seamless connectivity. The ultimate wearable for active lifestyles.",
  },
  {
    id: 3,
    name: "Minimalist Backpack",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    rating: 4.6,
    reviews: 892,
    category: "Fashion",
    description: "Sleek, water-resistant backpack with laptop compartment. Perfect for daily commutes and weekend adventures.",
  },
  {
    id: 4,
    name: "Ceramic Plant Pot Set",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80",
    rating: 4.7,
    reviews: 456,
    category: "Home",
    description: "Set of 3 handcrafted ceramic pots in earth tones. Bring nature indoors with these elegant planters.",
  },
  {
    id: 5,
    name: "Running Shoes Air",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    rating: 4.5,
    reviews: 3201,
    category: "Sports",
    description: "Lightweight running shoes with responsive cushioning and breathable mesh upper. Engineered for peak performance.",
  },
  {
    id: 6,
    name: "Organic Skincare Kit",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
    rating: 4.8,
    reviews: 1124,
    category: "Beauty",
    description: "Complete skincare routine with cleanser, toner, serum, and moisturizer. 100% organic and cruelty-free.",
  },
];

export const banners = [
  {
    id: 1,
    title: "Summer Collection",
    subtitle: "Up to 40% off",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Fresh styles just dropped",
    gradient: "from-indigo-500 to-blue-400",
  },
  {
    id: 3,
    title: "Flash Sale",
    subtitle: "24 hours only",
    gradient: "from-sky-500 to-blue-600",
  },
];
