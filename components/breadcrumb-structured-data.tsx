import { siteConfig } from "@/lib/site-content";

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbStructuredDataProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const baseUrl = siteConfig.siteUrl.replace(/\/+$/, "");

  const fullItems = [
    { name: "Home", item: baseUrl },
    ...items.map((i) => ({
      name: i.name,
      item: i.item.startsWith("http") ? i.item : `${baseUrl}${i.item.startsWith("/") ? "" : "/"}${i.item}`
    }))
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
