import AnimateOnScroll from "@/components/AnimateOnScroll";
import BlogCard from "@/components/BlogCard";
import SectionHeading from "@/components/SectionHeading";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { getLocale } from "@/lib/i18n/server";
import { localizeContent } from "@/lib/i18n/content";

export default async function BlogSection() {
  const locale = await getLocale();
  const blogPosts = getBlogPosts(locale);
  const content = localizeContent(
    {
      label: "From the Blog",
      title: "Insights, Guides & Career Tips",
      cta: "All Articles →",
    },
    locale,
  );
  const preview = blogPosts.slice(0, 3);
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #7E22CE 0, #7E22CE 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="page-container relative">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              label={content.label}
              title={content.title}
            />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <Link
              href="/blog"
              className="shrink-0 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm transition hover:border-purple-300 hover:text-purple-700"
            >
              {content.cta}
            </Link>
          </AnimateOnScroll>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((post, i) => (
            <AnimateOnScroll key={post.slug} animation="fade-up" delay={i * 100}>
              <BlogCard post={post} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

     