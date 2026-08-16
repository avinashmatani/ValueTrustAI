import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From AI strategy and custom model development to workflow automation and team upskilling — ValueTrustAI delivers end-to-end AI consulting for businesses ready to move.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "ai-strategy",
    label: "01",
    title: "AI Strategy & Roadmaps",
    tagline: "Clarity before code.",
    description:
      "Most organisations know they need AI. Few know where to start, what to prioritise, or how to avoid expensive mistakes. We cut through the noise and give you a structured, actionable plan.",
    bullets: [
      "AI readiness assessment — people, data, infrastructure, and culture",
      "Opportunity mapping: identifying high-ROI use cases specific to your industry",
      "Build-vs-buy analysis and technology selection (LLM providers, platforms, tools)",
      "12–18 month AI roadmap with phased delivery milestones and success metrics",
    ],
    whoFor:
      "Executives, product leaders, and operations teams who need a credible AI plan they can present to the board — not just a vendor pitch. Ideal for organisations at the beginning of their AI journey or those who've stalled after an initial experiment.",
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
  },
  {
    id: "custom-ai",
    label: "02",
    title: "Custom AI Solutions",
    tagline: "Purpose-built, not off-the-shelf.",
    description:
      "Generic AI tools deliver generic results. We engineer custom AI systems — from retrieval-augmented generation pipelines to domain-specific agents — designed around your data, your workflows, and your users.",
    bullets: [
      "LLM application development: chatbots, co-pilots, document intelligence, and knowledge bases",
      "Retrieval-Augmented Generation (RAG) systems grounded in your proprietary content",
      "AI agent development: multi-step reasoning, tool use, and autonomous task execution",
      "Third-party integrations with your CRM, ERP, data warehouse, or internal APIs",
    ],
    whoFor:
      "Technology and product teams that have identified a specific AI use case and need expert engineering to bring it to life. Also suited to businesses whose off-the-shelf AI tools aren't delivering — and who want something built specifically for their context.",
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
  },
  {
    id: "automation",
    label: "03",
    title: "Automation & Workflow AI",
    tagline: "Less manual work. More meaningful work.",
    description:
      "Repetitive, high-volume tasks are where AI pays back fastest. We design and deploy intelligent automation pipelines that connect your tools, eliminate bottlenecks, and free your team to focus on higher-value work.",
    bullets: [
      "End-to-end workflow analysis: identifying automation candidates and estimating time savings",
      "Intelligent document processing — extraction, classification, and routing at scale",
      "AI-assisted decision workflows with human-in-the-loop controls where needed",
      "Integration with existing tooling: Slack, Teams, Salesforce, Notion, Zapier, and custom systems",
    ],
    whoFor:
      "Operations, finance, legal, HR, and customer service teams dealing with high volumes of manual, rule-based tasks. Particularly valuable for mid-market companies that have outgrown spreadsheets but haven't yet invested in enterprise automation.",
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
  },
  {
    id: "training",
    label: "04",
    title: "Training, Workshops & Upskilling",
    tagline: "AI capability that stays with your team.",
    description:
      "Technology alone doesn't transform organisations — people do. Our training programmes are practical, role-specific, and designed to build lasting AI capability inside your business, not dependency on us.",
    bullets: [
      "AI literacy workshops for non-technical teams: what AI is, what it isn't, and how to use it responsibly",
      "Hands-on prompt engineering and LLM tool training (ChatGPT, Claude, Copilot, and custom tools)",
      "Leadership briefings: AI risk, governance, and competitive positioning for executives",
      "Custom internal enablement programmes for ongoing upskilling as tools evolve",
    ],
    whoFor:
      "Organisations rolling out AI tools internally and needing their teams to use them effectively and safely. Also suited to leadership teams that want a clear, jargon-free picture of the AI landscape to inform strategic decisions.",
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
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function V2ServicesPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-black py-16 sm:py-24 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
            What we do
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our services.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
            We work with organisations at every stage of their AI journey —
            from first strategy session through to production systems running in
            the real world. Every engagement is scoped around your goals, your
            data, and your team.
          </p>
        </div>
      </section>

      {/* ── Service Sections ── */}
      <section className="bg-black py-16 sm:py-24 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col divide-y divide-zinc-800 border-t border-zinc-800">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 gap-10 py-16 lg:grid-cols-12 lg:gap-16 ${
                  index === 0 ? "pt-16" : ""
                }`}
              >
                {/* Left: number + title */}
                <div className="lg:col-span-4">
                  <div className="sticky top-24">
                    <div className="mb-4 text-zinc-400">
                      {service.icon}
                    </div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
                      // MODULE_{service.label}
                    </p>
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 font-mono text-sm text-zinc-400 uppercase tracking-widest">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                {/* Right: content */}
                <div className="lg:col-span-8">
                  <p className="text-base leading-relaxed text-zinc-300">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-8 space-y-4">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-4">
                        <span className="mt-1 flex h-2 w-2 shrink-0 items-center justify-center rounded-sm bg-white">
                        </span>
                        <span className="text-sm leading-relaxed text-zinc-400">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Who this is for */}
                  <div className="mt-12 border border-zinc-800 bg-zinc-950 p-8">
                    <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
                      Deployment Profile
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {service.whoFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement Note ── */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px bg-zinc-800 sm:grid-cols-3 border border-zinc-800">
            {[
              {
                title: "Fixed-scope engagements",
                body: "Prefer a defined deliverable with a clear price? We offer fixed-scope strategy sprints and workshop packages.",
              },
              {
                title: "Ongoing retainers",
                body: "Need a senior AI partner embedded in your team on an ongoing basis? We offer monthly retainer arrangements.",
              },
              {
                title: "Project delivery",
                body: "Have a specific build in mind? We scope, build, and deliver custom AI projects with a clear timeline and handover.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-black p-8">
                <h3 className="mb-3 font-mono text-sm uppercase tracking-widest text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.body}
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
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400">
            Book a free 30-minute discovery call. We&apos;ll listen to your
            challenges, share where we see the most opportunity, and give you
            an honest view of what AI can and can&apos;t do for your business
            right now.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/v2/contact"
              className="inline-flex items-center justify-center border border-white bg-white px-8 py-4 font-mono text-sm uppercase tracking-widest text-black transition-all hover:bg-black hover:text-white"
            >
              Book a discovery call
            </Link>
            <Link
              href="/v2/about"
              className="inline-flex items-center justify-center border border-zinc-700 bg-transparent px-8 py-4 font-mono text-sm uppercase tracking-widest text-zinc-300 transition-all hover:border-white hover:text-white"
            >
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
