import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ProductCard } from "./ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Fried Chicken Burger",
    price: 499,
    image: "/images/products/burger.jpg",
    rating: 4.8,
    slug: "fried-chicken-burger",
    category: "Burgers",
  },
  {
    id: 2,
    name: "Chicken Mega Mix",
    price: 799,
    image: "/images/products/chicken.jfif",
    rating: 4.6,
    slug: "chicken-mega-mix",
    category: "Chicken",
  },
  {
    id: 3,
    name: "Deliciously Plated Roast Chicken",
    price: 1800,
    image: "/images/products/chiken1.jpg",
    rating: 4.7,
    slug: "deliciously-plated-roast-chicken",
    category: "Chicken",
  },
];

export const Featured = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-8 lg:py-20">
        {/* Section heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
              Featured Products
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
              Explore some of our customer favourites, freshly prepared and
              ready to order.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            View all products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Products grid */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
