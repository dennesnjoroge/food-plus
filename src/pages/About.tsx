import {
  ArrowRight,
  Clock,
  Heart,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Utensils,
} from "lucide-react";
import { Link } from "react-router";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "We put our customers at the centre of everything we do, making every interaction simple and convenient.",
  },
  {
    icon: Utensils,
    title: "Quality Food",
    description:
      "We focus on offering delicious food and a menu with options for different tastes and preferences.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Reliability",
    description:
      "We aim to make every order experience dependable, transparent and straightforward.",
  },
  {
    icon: Clock,
    title: "Convenience",
    description:
      "From browsing the menu to completing an order, we make getting your favourite meals easier.",
  },
];

const features = [
  {
    icon: ShoppingBag,
    title: "Easy Ordering",
    description: "Browse our menu and order your favourites with ease.",
  },
  {
    icon: Truck,
    title: "Convenient Delivery",
    description: "Have your orders delivered to your preferred location.",
  },
  {
    icon: Heart,
    title: "Made for You",
    description: "A food experience designed around your preferences.",
  },
];

export const About = () => {
  return (
    <main>
      <section className="relative overflow-hidden bg-secondary">
        <div className="relative mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            About Us
          </p>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Good Food. Great Moments.
            <span className="block text-primary">Made Simple.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-light sm:text-base">
            We believe enjoying great food should be simple and convenient.
            Discover a better way to explore your favourite meals and have them
            delivered to your doorstep.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-bold text-secondary transition hover:bg-primary-hover"
          >
            Explore Our Menu
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="relative">
            <img
              src="/images/products/chicken.jfif"
              alt="A selection of delicious food"
              className="aspect-square w-full rounded-2xl object-cover"
            />

            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-primary p-5 shadow-lg sm:-right-5 sm:p-6">
              <p className="text-2xl font-extrabold text-secondary">
                Good Food
              </p>
              <p className="mt-1 text-xs font-semibold text-secondary/80">
                Great Experiences
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-secondary sm:text-4xl">
              Bringing Your Favourite Food Closer.
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted">
              We started with a simple idea: make it easier for people to enjoy
              the food they love without the hassle of going out to find it.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted">
              Our food delivery service brings together a selection of meals, a
              convenient ordering experience and delivery options that fit into
              everyday life.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted">
              Whether you're ordering lunch, sharing a meal with friends or
              simply satisfying a craving, we're here to make the experience
              straightforward.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary transition hover:opacity-90"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl bg-secondary p-7 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Heart className="h-6 w-6" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white">Our Mission</h2>

            <p className="mt-4 text-sm leading-7 text-muted-light">
              To make enjoying great food easier through a convenient ordering
              experience, a varied menu and dependable delivery services.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white shadow-xl p-7 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <ArrowRight className="h-6 w-6" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-secondary">
              Our Vision
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              To become a trusted food delivery destination, connecting people
              with the meals they enjoy through a simple and accessible
              experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              What Matters to Us
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
              Our Core Values
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              The principles that shape how we serve our customers and approach
              every order.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-gray-200/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-secondary">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-secondary">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              The Experience
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
              Food Ordering Made Easier
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Everything you need for a straightforward food ordering
              experience.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-100 bg-white p-7 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-secondary">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Ready to Order?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Discover Something <span className="text-primary">Delicious.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-light">
            Browse our menu and find something you'll love.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-bold text-secondary transition hover:bg-primary-hover"
          >
            Browse Menu
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};
