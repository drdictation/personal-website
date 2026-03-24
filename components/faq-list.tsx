type FaqItem = {
  question: string;
  answer: string;
};

import { AccordionItem } from "./accordion";

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <AccordionItem key={item.question} title={item.question}>
          <p>{item.answer}</p>
        </AccordionItem>
      ))}
    </div>
  );
}
