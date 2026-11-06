export interface Destination {
  id: number;
  name: string;
  country: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    description: "Beautiful beaches and tropical adventures.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    category: "Beach",
    price: 850,
  },
  {
    id: 2,
    name: "Swiss Alps",
    country: "Switzerland",
    description: "Discover breathtaking mountain landscapes.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
    category: "Mountain",
    price: 1200,
  },
  {
    id: 3,
    name: "Tokyo",
    country: "Japan",
    description: "Experience modern cities and rich culture.",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    category: "City",
    price: 950,
  },
  {
    id: 4,
    name: "Maldives",
    country: "Maldives",
    description: "Enjoy crystal-clear water and island resorts.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
    category: "Beach",
    price: 1500,
  },
];