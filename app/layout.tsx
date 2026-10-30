import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { AnalyticsPlaceholder } from "@/components/analytics-placeholder";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, siteUrl } from "@/lib/metadata";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata(
    "A/Prof Chamara Basnayake | Gastroenterologist Melbourne",
    "Academic gastroenterologist and endoscopist in East Melbourne. Open-access gastroscopy and colonoscopy, gastroenterology consultations, research and clinical leadership."
  )
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <AnalyticsPlaceholder />
        <StructuredData />
        <div className="page-frame">
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
