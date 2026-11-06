import { Zap, ShieldCheck, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fast food,
            <span className="block text-primary">delivered faster.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-muted-light sm:text-lg">
            Skip the lines and satisfy your cravings with instant online
            ordering, real-time kitchen tracking, and lightning-fast delivery.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-4 text-sm font-semibold text-secondary shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              Order Now
            </a>

            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-xl border border-primary px-7 py-4 text-sm font-semibold text-primary transition hover:border-primary-hover hover:text-primary-hover"
            >
              Our Menu
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-border/20 pt-7">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <p className="text-2xl font-bold tracking-tight text-white">
                  Fast
                </p>
              </div>
              <p className="text-sm text-muted-light">
                Quick & reliable delivery
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />

                <p className="text-2xl font-bold text-white">Safe</p>
              </div>

              <p className="mt-1 text-sm text-muted-light">Package handling</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <p className="text-2xl font-bold text-white">24/7</p>
              </div>

              <p className="mt-1 text-sm text-muted-light">Order support</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <img
            src="/images/delivery-rider.svg"
            alt="Delivery rider carrying a package"
            className="h-[380px] w-full object-cover sm:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
};
