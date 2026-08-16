"use client";

import { useState } from "react";

// Metadata can't be exported from a client component — it lives in a
// separate layout or a sibling server component. For now we set the
// <title> via the global template in app/layout.tsx ("Contact | ValueTrustAI").

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const INITIAL: FormState = { name: "", email: "", company: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // TODO: replace with API route or external service (Resend, Formspree, etc.)
    console.log("Contact form submission:", form);

    // Simulate async send
    await new Promise((r) => setTimeout(r, 800));

    setStatus("success");
    setForm(INITIAL);
  }

  return (
    <>
      {/* ── Page Header ── */}
      <section className="border-b border-gray-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Get in touch
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contact us
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
            Tell us about your goals and we&apos;ll get back to you within one
            business day.
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

            {/* Left: contact info */}
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Start a conversation
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Whether you have a specific project in mind, want to explore
                  where AI fits in your business, or simply want an honest
                  second opinion — we&apos;re happy to talk. No sales pitch,
                  no obligation.
                </p>
              </div>

              {/* What to expect */}
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  What happens next
                </h3>
                <ol className="flex flex-col gap-4">
                  {[
                    {
                      step: "1",
                      text: "We read your message and review your goals.",
                    },
                    {
                      step: "2",
                      text: "We reply within one business day with a suggested next step.",
                    },
                    {
                      step: "3",
                      text: "If there's a fit, we schedule a free 30-minute discovery call.",
                    },
                  ].map(({ step, text }) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600">
                        {step}
                      </span>
                      <p className="text-sm leading-relaxed text-gray-600 pt-0.5">
                        {text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Direct email */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Prefer email?
                </p>
                <a
                  href="mailto:hello@valuetrustai.com"
                  className="mt-2 block text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  hello@valuetrustai.com
                </a>
                <p className="mt-1 text-xs text-gray-500">
                  We respond within one business day.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {status === "success" ? (
                /* Success state */
                <div className="flex flex-col items-start rounded-2xl border border-green-100 bg-green-50 p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Thanks — we&apos;ll be in touch.
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Your message has been received. We typically respond within
                    one business day. In the meantime, feel free to explore our
                    services.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    ← Send another message
                  </button>
                </div>
              ) : (
                /* Form */
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-6"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-50"
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-50"
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Company{" "}
                      <span className="text-xs font-normal text-gray-400">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-50"
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, or challenges…"
                      className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-50"
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      "Send message"
                    )}
                  </button>

                  <p className="text-xs text-gray-400">
                    We respect your privacy. Your details are never shared with
                    third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
