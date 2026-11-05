export const Promotion = () => {
  return (
    <section className="relative isolate overflow-hidden bg-secondary">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Enjoy crazy
            <span className="block text-primary">discounts.</span>
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-muted-light sm:text-lg">
            Get more for less. Grab this exclusive offer before it runs out.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-lg font-medium text-muted-light line-through decoration-red-400/70 sm:text-xl">
              KSh 999
            </span>

            <span className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              KSh 499
            </span>

            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-primary">
              50% OFF
            </span>
          </div>

          <div className="mt-8">
            <a
              href="/products"
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-7 py-4 text-sm font-bold text-secondary shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary-hover sm:w-auto"
            >
              Order Now
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="mt-6 border-t border-border/20 pt-5 text-xs text-muted-light">
            * Terms and conditions apply. Offer available while stocks last.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute rounded-3xl bg-primary/10" />

          <div className="relative overflow-hidden rounded-2xl bg-white/5">
            <img
              src="/images/products/burger.jpg"
              alt="Featured promotional burger"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105 sm:aspect-[5/4] lg:aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
