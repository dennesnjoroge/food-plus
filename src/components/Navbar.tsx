import { NavLink } from "react-router";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Track Order", path: "/track-order" },
  { name: "Contact Us", path: "/contact" },
];

interface NavbarProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

const Navbar = ({ mobile = false, onNavigate }: NavbarProps) => {
  return (
    <nav
      className={
        mobile ? "flex flex-col gap-5" : "hidden items-center gap-8 md:flex"
      }
    >
      {navigation.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          onClick={onNavigate}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${
              isActive ? "text-primary" : "text-muted-light hover:text-white"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
