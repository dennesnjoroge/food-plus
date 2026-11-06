import { useState } from "react";
import { Link } from "react-router";
import { LoaderCircle } from "lucide-react";

export const Footer = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [isLoading, setISLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      setISLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      window.alert("Email added successfully.");
    } finally {
      setEmailAddress("");
      setISLoading(false);
    }
  };
  return (
    <footer className="border-t border-t-border/20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto flex max-w-xl flex-col items-center">
          <h2 className="mb-4 text-center text-xl text-muted-light sm:text-2xl">
            Subscribe to our Newsletter
          </h2>

          <div className="w-full max-w-md">
            <form
              onSubmit={handleSubmit}
              className="flex w-full shadow-lg border border-primary overflow-hidden rounded-md"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-transparent bg-white px-3 py-2.5 text-secondary outline-none"
                value={emailAddress}
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                }}
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-auto max-w-32 cursor-pointer bg-primary px-4 py-2.5 text-secondary transition-colors hover:bg-primary-hover"
              >
                {isLoading ? (
                  <span className="flex gap-2 items-center">
                    <LoaderCircle className="animate-spin h-4 w-4" /> Loading...
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr className="border-border/20" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div>
            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-white"
            >
              Food<span className="text-primary">Plus</span>.
            </Link>

            <div className="mt-6">
              <p className="text-muted-light">
                Hot meals, lightning-fast ordering — just a tap away.
              </p>

              <div className="flex mt-6 gap-2">
                <a
                  href="https://x.com"
                  target="_blank"
                  className="transition-opacity opacity-80 hover:opacity-100"
                >
                  <img
                    alt=""
                    data-src="https://cdn-static.oraimo.com/img/icon-twitter-white.svg"
                    loading="lazy"
                    src="https://cdn-static.oraimo.com/img/icon-twitter-white.svg"
                  ></img>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="transition-opacity opacity-80 hover:opacity-100"
                >
                  <img
                    alt="Instagram"
                    loading="lazy"
                    data-src="https://cdn-static.oraimo.com/img/icon-instagram-white.svg"
                    src="https://cdn-static.oraimo.com/img/icon-instagram-white.svg"
                  />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="transition-opacity opacity-80 hover:opacity-100"
                >
                  <img
                    alt="Facebook"
                    loading="lazy"
                    data-src="https://cdn-static.oraimo.com/img/icon-facebook-white.svg"
                    src="https://cdn-static.oraimo.com/img/icon-facebook-white.svg"
                  />
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  className="transition-opacity opacity-80 hover:opacity-100"
                >
                  <img
                    alt="Tiktok"
                    loading="lazy"
                    data-src="https://cdn-static.oraimo.com/img/icon-tiktok-white.svg"
                    src="https://cdn-static.oraimo.com/img/icon-tiktok-white.svg"
                  />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-muted-light">Company</h2>
            <div className="mt-4 flex flex-col gap-2 text-gray-600">
              <Link
                to="/about"
                className="text-muted-light hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-muted-light hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-muted-light">Quick Links</h2>
            <div className="mt-4 flex flex-col gap-2 text-gray-600">
              <Link
                to="/login"
                className="text-muted-light hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/cart"
                className="text-muted-light hover:text-white transition-colors"
              >
                Cart
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-muted-light">Orders</h2>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                to="/products"
                className="text-muted-light hover:text-white transition-colors"
              >
                Shop
              </Link>
              <Link
                to="/track-order"
                className="text-muted-light hover:text-white transition-colors"
              >
                Track Order
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-muted-light">Get Our App</h2>

            <div className="mt-6 flex flex-row flex-wrap items-center gap-3 sm:flex-col sm:items-start">
              <a
                href="#"
                aria-label="Get it on Google Play"
                className="transition-opacity opacity-80 hover:opacity-100"
              >
                <img
                  src="https://cdn-static.oraimo.com/img/google-play-white.svg"
                  alt="Get it on Google Play"
                  loading="lazy"
                  className="h-10 w-auto"
                />
              </a>

              <a
                href="#"
                aria-label="Download on the App Store"
                className="transition-opacity opacity-80 hover:opacity-100"
              >
                <img
                  src="https://cdn-static.oraimo.com/img/app-store-white.svg"
                  alt="Download on the App Store"
                  loading="lazy"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-border/20" />

      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 text-sm text-muted-light sm:flex-row sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} FoodPlus. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
