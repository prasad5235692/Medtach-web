import AnimateOnScroll from "@/components/AnimateOnScroll";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog — Medtech Career",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf5ff] pb-16 pt-36">
        {/* Soft diagonal lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #7E22CE 0, #7E22CE 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-down">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">Blog</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Insights & Guides</h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
              Career tips, exam strategies, and industry insights from our team of experts.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#f8fafc] py-16">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <AnimateOnScroll key={post.slug} animation="fade-up" delay={i * 100}>
                <BlogCard post={post} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
        