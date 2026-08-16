import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSlugs, getPostBySlug, formatDate } from "@/lib/blog";

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | ValueTrustAI`,
      description: post.description,
      url: `https://valuetrustai.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function BlogPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      {/* ── Post header ── */}
      <section className="border-b border-gray-100 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-indigo-600 transition-colors"
          >
            ← Back to blog
          </Link>

          <h1 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
              ValueTrustAI
            </span>
            <time
              dateTime={post.date}
              className="text-sm text-gray-400 tabular-nums"
            >
              {formatDate(post.date)}
            </time>
          </div>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            {post.description}
          </p>
        </div>
      </section>

      {/* ── Post body ── */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-gray prose-lg max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900
              prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
              prose-blockquote:border-l-indigo-400 prose-blockquote:text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* ── Post footer ── */}
          <div className="mt-14 flex flex-col items-start gap-6 border-t border-gray-100 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/blog"
              className="text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors"
            >
              ← Back to all posts
            </Link>
            <Link
              href="/contact"
              className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              Talk to our team →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
