import Link from "next/link";
import type { Metadata } from "next";
import { getAllPostsMeta, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, perspectives, and practical guidance on AI strategy, automation, and building production AI systems — from the ValueTrustAI team.",
  openGraph: {
    title: "Blog | ValueTrustAI",
    description: "Insights, perspectives, and practical guidance on AI strategy, automation, and building production AI systems — from the ValueTrustAI team.",
    url: "https://valuetrustai.com/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      {/* ── Page Header ── */}
      <section className="border-b border-gray-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Thinking &amp; perspectives
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Blog
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
            Practical insights on AI strategy, automation, and building systems
            that work in the real world.
          </p>
        </div>
      </section>

      {/* ── Post list ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-sm text-gray-500">No posts yet — check back soon.</p>
          ) : (
            <ul className="flex flex-col divide-y divide-gray-100">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-2 py-8 sm:flex-row sm:items-start sm:gap-12"
                  >
                    {/* Date */}
                    <time
                      dateTime={post.date}
                      className="shrink-0 text-sm tabular-nums text-gray-400 sm:w-36 sm:pt-0.5"
                    >
                      {formatDate(post.date)}
                    </time>

                    {/* Content */}
                    <div className="flex flex-col gap-1.5">
                      <h2 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {post.description}
                      </p>
                      <span className="mt-1 text-xs font-semibold text-indigo-600 group-hover:text-indigo-800 transition-colors">
                        Read more →
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
      <section className="border-t border-gray-100 bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600">
            Want to talk through any of these ideas?{" "}
            <Link
              href="/contact"
              className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Get in touch →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
