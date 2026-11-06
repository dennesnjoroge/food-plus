import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  Tag,
} from "lucide-react";
import { Link } from "react-router";

interface CartItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
}

const initialCart: CartItem[] = [
  {
    id: 1,
    name: "Fried Chicken Burger",
    category: "Burgers",
    price: 499,
    image: "/images/products/burger.jpg",
    quantity: 2,
  },
  {
    id: 2,
    name: "Chicken Mega Mix",
    category: "Chicken",
    price: 799,
    image: "/images/products/chicken.jfif",
    quantity: 1,
  },
  {
    id: 3,
    name: "Fanta 300ml",
    category: "Drinks",
    price: 89,
    image: "/images/products/fanta.jpg",
    quantity: 2,
  },
];

const formatPrice = (amount: number) =>
  `KSh ${amount.toLocaleString("en-KE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);

  const [promoCode, setPromoCode] = useState("");

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const deliveryFee = cartItems.length > 0 ? 150 : 0;

  const total = subtotal + deliveryFee;

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handlePromoCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Promo code:", promoCode);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-10">
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-3 text-sm text-muted">
            Review your items before proceeding to checkout.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl border border-gray-100 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShoppingBag className="h-9 w-9" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-secondary">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted">
              You haven't added anything to your cart yet. Explore our menu and
              find something delicious.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-secondary transition hover:bg-primary-hover"
            >
              Explore Menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_360px]">
            <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-7">
                <h2 className="font-bold text-secondary">
                  Cart Items ({cartItems.length})
                </h2>

                <button
                  type="button"
                  onClick={() => setCartItems([])}
                  className="text-sm font-medium text-red-500 transition hover:text-red-600"
                >
                  Clear Cart
                </button>
              </div>

              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:px-7"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 shrink-0 rounded-xl bg-gray-100 object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted">
                        {item.category}
                      </p>

                      <h3 className="mt-1 font-bold text-secondary">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-sm font-bold text-secondary">
                        {formatPrice(item.price)}
                      </p>

                      <div className="mt-4 flex items-center justify-between sm:hidden">
                        <QuantityControl
                          quantity={item.quantity}
                          onDecrease={() => updateQuantity(item.id, -1)}
                          onIncrease={() => updateQuantity(item.id, 1)}
                        />

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="text-muted transition hover:text-red-500"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    <div className="hidden items-center gap-6 sm:flex">
                      <QuantityControl
                        quantity={item.quantity}
                        onDecrease={() => updateQuantity(item.id, -1)}
                        onIncrease={() => updateQuantity(item.id, 1)}
                      />

                      <p className="w-24 text-right text-sm font-bold text-secondary">
                        {formatPrice(item.price * item.quantity)}
                      </p>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-muted transition hover:text-red-500"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <p className="text-sm font-bold text-secondary sm:hidden">
                      Item total: {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 px-5 py-5 sm:px-7">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:opacity-90"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Continue Shopping
                </Link>
              </div>
            </section>

            <aside className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7">
              <h2 className="text-xl font-bold text-secondary">
                Order Summary
              </h2>

              <div className="mt-7 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-semibold text-secondary">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-muted">Delivery Fee</span>
                  <span className="font-semibold text-secondary">
                    {formatPrice(deliveryFee)}
                  </span>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-secondary">
                      Total Amount
                    </span>

                    <span className="text-xl font-extrabold text-secondary">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>
              </div>

              <form onSubmit={handlePromoCode} className="mt-7">
                <label
                  htmlFor="promoCode"
                  className="mb-2 block text-sm font-semibold text-secondary"
                >
                  Promo Code
                </label>

                <div className="flex gap-2">
                  <div className="relative min-w-0 flex-1">
                    <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />

                    <input
                      id="promoCode"
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-9 pr-3 text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-xl border border-gray-200 px-4 text-sm font-semibold text-secondary transition hover:bg-gray-50"
                  >
                    Apply
                  </button>
                </div>
              </form>

              <Link
                to="/checkout"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-secondary transition hover:bg-primary-hover"
              >
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </Link>

              <p className="mt-4 text-center text-xs leading-5 text-muted">
                Delivery charges and applicable taxes are subject to final
                checkout calculations.
              </p>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

interface QuantityControlProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

const QuantityControl = ({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityControlProps) => (
  <div className="inline-flex items-center rounded-lg border border-gray-200">
    <button
      type="button"
      onClick={onDecrease}
      aria-label="Decrease quantity"
      className="flex h-9 w-9 items-center justify-center text-muted transition hover:bg-gray-50 hover:text-secondary"
    >
      <Minus className="h-3.5 w-3.5" />
    </button>

    <span className="min-w-9 text-center text-sm font-semibold text-secondary">
      {quantity}
    </span>

    <button
      type="button"
      onClick={onIncrease}
      aria-label="Increase quantity"
      className="flex h-9 w-9 items-center justify-center text-muted transition hover:bg-gray-50 hover:text-secondary"
    >
      <Plus className="h-3.5 w-3.5" />
    </button>
  </div>
);
