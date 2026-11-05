import { useState } from "react";
import { ProductCard } from "../components/ProductCard";

const categories = ["All", "Burgers", "Chicken", "Drinks", "Snacks"];

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Fried Chicken Burger",
      category: "Burgers",
      price: 499,
      image: "/images/products/burger.jpg",
      rating: 4.8,
      slug: "fried-chicken-burger",
    },
    {
      id: 2,
      name: "Chicken Mega mix",
      category: "Chicken",
      price: 799,
      image: "/images/products/chicken.jfif",
      rating: 4.6,
      slug: "chicken-mega-mix",
    },
    {
      id: 3,
      name: "Deliciously Plated Roast Chicken",
      category: "Chicken",
      price: 1800,
      image: "/images/products/chiken1.jpg",
      rating: 4.7,
      slug: "deliciously-plated-roast-chicken",
    },
    {
      id: 4,
      name: "Nutritious milk 50ml",
      category: "Drinks",
      price: 99,
      image: "/images/products/milk.jpg",
      rating: 2.5,
      slug: "nutritious-milk-50ml-x0yi",
    },
    {
      id: 5,
      name: "Fanta 300ml",
      category: "Drinks",
      price: 89,
      image: "/images/products/fanta.jpg",
      rating: 4.7,
      slug: "fanta-300ml",
    },
    {
      id: 6,
      name: "Highlands drinking water",
      category: "Drinks",
      price: 55,
      image: "/images/products/water.jpg",
      rating: 2.5,
      slug: "highlands-drinking-water-xl63",
    },
    {
      id: 7,
      name: "Premium chicken fry",
      category: "Chicken",
      price: 999,
      image: "/images/products/fry.jpg",
      rating: 4.7,
      slug: "premium-chicken-fry",
    },
    {
      id: 8,
      name: "Fried Chicken bucket",
      category: "Chicken",
      price: 1499,
      image: "/images/products/bucket.jpg",
      rating: 2.5,
      slug: "fried-chicken-bucket",
    },
    {
      id: 9,
      name: "Foodplus premium coffee",
      category: "Drinks",
      price: 129,
      image: "/images/products/coffee.jpg",
      rating: 2.5,
      slug: "foodplus-premium-coffee",
    },
    {
      id: 10,
      name: "Foodplus Sweet popcorn",
      category: "Snacks",
      price: 199,
      image: "/images/products/popcorn.jpg",
      rating: 3.2,
      slug: "foodplus-sweet-popcorn",
    },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-secondary text-2xl font-bold">Our Menu</h2>
        <p className="text-muted text-sm">
          Explore our selection of delicious meals and refreshments.
        </p>
      </div>

      {/* Category Filters */}
      <div className="mt-6 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-muted">
          No products found in this category.
        </p>
      )}
    </div>
  );
};
