const sampleImage1 =
  "https://images.unsplash.com/photo-1738447429433-69e3ecd0bdd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const sampleImage2 =
  "https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// update schema: brand, in stock
export const products = [
  {
    images: [sampleImage1, sampleImage2],
    title: "Cotton T-Shirt",
    price: 19.99,
    description: "Comfortable and breathable cotton t-shirt for everyday wear.",
    rating: 4.5,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Black"],
    reviews: [
      { username: "john_doe", rating: 5, review: "Great quality!" },
      {
        username: "jane_smith",
        rating: 4,
        review: "Nice fit but a bit pricey.",
      },
    ],
    category: "Clothing",
  },
  {
    images: [sampleImage1, sampleImage2],
    title: "Running Shoes",
    price: 49.99,
    description: "Lightweight and durable running shoes with excellent grip.",
    rating: 4.7,
    sizes: ["7", "8", "9", "10"],
    colors: ["White", "Gray", "Black"],
    reviews: [
      {
        username: "runner_guy",
        rating: 5,
        review: "Very comfortable for long runs!",
      },
    ],
    category: "Footwear",
  },
  {
    images: [sampleImage1, sampleImage2],
    title: "Smart Watch",
    price: 99.99,
    description:
      "Feature-packed smartwatch with heart rate monitoring and GPS.",
    rating: 4.6,
    sizes: [],
    colors: ["Black", "Silver"],
    reviews: [
      {
        username: "tech_lover",
        rating: 4,
        review: "Good features but battery life could be better.",
      },
    ],
    category: "Accessories",
  },
  {
    images: [sampleImage1, sampleImage2],
    title: "Travel Backpack",
    price: 34.99,
    description: "Spacious and durable backpack for travel and daily use.",
    rating: 4.8,
    sizes: [],
    colors: ["Blue", "Green", "Black"],
    reviews: [
      {
        username: "adventure_seeker",
        rating: 5,
        review: "Perfect for travel!",
      },
    ],
    category: "Bags",
  },
  {
    images: [sampleImage1, sampleImage2],
    title: "Wireless Headphones",
    price: 79.99,
    description: "Noise-canceling wireless headphones with immersive sound.",
    rating: 4.4,
    sizes: [],
    colors: ["Black", "White"],
    reviews: [
      {
        username: "music_lover",
        rating: 5,
        review: "Excellent sound quality!",
      },
    ],
    category: "Electronics",
  },
  {
    images: [sampleImage1, sampleImage2],
    title: "Leather Jacket",
    price: 129.99,
    description: "Stylish and warm leather jacket for winter.",
    rating: 4.3,
    sizes: ["M", "L", "XL"],
    colors: ["Brown", "Black"],
    reviews: [
      {
        username: "fashionista",
        rating: 4,
        review: "Looks great but a bit heavy.",
      },
    ],
    category: "Clothing",
  },
  {
    images: [sampleImage1, sampleImage2],
    title: "Slim Fit Jeans",
    price: 39.99,
    description: "Comfortable slim fit jeans for casual wear.",
    rating: 4.6,
    sizes: ["28", "30", "32", "34"],
    colors: ["Blue", "Black"],
    reviews: [{ username: "casual_guy", rating: 5, review: "Perfect fit!" }],
    category: "Clothing",
  },
  {
    images: [sampleImage1, sampleImage2],
    title: "Polarized Sunglasses",
    price: 24.99,
    description: "Stylish sunglasses with UV protection.",
    rating: 4.5,
    sizes: [],
    colors: ["Black", "Brown"],
    reviews: [
      {
        username: "beach_goer",
        rating: 5,
        review: "Great protection from the sun!",
      },
    ],
    category: "Accessories",
  },
  {
    images: [sampleImage1, sampleImage2],
    title: "Leather Wallet",
    price: 19.99,
    description:
      "Durable and stylish leather wallet with multiple compartments.",
    rating: 4.7,
    sizes: [],
    colors: ["Black", "Brown"],
    reviews: [
      { username: "minimalist", rating: 4, review: "Compact and functional." },
    ],
    category: "Accessories",
  },
  {
    images: [sampleImage1, sampleImage2],
    title: "Wool Sweater",
    price: 49.99,
    description: "Warm and soft wool sweater for cold weather.",
    rating: 4.6,
    sizes: ["S", "M", "L"],
    colors: ["Gray", "Navy", "Black"],
    reviews: [
      { username: "cozy_wearer", rating: 5, review: "Super warm and stylish!" },
    ],
    category: "Clothing",
  },
]
