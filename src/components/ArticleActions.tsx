"use client";

import { useState, useEffect } from "react";

interface ArticleActionsProps {
  slug: string;
  title: string;
}

export default function ArticleActions({ slug, title }: ArticleActionsProps) {
  const storageKey = `like_${slug}`;
  const countKey = `like_count_${slug}`;

  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setLiked(localStorage.getItem(storageKey) === "1");
    setCount(parseInt(localStorage.getItem(countKey) || "0", 10));
  }, [storageKey, countKey]);

  function handleLike() {
    const newLiked = !liked;
    const newCount = newLiked ? count + 1 : Math.max(0, count - 1);
    setLiked(newLiked);
    setCount(newCount);
    localStorage.setItem(storageKey, newLiked ? "1" : "0");
    localStorage.setItem(countKey, String(newCount));
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);
  }

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);

  function handleInstagram() {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const shareButtons = [
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "#25D366",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "#1877F2",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "#0A66C2",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mb-8">
      {/* Separador */}
      <div className="border-t border-[#e2e8f0] mb-6" />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* Curtir */}
        <button
          onClick={handleLike}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-[14px] border transition-all duration-200 select-none"
          style={{
            background: liked ? "rgba(31,140,123,0.08)" : "white",
            borderColor: liked ? "#1f8c7b" : "#e2e8f0",
            transform: animating ? "scale(1.12)" : "scale(1)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 transition-all duration-200"
            style={{
              fill: liked ? "#1f8c7b" : "none",
              stroke: liked ? "#1f8c7b" : "#5a6a7e",
              strokeWidth: 1.8,
            }}
          >
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="text-sm font-medium"
            style={{ color: liked ? "#1f8c7b" : "#5a6a7e" }}
          >
            {liked ? "Curtido" : "Curtir"}
          </span>
          {count > 0 && (
            <span
              className="text-xs px-1.5 py-0.5 rounded-full font-semibold"
              style={{
                background: liked ? "rgba(31,140,123,0.12)" : "#f1f5f9",
                color: liked ? "#1f8c7b" : "#5a6a7e",
              }}
            >
              {count}
            </span>
          )}
        </button>

        {/* Compartilhar */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-sm text-[#5a6a7e] font-medium">Compartilhar:</span>

          {shareButtons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              title={btn.label}
              className="flex items-center justify-center w-9 h-9 rounded-[10px] transition-all duration-200 hover:-translate-y-0.5"
              style={{
                color: btn.color,
                background: `${btn.color}12`,
                border: `1px solid ${btn.color}30`,
                backdropFilter: "blur(8px)",
              }}
            >
              {btn.icon}
            </a>
          ))}

          {/* Instagram — copia link */}
          <div className="relative">
            <button
              onClick={handleInstagram}
              title="Copiar link (Instagram)"
              className="flex items-center justify-center w-9 h-9 rounded-[10px] transition-all duration-200 hover:-translate-y-0.5"
              style={{
                color: "#E1306C",
                background: "#E1306C12",
                border: "1px solid #E1306C30",
                backdropFilter: "blur(8px)",
              }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </button>
            {copied && (
              <span
                className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-[6px] whitespace-nowrap text-white font-medium shadow-md"
                style={{ background: "#143a62" }}
              >
                Link copiado!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
