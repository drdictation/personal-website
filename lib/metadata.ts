import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-content";

export const siteUrl = siteConfig.siteUrl;

export function buildMetadata(
  title: string,
  description: string,
  path = "/"
): Metadata {
  const resolvedTitle =
    path === "/" ? `${title} | ${siteConfig.name}` : `${title} | ${siteConfig.shortName}`;

  return {
    title: resolvedTitle,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      siteName: siteConfig.name,
      images: [
        {
          url: "/images/og-card.svg",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} website preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-card.svg"]
    },
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png"
    }
  };
}
