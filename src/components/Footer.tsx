import { useState } from "react";
import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock, CopyrightIcon } from "lucide-react";

export const Footer = () => {
  const [emailAddress, setEmailAddress] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(emailAddress);
  };
  return (
    <footer className="border-t border-t-gray-300 bg-secondary">
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
                className="w-auto max-w-28 cursor-pointer bg-primary px-4 py-2.5 text-secondary transition-colors hover:bg-primary-hover"
              >
                Subscribe
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

              <div className="mt-6 space-y-4 text-muted-light">
                <div className="flex gap-2 text-muted-light">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" strokeWidth={1.5} />
                    <span className="">Address:</span>
                  </div>
                  <span className="font-normal">Nairobi, Kenya</span>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" strokeWidth={1.5} />
                    <span className="">Contact:</span>
                  </div>
                  <span className="font-normal">0712345678</span>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" strokeWidth={1.5} />
                    <span className="">Email:</span>
                  </div>
                  <span className="font-normal">hello@example.com</span>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" strokeWidth={1.5} />
                    <span className="">Hours:</span>
                  </div>
                  <span className="font-normal">Always open</span>
                </div>
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
            <h2 className="font-bold text-muted-light">Account</h2>
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
              <Link
                to="/"
                className="text-muted-light hover:text-white transition-colors"
              >
                Favourites
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-muted-light">Orders</h2>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                to="/menu"
                className="text-muted-light hover:text-white transition-colors"
              >
                Our Menu
              </Link>
              <Link
                to="#"
                className="text-muted-light hover:text-white transition-colors"
              >
                Track Order
              </Link>
              <Link
                to="#"
                className="text-muted-light hover:text-white transition-colors"
              >
                Deals
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-muted-light">Socials</h2>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                to="#"
                className="text-muted-light hover:text-white transition-colors"
              >
                Facebook
              </Link>
              <Link
                to="#"
                className="text-muted-light hover:text-white transition-colors"
              >
                X (Twitter)
              </Link>
              <Link
                to="#"
                className="text-muted-light hover:text-white transition-colors"
              >
                Instagram
              </Link>
              <Link
                to="#"
                className="text-muted-light hover:text-white transition-colors"
              >
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-border/20" />

      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 text-sm text-muted-light sm:flex-row sm:justify-between">
          <div className="flex items-center gap-1">
            <CopyrightIcon className="h-4 w-4" strokeWidth={1.5} />
            <span>
              {new Date().getFullYear()} FoodPlus. All rights reserved.
            </span>
          </div>

          <div className="flex items-center justify-center gap-1">
            Developed by:{" "}
            <a
              href="https://dennesnjoroge.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white font-bold"
            >
              Dennes Njoroge
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
