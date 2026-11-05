import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  rating?: number;
  slug: string;
}

export const ProductCard = ({
  name,
  price,
  image,
  rating,
  slug,
}: ProductCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition hover:border-gray-200">
      <Link to={`/menu/${slug}`} className="group block">
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="mt-2 truncate text-secondary-light font-semibold text-gray-900">
            {name}
          </h3>

          <div className="mt-3 flex items-center justify-between">
            <p className="text-lg font-bold text-secondary">
              KSh {price.toLocaleString()}
            </p>

            <div className="flex items-center gap-1 text-sm text-muted">
              <Star className="h-4 w-4 fill-primary text-primary" />
              {rating}
            </div>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-bold text-secondary transition hover:bg-primary-hover">
          <ShoppingCart className="h-4 w-4" />
          Add to cart
        </button>
      </div>
    </article>
  );
};
