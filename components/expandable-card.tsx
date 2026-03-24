"use client";

import { useState } from "react";

interface ExpandableCardProps {
  title: string;
  description: string;
  className?: string;
}

export function ExpandableCard({ title, description, className = "info-card" }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className={`${className} expandable-card`}>
      <h3>{title}</h3>
      <p className={`expandable-summary ${isExpanded ? "expanded" : ""}`}>
        {description}
      </p>
      <button 
        className="expand-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        {isExpanded ? "Read less" : "Read more"}
        <span style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', display: 'inline-block', transition: 'transform 200ms ease' }}>
          ▼
        </span>
      </button>
    </article>
  );
}
