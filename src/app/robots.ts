import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/avaliacao-autismo",
      },
    ],
    sitemap: "https://sersingularmed.com.br/sitemap.xml",
  };
}
