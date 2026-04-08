import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Ser Singular",
  description: "Artigos sobre desenvolvimento infantil, autismo, dificuldades de aprendizagem, linguagem e muito mais.",
};

export default function BlogPage() {
  const categories = ["Todos", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  return (
    <>
      <div
        className="pt-[70px] py-16 px-8 text-center"
        style={{ background: "linear-gradient(160deg, #0f2440 0%, #143a62 100%)" }}
      >
        <h1 className="text-3xl lg:text-4xl text-white font-bold mb-3">Blog</h1>
        <p className="text-white/80 text-base max-w-[480px] mx-auto">
          Conteúdo especializado em desenvolvimento infantil para pais e cuidadores.
        </p>
      </div>

      <section className="py-12 px-8 bg-[#f8f9fb]">
        <div className="max-w-[1100px] mx-auto">
          {/* Category filters */}
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-medium border border-[#e2e8f0] bg-white text-[#5a6a7e] cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="no-underline bg-white rounded-[20px] overflow-hidden border border-[#e2e8f0] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(20,58,98,0.1)] group"
              >
                {/* Thumb */}
                {post.image ? (
                  <div className="h-[200px] relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div
                    className="h-[160px] flex items-center justify-center text-5xl"
                    style={{ background: post.categoryBg }}
                  >
                    {post.emoji}
                  </div>
                )}
                {/* Body */}
                <div className="p-6">
                  <span
                    className="inline-block text-[0.72rem] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3"
                    style={{ color: post.categoryColor, background: post.categoryBg }}
                  >
                    {post.category}
                  </span>
                  <h3 className="text-base text-[#143a62] font-bold leading-snug mb-2 group-hover:text-[#1f8c7b] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[0.84rem] text-[#5a6a7e] leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex gap-4 text-[0.78rem] text-[#5a6a7e]">
                    <span>{post.date}</span>
                    <span>{post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
