import AnimateOnScroll from "@/components/AnimateOnScroll";
import { blogPosts, getBlogBySlug } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PenLine, Calendar, Clock } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} — Medtech Career Blog` };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero — keeps the post’s gradient cover colour */}
      <section className={`relative overflow-hidden bg-linear-to-br ${post.coverColor} pb-16 pt-36 text-white`}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative mx-auto max-w-3xl px-6">
          <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{post.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><PenLine size={13} /> {post.author} — {post.authorRole}</span>
            <span className="flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateOnScroll animation="fade-up">
            <div>
              {post.content.map((para, i) => (
                <p key={i} className="mb-5 text-base leading-relaxed text-gray-600">
                  {para}
                </p>
              ))}
            </div>

            <blockquote className="my-8 rounded-xl border-l-4 border-purple-500 bg-purple-50 px-6 py-5">
              <p className="text-base italic text-gray-700">&ldquo;{post.excerpt}&rdquo;</p>
            </blockquote>

            <div className="mt-10 border-t border-gray-100 pt-8">
              <Link
                href="/blog"
                className="text-sm font-medium text-purple-700 transition hover:text-purple-800"
              >
                ← Back to all articles
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-[#f8fafc] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-bold text-gray-900">More Articles</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {blogPosts
              .filter((b) => b.slug !== post.slug)
              .map((b) => (
                <Link
                  key={b.slug}
                  href={`/blog/${b.slug}`}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm transition hover:border-purple-300 hover:text-purple-700"
                >
                  {b.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
