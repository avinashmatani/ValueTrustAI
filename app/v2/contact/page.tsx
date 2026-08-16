"use client";

import { useState } from "react";

// Metadata can't be exported from a client component.
// Assuming layout or template handles it.

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const INITIAL: FormState = { name: "", email: "", company: "", message: "" };

export default function V2ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus("success");
      setForm(INITIAL);
    } catch (error: any) {
      console.error("Contact form error:", error);
      setStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred. Please try again.");
    }
  }

  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-black py-16 sm:py-24 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
            Get in touch
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact us.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
            Tell us about your goals and we&apos;ll get back to you within one
            business day.
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

            {/* Left: contact info */}
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Start a conversation
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Whether you have a specific project in mind, want to explore
                  where AI fits in your business, or simply want an honest
                  second opinion — we&apos;re happy to talk. No sales pitch,
                  no obligation.
                </p>
              </div>

              {/* What to expect */}
              <div>
                <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  What happens next
                </h3>
                <ol className="flex flex-col gap-6">
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
                      <span className="font-mono text-sm font-bold text-white pt-0.5">
                        {step}.
                      </span>
                      <p className="text-sm leading-relaxed text-zinc-400">
                        {text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Direct email */}
              <div className="border border-zinc-800 bg-zinc-950 p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  Prefer email?
                </p>
                <a
                  href="mailto:hello@valuetrustai.com"
                  className="mt-3 block font-mono text-sm text-white hover:text-zinc-400 transition-colors"
                >
                  hello@valuetrustai.com
                </a>
                <p className="mt-2 text-xs text-zinc-600">
                  We respond within one business day.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {status === "success" ? (
                /* Success state */
                <div className="flex flex-col items-start border border-green-900 bg-green-950/20 p-8">
                  <div className="mb-4 text-green-500">
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-white">
                    Request Received.
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Your message has been processed. We typically respond within
                    one business day. In the meantime, feel free to explore our
                    architecture.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 font-mono text-xs uppercase tracking-widest text-white hover:text-zinc-400 transition-colors"
                  >
                    ← Initialize New Request
                  </button>
                </div>
              ) : (
                /* Form */
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-6"
                >
                  {status === "error" && errorMessage && (
                    <div className="border border-red-900 bg-red-950/20 p-4 text-sm text-red-400 font-mono">
                      [ERROR] {errorMessage}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-400"
                    >
                      Name <span className="text-white">*</span>
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
                      className="w-full border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-white disabled:opacity-50"
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-400"
                    >
                      Email <span className="text-white">*</span>
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
                      className="w-full border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-white disabled:opacity-50"
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-400"
                    >
                      Company{" "}
                      <span className="text-zinc-600">
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
                      className="w-full border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-white disabled:opacity-50"
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-400"
                    >
                      Message <span className="text-white">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, or challenges…"
                      className="w-full resize-none border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-white disabled:opacity-50"
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-4 inline-flex items-center justify-center border border-white bg-white px-8 py-4 font-mono text-sm uppercase tracking-widest text-black transition-all hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg
                          className="mr-3 h-4 w-4 animate-spin text-current"
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
                        Transmitting...
                      </>
                    ) : (
                      "Transmit Message"
                    )}
                  </button>

                  <p className="mt-4 font-mono text-xs text-zinc-600">
                    // We respect your privacy. Details are never shared.
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
