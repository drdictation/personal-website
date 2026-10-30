import type { MetadataRoute } from "next";

import { navigation } from "@/lib/site-content";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...navigation, { href: "/procedures/gastroscopy" }, { href: "/procedures/colonoscopy" }].map((item) => ({
    url: new URL(item.href, siteUrl).toString(),
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.7
  }));
}
