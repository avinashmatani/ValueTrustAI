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

export default async function V2BlogPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      {/* ── Post header ── */}
      <section className="bg-black py-16 sm:py-24 border-b border-zinc-800">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/v2/blog"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
          >
            <span className="text-xl leading-none">←</span> Return to index
          </Link>

          <h1 className="text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-4 border-l-2 border-white pl-4">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
              AUTHOR_VALUETRUSTAI
            </span>
            <span className="text-zinc-600">/</span>
            <time
              dateTime={post.date}
              className="font-mono text-xs uppercase tracking-widest text-zinc-500"
            >
              {formatDate(post.date)}
            </time>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            {post.description}
          </p>
        </div>
      </section>

      {/* ── Post body ── */}
      <section className="bg-zinc-950 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-zinc-800 prose-h2:pb-2
              prose-p:text-zinc-300 prose-p:leading-relaxed
              prose-a:text-white prose-a:font-medium prose-a:underline prose-a:underline-offset-4 prose-a:decoration-zinc-700 hover:prose-a:decoration-white
              prose-strong:text-white
              prose-code:bg-zinc-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-sm prose-code:text-sm prose-code:font-mono prose-code:border prose-code:border-zinc-800
              prose-blockquote:border-l-2 prose-blockquote:border-zinc-700 prose-blockquote:bg-black prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:pl-6 prose-blockquote:text-zinc-400 prose-blockquote:font-mono prose-blockquote:text-sm"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* ── Post footer ── */}
          <div className="mt-20 flex flex-col items-start gap-8 border-t border-zinc-800 pt-12 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/v2/blog"
              className="font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
            >
              ← Terminate session
            </Link>
            <Link
              href="/v2/contact"
              className="inline-flex items-center justify-center border border-white bg-white px-8 py-3 font-mono text-sm uppercase tracking-widest text-black transition-all hover:bg-black hover:text-white"
            >
              Initialize Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
