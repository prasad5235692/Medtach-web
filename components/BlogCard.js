import Link from "next/link";
export default function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
    >
      <div className={`h-40 bg-linear-to-br ${post.coverColor} flex items-end p-5`}>
        <span className="rounded-full bg-white/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {post.category}
        </span>
      </div>

    
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-purple-700 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-3 text-xs text-gray-400 border-t border-gray-100">
          <span>{post.author}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
