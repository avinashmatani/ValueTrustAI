import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "ValueTrustAI helps businesses design, build, and deploy intelligent AI systems — from strategy through to production.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: (
      <svg
        className="h-7 w-7"
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
    ),
    title: "AI Strategy",
    description:
      "We work with your leadership team to assess readiness, identify high-impact use cases, and build a pragmatic AI roadmap aligned to your business goals.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
        />
      </svg>
    ),
    title: "Custom AI Solutions",
    description:
      "From LLM-powered applications to fine-tuned models, we design and engineer bespoke AI systems tailored to your specific workflows and data.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
    title: "Automation & Agents",
    description:
      "We build intelligent agents and automation pipelines that eliminate repetitive tasks, accelerate decisions, and integrate seamlessly into your existing tools.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
    title: "Training & Workshops",
    description:
      "Upskill your team with hands-on AI literacy programs, prompt engineering workshops, and leadership briefings designed for real-world application.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with a structured discovery session to understand your business context, data landscape, and where AI can deliver the most value.",
  },
  {
    number: "02",
    title: "Prototype",
    description:
      "We build a focused proof-of-concept within weeks — fast enough to validate, rigorous enough to trust. You see working AI, not slide decks.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "We engineer your solution for scale, reliability, and ongoing performance — with handover, documentation, and support built in from day one.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white">
        {/* Subtle gradient orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full bg-indigo-100 opacity-50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-violet-100 opacity-40 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28 lg:px-8 lg:pt-36">
          {/* Eyebrow */}
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            AI Consulting &amp; Engineering
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            ValueTrustAI —{" "}
            <span className="text-indigo-600">Intelligence you can act on.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            We help forward-thinking businesses design AI strategy, build custom
            AI solutions, and deploy intelligent automation that delivers
            measurable results — from first idea to production.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
            >
              Book a discovery call
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              See our services →
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3">
            {["Strategy", "Build", "Deploy", "Support"].map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-2 text-sm font-medium text-gray-500"
              >
                <svg
                  className="h-4 w-4 text-indigo-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-600">
              What we do
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Services built for real business outcomes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We don&apos;t do AI for the sake of it. Every engagement is tied to
              a clear problem, a measurable outcome, and a path to production.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-100">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <span className="mt-5 text-xs font-semibold text-indigo-600 transition-colors group-hover:text-indigo-800">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
            {/* Left: copy */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-600">
                Our approach
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                From discovery to production — without the fluff
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Most AI projects fail not because the technology isn&apos;t
                ready, but because the process is. We follow a disciplined
                three-phase model that keeps every engagement grounded, fast,
                and focused on value.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                About our team →
              </Link>
            </div>

            {/* Right: steps */}
            <div className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="flex gap-5 rounded-2xl border border-gray-100 bg-gray-50 p-6"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-3xl font-black leading-none text-indigo-100 select-none"
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-sm font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-indigo-600 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to explore AI for your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-indigo-200">
            Book a no-obligation discovery call and find out where AI can create
            the most impact in your organisation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-indigo-600 shadow hover:bg-indigo-50 transition-colors"
            >
              Book a discovery call
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-indigo-400 px-8 py-3.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
