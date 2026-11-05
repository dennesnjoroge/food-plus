import { useState } from "react";
import { Link } from "react-router";
import Navbar from "./Navbar";
import { X, Menu, ShoppingCart } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-secondary">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-white"
        >
          Food<span className="text-primary">Plus</span>.
        </Link>

        {/* Main Navigation */}
        <Navbar />

        <div className="flex items-center gap-5">
          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="relative text-white transition-colors hover:text-primary"
          >
            <ShoppingCart size={23} />

            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-foreground">
              2
            </span>
          </Link>

          <Link
            to="/login"
            className="rounded-lg hidden bg-primary md:block px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:opacity-90"
          >
            Sign In
          </Link>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="rounded-lg p-2 text-muted-light transition-colors hover:bg-white hover:text-secondary md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-secondary px-4 py-6 md:hidden sm:px-6"
        >
          <Navbar mobile onNavigate={closeMenu} />

          <div className="mt-6 border-t border-white/10 pt-5">
            <Link
              to="/login"
              onClick={closeMenu}
              className="block w-full rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-secondary transition-colors hover:bg-primary-hover"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
