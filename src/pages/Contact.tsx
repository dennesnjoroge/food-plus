import { useState } from "react";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  CircleCheck,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Nairobi, Kenya",
    href: undefined,
  },
  {
    icon: Clock,
    title: "Opening Hours",
    value: "Monday - Saturday, 8 AM - 9 PM",
    href: undefined,
  },
];

export const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccess("Message sent successfully.");

      setTimeout(() => {
        setSuccess("");
      }, 2000);
    } finally {
      setFullName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Get In Touch
          </p>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            We'd Love to <span className="text-primary">Hear From You.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-light sm:text-base">
            Have a question about our menu, an order, or something else? Send us
            a message and we'll get back to you.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Contact Information
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary">
              Let's Talk
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              We're here to help with your questions, feedback and order
              enquiries. Reach us through any of the channels below.
            </p>

            <div className="mt-9 space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-secondary">
                        {item.title}
                      </h3>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-sm text-muted transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm leading-6 text-muted">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl bg-secondary p-6">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-primary" />

                <h3 className="font-bold text-white">
                  Need help with an order?
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted-light">
                Contact our team for assistance with your order or any
                delivery-related enquiries.
              </p>

              <a
                href="tel:+254700000000"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
              >
                Call Us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-secondary">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
              Fill out the form below and we'll be in touch.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-secondary"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    type="text"
                    placeholder="Your name"
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
                  </label>

                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-secondary"
                >
                  Phone Number{" "}
                  <span className="font-normal text-muted">(Optional)</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  type="tel"
                  placeholder="+254 700 000 000"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-secondary"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  type="text"
                  placeholder="What is your message about?"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-secondary"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-secondary transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              {success && (
                <span className="flex items-center gap-2 text-sm text-emerald-500">
                  <CircleCheck className="h-4 w-4 shrink-0" />
                  {success}
                </span>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
