import { Search, ShoppingBag, Bike, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const steps = [
  {
    number: "01",
    title: "Browse & Choose",
    description:
      "Explore our menu, discover your favourites and select the meals you'd love to enjoy.",
    icon: Search,
  },
  {
    number: "02",
    title: "Place Your Order",
    description:
      "Add your favourite meals to the cart and complete your order in just a few steps.",
    icon: ShoppingBag,
  },
  {
    number: "03",
    title: "Get It Delivered",
    description:
      "Sit back and relax while we prepare your order and deliver it straight to your doorstep.",
    icon: Bike,
  },
];

export const HowItWorks = () => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
            How It Works
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Getting your favourite meals has never been easier. Just follow
            these three simple steps.
          </p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Connecting line - desktop */}
          <div className="absolute left-[16.67%] right-[16.67%] top-10 hidden border-t-2 border-dashed border-gray-200 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="h-8 w-8" strokeWidth={1.8} />

                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-secondary">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-secondary">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-7 text-muted">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 rounded-xl bg-primary px-7 py-4 text-sm font-bold text-secondary shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Start Ordering
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
