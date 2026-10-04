import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-content";

export const siteUrl = siteConfig.siteUrl;

export function buildMetadata(
  title: string,
  description: string,
  path = "/",
  options?: { exactTitle?: boolean }
): Metadata {
  const resolvedTitle =
    options?.exactTitle || title.includes("Basnayake")
      ? title
      : `${title} | ${siteConfig.shortName}`;

  return {
    title: resolvedTitle,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url: path,
      type: "website",
      siteName: `${siteConfig.name} - Melbourne Gastroenterology`,
      locale: "en_AU",
      images: [
        {
          url: "/images/og-card.png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Consultant Gastroenterologist Melbourne`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: ["/images/og-card.png"]
    },
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png"
    }
  };
}
