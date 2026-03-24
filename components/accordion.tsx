import { ReactNode } from "react";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  return (
    <details className="faq-item" open={defaultOpen}>
      <summary>{title}</summary>
      <div className="faq-content">
        {children}
      </div>
    </details>
  );
}
