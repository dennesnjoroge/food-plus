import { Link } from "react-router";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

export const NotFound = () => {
  return (
    <>
      <Header />

      <main className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-16 text-center sm:px-8 lg:py-24">
        <p className="text-lg font-bold text-secondary">
          Sorry! The page you are looking for does not exist or may have been
          moved.
        </p>

        <Link
          to="/"
          className="rounded-lg bg-primary px-5 py-2.5 text-center font-bold text-secondary transition-opacity hover:opacity-90"
        >
          Back Home
        </Link>
      </main>

      <Footer />
    </>
  );
};
