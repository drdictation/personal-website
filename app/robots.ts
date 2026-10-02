import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: [
          "GPTBot",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "Applebot-Extended"
        ],
        allow: "/"
      }
    ],
    sitemap: new URL("/sitemap.xml", siteUrl).toString()
  };
}
