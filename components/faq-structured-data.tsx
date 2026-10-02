import type { FaqItem } from "@/components/faq-list";

interface FaqStructuredDataProps {
  faqs: readonly FaqItem[] | FaqItem[];
}

export function FaqStructuredData({ faqs }: FaqStructuredDataProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
