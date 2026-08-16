import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "ValueTrustAI is an AI consulting firm built by practitioners — engineers, data scientists, and strategists who have delivered AI in production, not just on paper.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const values = [
  {
    title: "Pragmatism over hype",
    description:
      "We don't recommend AI for the sake of it. Every engagement starts with a hard question: is AI actually the right tool here? If it isn't, we'll tell you — and point you in a better direction.",
  },
  {
    title: "Measurable outcomes",
    description:
      "Strategy without measurement is guesswork. We define success metrics at the start of every project and tie our work to outcomes your business can see: time saved, accuracy improved, costs reduced.",
  },
  {
    title: "Security and trust by design",
    description:
      "AI systems handle sensitive data and make consequential decisions. We engineer with privacy, security, and governance as first-class requirements — not afterthoughts.",
  },
  {
    title: "Honest about limitations",
    description:
      "AI is powerful. It is also imperfect, unpredictable, and occasionally wrong. We give clients an accurate picture of what AI can and cannot do, so expectations are grounded in reality.",
  },
  {
    title: "Knowledge transfer, not dependency",
    description:
      "We succeed when your team can run what we've built. Every engagement includes documentation, handover, and the internal capability-building your people need to stay in control.",
  },
];

const approach = [
  {
    step: "01",
    title: "Discover",
    body: "We start every engagement with a structured discovery process. We interview stakeholders, audit your data, map your current workflows, and identify where AI can create genuine value — and where it can't. This phase typically runs one to two weeks and produces a clear brief.",
  },
  {
    step: "02",
    title: "Prototype",
    body: "We build a working proof-of-concept against a defined problem with defined success criteria. Fast feedback cycles mean we can test assumptions early, fail cheaply, and arrive at a validated approach before committing to full engineering. Most prototypes are delivered within four weeks.",
  },
  {
    step: "03",
    title: "Production",
    body: "We engineer the solution for reliability, scale, and security — with proper testing, monitoring, documentation, and handover built in from day one. We don't consider a project done until your team can operate it independently.",
  },
  {
    step: "04",
    title: "Measure & iterate",
    body: "Post-deployment, we establish performance baselines and review them with you. AI systems drift, data changes, and business needs evolve. We offer ongoing support and iteration to keep your AI performing as the world around it changes.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function V2AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-black py-16 sm:py-24 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
            Who we are
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About ValueTrustAI.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
            We are an AI consulting firm built by practitioners — engineers,
            data scientists, and strategists who have delivered AI in
            production, not just on paper.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-black py-16 sm:py-24 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
                Our mission
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Turning AI potential into business reality
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-5 text-base leading-relaxed text-zinc-400">
              <p>
                ValueTrustAI exists because the gap between AI&apos;s potential
                and its practical business impact is still enormous — and for
                most organisations, that gap is not technical. It is strategic,
                organisational, and human.
              </p>
              <p>
                We founded this company to bridge that gap: to give
                forward-thinking businesses the expertise, the engineering
                rigour, and the clear-headed guidance they need to move from AI
                curiosity to AI capability. We believe AI should be held to the
                same standard as any other business investment — measurable,
                trustworthy, and fit for purpose.
              </p>
              <p>
                That commitment to value, trust, and accountability is built
                into everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team / Story ── */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
            {/* Story text */}
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
                Our story
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Built by people who have done it
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-zinc-400">
                <p>
                  Our team comes from backgrounds in enterprise software,
                  applied machine learning, data engineering, and product
                  delivery. We have built AI systems for organisations across
                  financial services, healthcare, logistics, professional
                  services, and government — at scale, under real constraints,
                  with real accountability.
                </p>
                <p>
                  We started ValueTrustAI because we kept seeing the same
                  problems: AI projects that stalled after the proof-of-concept,
                  vendors selling capability they couldn&apos;t deliver, and
                  teams that invested in AI tools without the strategy or skills
                  to use them effectively.
                </p>
                <p>
                  Our model is different. We stay engaged through delivery. We
                  work transparently. We transfer knowledge. And we measure what
                  we build.
                </p>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
              {[
                { stat: "50+", label: "AI projects delivered" },
                { stat: "10+", label: "Years in data & AI" },
                { stat: "8", label: "Industries served" },
                { stat: "100%", label: "Production-focused" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col bg-black p-6"
                >
                  <span className="font-mono text-4xl font-bold text-white">
                    {item.stat}
                  </span>
                  <span className="mt-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="bg-black py-16 sm:py-24 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
              How we work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our approach
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Every ValueTrustAI engagement follows the same four-phase
              structure. It is disciplined enough to keep projects on track and
              flexible enough to adapt as we learn.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-zinc-800 sm:grid-cols-2 border border-zinc-800">
            {approach.map((phase) => (
              <div
                key={phase.step}
                className="flex gap-6 bg-black p-8"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-2xl font-bold text-zinc-700 select-none"
                >
                  {phase.step}
                </span>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {phase.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {phase.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
              What we stand for
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our values
            </h2>
          </div>

          <div className="flex flex-col border border-zinc-800 bg-black divide-y divide-zinc-800">
            {values.map((value) => (
              <div
                key={value.title}
                className="grid grid-cols-1 gap-3 p-8 sm:grid-cols-3 sm:gap-8"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 items-center justify-center rounded-sm bg-zinc-500">
                  </span>
                  <h3 className="text-sm font-semibold text-white">
                    {value.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400 sm:col-span-2">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Want to work with a team that delivers?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400">
            Start with a free 30-minute discovery call. No obligation,
            no sales pitch — just an honest conversation about where AI
            can move the needle for your business.
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
              View our services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
