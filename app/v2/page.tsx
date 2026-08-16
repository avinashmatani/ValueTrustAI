import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consulting & Engineering",
  description:
    "ValueTrustAI helps businesses design, build, and deploy intelligent AI systems — from strategy through to production.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: (
      <svg
        className="h-6 w-6"
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
        className="h-6 w-6"
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
        className="h-6 w-6"
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
        className="h-6 w-6"
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

export default function V2HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-black py-24 sm:py-32 lg:py-40 border-b border-zinc-800">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start max-w-4xl">
            <div className="mb-8 inline-flex items-center rounded-sm border border-zinc-800 bg-zinc-900/50 px-3 py-1 font-mono text-xs uppercase tracking-widest text-zinc-400">
              <span className="mr-2 flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
              AI Consulting & Engineering
            </div>
            
            <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-6xl lg:text-7xl">
              ValueTrustAI.
              <br />
              <span className="text-zinc-500">Intelligence you can act on.</span>
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
              We help forward-thinking businesses design AI strategy, build custom
              AI solutions, and deploy intelligent automation that delivers
              measurable results — from first idea to production.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/v2/contact"
                className="group relative flex items-center justify-center overflow-hidden border border-white bg-white px-8 py-3.5 font-mono text-sm uppercase tracking-widest text-black transition-all hover:bg-black hover:text-white"
              >
                Book a discovery call
              </Link>
              <Link
                href="/v2/services"
                className="group relative flex items-center justify-center border border-zinc-700 bg-transparent px-8 py-3.5 font-mono text-sm uppercase tracking-widest text-zinc-300 transition-all hover:border-white hover:text-white"
              >
                See our services
              </Link>
            </div>

            {/* Trust bar */}
            <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-zinc-600">
              {["Strategy", "Build", "Deploy", "Support"].map((tag) => (
                <span key={tag} className="flex items-center gap-2">
                  <span className="text-white">+</span>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-black py-24 sm:py-32 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">What we do</h2>
            <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Services built for real business outcomes
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
              We don&apos;t do AI for the sake of it. Every engagement is tied to
              a clear problem, a measurable outcome, and a path to production.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href="/v2/services"
                className="group relative bg-black p-8 transition-colors hover:bg-zinc-900/50 flex flex-col h-full"
              >
                <div className="mb-6 font-mono text-xs text-zinc-600 transition-colors group-hover:text-white">
                  // 0{index + 1}
                </div>
                <div className="mb-4 text-zinc-400 transition-colors group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors group-hover:text-white">
                  Learn more <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="bg-zinc-950 py-24 sm:py-32 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: copy */}
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
                Our approach
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                From discovery to production — without the fluff
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                Most AI projects fail not because the technology isn&apos;t
                ready, but because the process is. We follow a disciplined
                three-phase model that keeps every engagement grounded, fast,
                and focused on value.
              </p>
              <Link
                href="/v2/about"
                className="mt-8 inline-flex items-center font-mono text-xs uppercase tracking-widest text-white hover:text-zinc-400 transition-colors"
              >
                About our team →
              </Link>
            </div>

            {/* Right: steps */}
            <div className="flex flex-col gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-6 border border-zinc-800 bg-black p-8"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-2xl font-bold text-zinc-700 select-none"
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3 className="mb-2 text-base font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
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
      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to explore AI for your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400">
            Book a no-obligation discovery call and find out where AI can create
            the most impact in your organisation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/v2/contact"
              className="inline-flex items-center justify-center border border-white bg-white px-8 py-4 font-mono text-sm uppercase tracking-widest text-black transition-all hover:bg-black hover:text-white"
            >
              Book a discovery call
            </Link>
            <Link
              href="/v2/services"
              className="inline-flex items-center justify-center border border-zinc-700 bg-transparent px-8 py-4 font-mono text-sm uppercase tracking-widest text-zinc-300 transition-all hover:border-white hover:text-white"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
