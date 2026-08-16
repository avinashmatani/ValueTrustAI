import Link from "next/link";
import type { Metadata } from "next";
import { getAllPostsMeta, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, perspectives, and practical guidance on AI strategy, automation, and building production AI systems. Written by the ValueTrustAI team.",
};

export default function V2BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-black py-16 sm:py-24 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
            Thinking &amp; perspectives
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Blog.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
            Practical insights on AI strategy, automation, and building systems
            that work in the real world.
          </p>
        </div>
      </section>

      {/* ── Post list ── */}
      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="font-mono text-sm text-zinc-500">// No data entries found.</p>
          ) : (
            <ul className="flex flex-col border border-zinc-800 divide-y divide-zinc-800">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/v2/blog/${post.slug}`}
                    className="group flex flex-col gap-4 p-8 sm:flex-row sm:items-start sm:gap-12 transition-colors hover:bg-zinc-900/50"
                  >
                    {/* Date */}
                    <time
                      dateTime={post.date}
                      className="shrink-0 font-mono text-sm text-zinc-500 sm:w-36"
                    >
                      {formatDate(post.date)}
                    </time>

                    {/* Content */}
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl font-semibold text-white group-hover:text-zinc-300 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm leading-relaxed text-zinc-400">
                        {post.description}
                      </p>
                      <span className="mt-2 font-mono text-xs uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                        Read entry <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-zinc-800 bg-zinc-950 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-sm text-zinc-400">
            Want to discuss these concepts?{" "}
            <Link
              href="/contact"
              className="text-white hover:text-zinc-400 transition-colors ml-2 underline underline-offset-4 decoration-zinc-800 hover:decoration-zinc-400"
            >
              Initialize communication →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
