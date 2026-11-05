import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router";

export const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <ShoppingBag className="h-7 w-7" strokeWidth={1.8} />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
            Ready to order?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your Next Favourite Meal
            <span className="block text-primary">Is Just a Click Away.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-light sm:text-base">
            Explore our menu, choose your favourites and place your order. Great
            food is only a few steps away.
          </p>

          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-bold text-secondary transition hover:bg-primary-hover"
            >
              Order Now
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
