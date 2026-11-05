import { Truck, ShieldCheck, ChefHat, Clock3 } from "lucide-react";

const benefits = [
  {
    title: "Fast Delivery",
    description:
      "Get your favourite meals delivered to your doorstep quickly and conveniently.",
    icon: Truck,
  },
  {
    title: "Quality Food",
    description:
      "Enjoy delicious meals prepared with carefully selected ingredients.",
    icon: ChefHat,
  },
  {
    title: "Safe & Reliable",
    description:
      "Your orders are handled with care from preparation to delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Easy Ordering",
    description:
      "Browse our menu, place your order and enjoy a hassle-free experience.",
    icon: Clock3,
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
            Why Choose Us
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            We make enjoying your favourite meals easier with quality food,
            convenient ordering and dependable delivery.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-gray-200/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-secondary">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-secondary">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
