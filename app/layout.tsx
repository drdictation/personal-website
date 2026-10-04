import type { Metadata } from "next";

import { AnalyticsPlaceholder } from "@/components/analytics-placeholder";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, siteUrl } from "@/lib/metadata";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata(
    "A/Prof Chamara Basnayake | Gastroenterologist Melbourne",
    "Specialist gastroenterologist in East Melbourne. Expert care in endoscopy, colonoscopy, bowel cancer screening, IBS, reflux, coeliac disease, IBD & motility disorders."
  )
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
