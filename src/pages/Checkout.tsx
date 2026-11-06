import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  MapPin,
  Smartphone,
  Wallet,
} from "lucide-react";
import { Link } from "react-router";

type PaymentMethod = "MPESA" | "CASH";

const orderItems = [
  {
    id: 1,
    name: "Fried Chicken Burger",
    image: "/images/products/burger.jpg",
    price: 499,
    quantity: 2,
  },
  {
    id: 2,
    name: "Chicken Mega Mix",
    image: "/images/products/chicken.jfif",
    price: 799,
    quantity: 1,
  },
  {
    id: 3,
    name: "Fanta 300ml",
    image: "/images/products/fanta.jpg",
    price: 89,
    quantity: 2,
  },
];

const formatPrice = (amount: number) =>
  `KSh ${amount.toLocaleString("en-KE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("MPESA");

  const [isLoading, setIsLoading] = useState(false);

  const subtotal = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const deliveryFee = 150;
  const total = subtotal + deliveryFee;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const orderData = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        county: formData.get("county"),
        town: formData.get("town"),
        address: formData.get("address"),
        instructions: formData.get("instructions"),
        paymentMethod,
        items: orderItems,
      };

      // Send orderData to your checkout API.
      console.log(orderData);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Page heading */}
        <div className="mb-10">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-muted"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Link>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
            Checkout
          </h1>

          <p className="mt-3 text-sm text-muted">
            Complete your details to place your order.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid items-start gap-8 lg:grid-cols-[1fr_380px]"
        >
          {/* Checkout form */}
          <div className="space-y-7">
            {/* Contact information */}
            <section className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Smartphone className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="font-bold text-secondary">
                    Contact Information
                  </h2>
                  <p className="mt-1 text-xs text-muted">
                    Enter your contact details.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold text-secondary"
                  >
                    Full Name
                    <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-secondary"
                  >
                    Email Address
                    <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-secondary"
                  >
                    Phone Number
                    <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+254 7XX XXX XXX"
                    autoComplete="tel"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>
            </section>

            {/* Delivery information */}
            <section className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="font-bold text-secondary">
                    Delivery Information
                  </h2>
                  <p className="mt-1 text-xs text-muted">
                    Where should we deliver your order?
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="county"
                    className="mb-2 block text-sm font-semibold text-secondary"
                  >
                    County
                    <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="county"
                    name="county"
                    type="text"
                    placeholder="e.g. Nairobi"
                    autoComplete="address-level1"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="town"
                    className="mb-2 block text-sm font-semibold text-secondary"
                  >
                    Town / Area
                    <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="town"
                    name="town"
                    type="text"
                    placeholder="e.g. Westlands"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-semibold text-secondary"
                  >
                    Street Address / Building
                    <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Building name, street, house number..."
                    autoComplete="street-address"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="instructions"
                    className="mb-2 block text-sm font-semibold text-secondary"
                  >
                    Delivery Instructions{" "}
                    <span className="font-normal text-muted">(Optional)</span>
                  </label>

                  <textarea
                    id="instructions"
                    name="instructions"
                    rows={3}
                    placeholder="Any additional directions for the delivery..."
                    className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>
            </section>

            {/* Payment method */}
            <section className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Wallet className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="font-bold text-secondary">Payment Method</h2>
                  <p className="mt-1 text-xs text-muted">
                    Choose how you would like to pay.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                <label
                  className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                    paymentMethod === "MPESA"
                      ? "border-secondary bg-secondary/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="MPESA"
                    checked={paymentMethod === "MPESA"}
                    onChange={() => setPaymentMethod("MPESA")}
                    className="h-4 w-4 accent-secondary"
                  />

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg">
                    <img
                      src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/960px-M-PESA_LOGO-01.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20251215193002"
                      alt=""
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-bold text-secondary">M-Pesa</p>
                    <p className="mt-1 text-xs text-muted">
                      Pay using your M-Pesa mobile account.
                    </p>
                  </div>

                  {paymentMethod === "MPESA" && (
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                  )}
                </label>

                <label
                  className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                    paymentMethod === "CASH"
                      ? "border-secondary bg-secondary/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="CASH"
                    checked={paymentMethod === "CASH"}
                    onChange={() => setPaymentMethod("CASH")}
                    className="h-4 w-4 accent-secondary"
                  />

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-secondary">
                    <CreditCard className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-bold text-secondary">
                      Cash on Delivery
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      Pay when your order arrives.
                    </p>
                  </div>

                  {paymentMethod === "CASH" && (
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                  )}
                </label>
              </div>
            </section>
          </div>

          {/* Order summary */}
          <aside className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-secondary">Your Order</h2>

            <p className="mt-1 text-sm text-muted">
              {orderItems.reduce((sum, item) => sum + item.quantity, 0)} items
            </p>

            {/* Products */}
            <div className="mt-6 space-y-5">
              {orderItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-xl bg-gray-100 object-cover"
                    />

                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
                      {item.quantity}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-semibold text-secondary">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-muted">
                      {formatPrice(item.price)} each
                    </p>
                  </div>

                  <p className="text-sm font-bold text-secondary">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            {/* Price breakdown */}
            <div className="mt-7 space-y-4 border-t border-gray-100 pt-6">
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

              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="font-bold text-secondary">Total</span>

                <span className="text-xl font-extrabold text-secondary">
                  {formatPrice(total)}
                </span>
              </div>
            </div>

            {/* Place order */}
            <button
              type="submit"
              disabled={isLoading || orderItems.length === 0}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-secondary transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? (
                "Processing..."
              ) : (
                <>
                  Place Order
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-muted">
              By placing your order, you agree to our terms and conditions.
            </p>

            <Link
              to="/cart"
              className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-secondary transition hover:text-muted"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Cart
            </Link>
          </aside>
        </form>
      </div>
    </main>
  );
};
