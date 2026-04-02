import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getAllSlugs } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Ser Singular`,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-[#143a62] mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-bold text-[#143a62] mt-6 mb-2">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold text-[#143a62] mt-4 mb-1">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- [ ]") || line.startsWith("- [x]")) {
      elements.push(
        <li key={i} className="flex gap-2 items-start text-[#5a6a7e] text-sm leading-relaxed mb-1">
          <span className="mt-0.5 w-4 h-4 border border-[#e2e8f0] rounded flex-shrink-0" />
          {line.slice(6)}
        </li>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="flex gap-2 items-start text-[#5a6a7e] text-sm leading-relaxed mb-1">
          <span className="text-[#1f8c7b] font-bold flex-shrink-0">•</span>
          {line.slice(2)}
        </li>
      );
    } else if (line.match(/^\d+\./)) {
      elements.push(
        <li key={i} className="text-[#5a6a7e] text-sm leading-relaxed mb-1 ml-4">
          {line}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
    } else {
      elements.push(
        <p key={i} className="text-[#5a6a7e] leading-relaxed mb-3">
          {line}
        </p>
      );
    }
    i++;
  }
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Header */}
      <div
        className="pt-[70px] py-16 px-8"
        style={{ background: "linear-gradient(135deg, #143a62, #1f8c7b)" }}
      >
        <div className="max-w-[760px] mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/70 text-sm no-underline hover:text-white mb-6 transition-colors"
          >
            ← Voltar ao Blog
          </Link>
          <span
            className="inline-block text-[0.72rem] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-4"
            style={{ color: post.categoryColor, background: post.categoryBg }}
          >
            {post.category}
          </span>
          <h1 className="text-2xl lg:text-4xl text-white font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex gap-4 text-white/60 text-sm">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 px-8 bg-[#f8f9fb]">
        <div className="max-w-[760px] mx-auto">
          <div
            className="text-6xl mb-8 p-8 rounded-[20px] flex items-center justify-center"
            style={{ background: post.categoryBg }}
          >
            {post.emoji}
          </div>

          <article className="bg-white rounded-[24px] p-8 lg:p-10 border border-[#e2e8f0] mb-10">
            <p className="text-lg text-[#5a6a7e] leading-relaxed mb-6 font-light italic border-l-4 border-[#1f8c7b] pl-4">
              {post.excerpt}
            </p>
            <div>{renderContent(post.content)}</div>
          </article>

          {/* CTA */}
          <div
            className="rounded-[20px] p-8 text-center mb-10"
            style={{ background: "linear-gradient(135deg, #143a62, #1f8c7b)" }}
          >
            <h3 className="text-xl text-white font-bold mb-2">Precisa de apoio profissional?</h3>
            <p className="text-white/75 text-sm mb-6">
              Nossa equipe está pronta para avaliar seu filho e orientar você.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[12px] font-semibold text-[#143a62] bg-white no-underline text-sm hover:bg-[#f8f9fb] transition-colors"
            >
              Agendar avaliação
            </Link>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[#143a62] mb-4">Leia também</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="no-underline bg-white rounded-[16px] p-4 border border-[#e2e8f0] hover:shadow-md transition-shadow"
                  >
                    <div className="text-2xl mb-2">{r.emoji}</div>
                    <p className="text-sm text-[#143a62] font-semibold leading-snug">{r.title}</p>
                    <p className="text-[0.78rem] text-[#5a6a7e] mt-1">{r.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
