import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  MapPin,
  Package,
  Search,
  ShoppingBag,
  Truck,
  Utensils,
} from "lucide-react";

type OrderStatus = "CONFIRMED" | "PREPARING" | "OUT_FOR_DELIVERY" | "DELIVERED";

interface Order {
  id: string;
  status: OrderStatus;
  customer: string;
  address: string;
  estimatedDelivery: string;
  items: {
    name: string;
    quantity: number;
  }[];
}

const steps = [
  {
    status: "CONFIRMED",
    title: "Order Confirmed",
    description: "Your order has been received and confirmed.",
    icon: CheckCircle2,
  },
  {
    status: "PREPARING",
    title: "Preparing Your Order",
    description: "Your food is being prepared.",
    icon: Utensils,
  },
  {
    status: "OUT_FOR_DELIVERY",
    title: "Out for Delivery",
    description: "Your order is on its way to you.",
    icon: Truck,
  },
  {
    status: "DELIVERED",
    title: "Delivered",
    description: "Your order has been delivered.",
    icon: Check,
  },
] as const;

const demoOrder: Order = {
  id: "ORD-2026-001",
  status: "PREPARING",
  customer: "John Doe",
  address: "Westlands, Nairobi",
  estimatedDelivery: "35–45 minutes",
  items: [
    { name: "Fried Chicken Burger", quantity: 2 },
    { name: "Chicken Mega Mix", quantity: 1 },
    { name: "Fanta 300ml", quantity: 2 },
  ],
};

const statusOrder: OrderStatus[] = [
  "CONFIRMED",
  "PREPARING",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
];

export const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState("ORD-2026-001");
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTrackOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!orderNumber.trim()) {
      setError("Please enter your order number.");
      return;
    }

    setIsLoading(true);
    setError("");
    setOrder(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (orderNumber.trim().toUpperCase() === demoOrder.id) {
        setOrder(demoOrder);
      } else {
        setError(
          "We couldn't find an order with that number. Please check and try again.",
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const currentStep = order ? statusOrder.indexOf(order.status) : -1;

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Order Tracking
          </p>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Track Your <span className="text-primary">Order.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-light sm:text-base">
            Stay updated on your order. Enter your order number below to check
            its current status.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-16">
        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Package className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-bold text-secondary">Find Your Order</h2>
              <p className="mt-1 text-xs text-muted">
                Enter the order number from your confirmation.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleTrackOrder}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />

              <input
                type="text"
                value={orderNumber}
                onChange={(e) => {
                  setOrderNumber(e.target.value);
                  setError("");
                }}
                placeholder="Enter order number (e.g. ORD-2026-001)"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-4 pl-11 pr-4 text-sm text-secondary outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-bold text-secondary transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? (
                "Searching..."
              ) : (
                <>
                  Track Order
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {error && (
            <p className="mt-4 text-sm font-medium text-red-500" role="alert">
              {error}
            </p>
          )}
        </section>

        {order && (
          <div className="mt-8 space-y-6">
            <section className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Order Number
                  </p>

                  <h2 className="mt-2 text-xl font-extrabold text-secondary">
                    {order.id}
                  </h2>
                </div>

                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {order.status.replaceAll("_", " ")}
                </span>
              </div>

              <div className="mt-7 grid gap-5 border-t border-gray-100 pt-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-secondary">
                    <Clock className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs text-muted">Estimated Delivery</p>
                    <p className="mt-1 text-sm font-bold text-secondary">
                      {order.estimatedDelivery}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-secondary">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs text-muted">Delivery Location</p>
                    <p className="mt-1 text-sm font-bold text-secondary">
                      {order.address}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-secondary">
                Order Progress
              </h2>

              <p className="mt-2 text-sm text-muted">
                Follow your order as it moves through each stage.
              </p>

              <div className="mt-8 space-y-0">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isCompleted = index <= currentStep;
                  const isCurrent = index === currentStep;

                  return (
                    <div key={step.status} className="relative flex gap-4">
                      {index !== steps.length - 1 && (
                        <div
                          className={`absolute left-5 top-11 h-full w-0.5 ${
                            index < currentStep ? "bg-primary" : "bg-gray-200"
                          }`}
                        />
                      )}

                      <div
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                          isCompleted
                            ? "bg-primary text-secondary"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1 pb-9">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3
                            className={`text-sm font-bold ${
                              isCompleted ? "text-secondary" : "text-muted"
                            }`}
                          >
                            {step.title}
                          </h3>

                          {isCurrent && (
                            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold text-primary">
                              CURRENT
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-xs leading-6 text-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8">
              <h2 className="text-lg font-bold text-secondary">
                Items in Your Order
              </h2>

              <div className="mt-5 divide-y divide-gray-100">
                {order.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <ShoppingBag className="h-4 w-4" />
                      </div>

                      <p className="text-sm font-medium text-secondary">
                        {item.name}
                      </p>
                    </div>

                    <span className="text-sm font-bold text-muted">
                      x {item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        <div className="mt-8 rounded-2xl bg-secondary p-6 text-center sm:p-8">
          <h2 className="text-lg font-bold text-white">
            Need Help With Your Order?
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted-light">
            If you have questions or need assistance, get in touch with our
            team.
          </p>

          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary-hover"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
};
