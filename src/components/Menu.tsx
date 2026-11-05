import Header from "./Header";
import { Footer } from "./Footer";
import { ProductCard } from "./ProductCard";

export const Menu = () => {
  const products = [
    {
      id: 1,
      name: "Fried Chicken Burger",
      price: 499,
      image: "/images/products/burger.jpg",
      rating: 4.8,
      slug: "fried-chicken-burger",
    },
    {
      id: 2,
      name: "Chicken Mega mix",
      price: 799,
      image: "/images/products/chicken.jfif",
      rating: 4.6,
      slug: "chicken-mega-mix",
    },
    {
      id: 3,
      name: "Deliciously Plated Roast Chicken",
      price: 1800,
      image: "/images/products/chiken1.jpg",
      rating: 4.7,
      slug: "deliciously-plated-roast-chicken",
    },
    {
      id: 4,
      name: "Nutritious milk 50ml",
      price: 99,
      image: "/images/products/milk.jpg",
      rating: 2.5,
      slug: "nutritious-milk-50ml-x0yi",
    },
    {
      id: 5,
      name: "Fanta 300ml",
      price: 89,
      image: "/images/products/fanta.jpg",
      rating: 4.7,
      slug: "fanta-300ml",
    },
    {
      id: 6,
      name: "Highlands drinking water",
      price: 55,
      image: "/images/products/water.jpg",
      rating: 2.5,
      slug: "highlands-drinking-water-xl63",
    },
    {
      id: 7,
      name: "Premium chicken fry",
      price: 999,
      image: "/images/products/fry.jpg",
      rating: 4.7,
      slug: "premium-chicken-fry",
    },
    {
      id: 8,
      name: "Fried Chicken bucket",
      price: 1499,
      image: "/images/products/bucket.jpg",
      rating: 2.5,
      slug: "fried-chicken-bucket",
    },
    {
      id: 9,
      name: "Foodplus premium coffee",
      price: 129,
      image: "/images/products/coffee.jpg",
      rating: 2.5,
      slug: "foodplus-premium-coffee",
    },
    {
      id: 10,
      name: "Foodplus Sweet popcorn",
      price: 199,
      image: "/images/products/popcorn.jpg",
      rating: 3.2,
      slug: "foodplus-sweet-popcorn",
    },
  ];

  return (
    <>
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <h2 className="text-secondary text-lg font-bold">Our Menu</h2>

        <div className="grid mt-6 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
