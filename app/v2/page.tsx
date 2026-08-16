import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ValueTrustAI | Operating System for AI",
  description: "Deploy production-grade AI systems at scale.",
};

export default function V2HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-black py-24 sm:py-32 lg:py-40">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 inline-flex items-center rounded-sm border border-zinc-800 bg-zinc-900/50 px-3 py-1 font-mono text-xs uppercase tracking-widest text-zinc-400">
              <span className="mr-2 flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-zinc-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
              System Online
            </div>
            
            <h1 className="max-w-4xl text-5xl font-bold tracking-tighter text-white sm:text-6xl lg:text-7xl">
              Foundational AI for the Modern Enterprise.
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg text-zinc-400">
              ValueTrustAI provides the architecture, engineering, and strategy required to deploy intelligent systems that operate securely at scale. We build the connective tissue between your data and decisive action.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/v2"
                className="group relative flex items-center justify-center overflow-hidden border border-white bg-white px-8 py-3 font-mono text-sm uppercase tracking-widest text-black transition-all hover:bg-black hover:text-white"
              >
                Request Access
              </Link>
              <Link
                href="/v2"
                className="group relative flex items-center justify-center border border-zinc-700 bg-transparent px-8 py-3 font-mono text-sm uppercase tracking-widest text-zinc-300 transition-all hover:border-white hover:text-white"
              >
                View Architecture
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities Grid ── */}
      <section className="border-t border-zinc-800 bg-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">Core Capabilities</h2>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-white">Engineered for reality, not research.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-px bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: "01",
                title: "Strategy & Topology",
                desc: "Mapping your organizational data to high-leverage AI applications. We define the blueprint for intelligent transformation.",
              },
              {
                id: "02",
                title: "Custom LLM Engineering",
                desc: "Deploying secure, fine-tuned large language models and RAG pipelines that operate exclusively on your proprietary data.",
              },
              {
                id: "03",
                title: "Autonomous Agents",
                desc: "Building multi-step reasoning engines that interact with your internal APIs to automate complex, high-value workflows.",
              },
              {
                id: "04",
                title: "Security & Governance",
                desc: "Implementing rigorous access controls, audit trails, and guardrails to ensure AI systems act predictably and safely.",
              },
              {
                id: "05",
                title: "Data Pipelines",
                desc: "Engineering high-throughput, low-latency data infrastructure required to feed context to real-time AI models.",
              },
              {
                id: "06",
                title: "Continuous Operations",
                desc: "Providing the monitoring, evaluation, and iteration required to maintain model accuracy as reality changes.",
              },
            ].map((feature) => (
              <div key={feature.id} className="group relative bg-black p-8 transition-colors hover:bg-zinc-900/50">
                <div className="mb-6 font-mono text-xs text-zinc-600 group-hover:text-white transition-colors">
                  // CAPABILITY_{feature.id}
                </div>
                <h3 className="mb-3 text-xl font-medium text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{feature.desc}</p>
                <div className="mt-8 flex items-center font-mono text-xs uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                  Explore Module <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Banner ── */}
      <section className="border-t border-zinc-800 bg-black py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border border-zinc-800 bg-zinc-950 p-8 sm:p-12 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to deploy?
              </h2>
              <p className="mt-4 text-lg text-zinc-400">
                Join the organizations building their future on our operational AI framework. 
                Secure, scalable, and built for complex realities.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 lg:ml-8 lg:shrink-0">
              <Link
                href="/v2"
                className="inline-flex items-center justify-center border border-white bg-white px-8 py-4 font-mono text-sm uppercase tracking-widest text-black transition-all hover:bg-black hover:text-white"
              >
                Initiate Deployment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
