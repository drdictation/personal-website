import os

file_path = "app/globals.css"

with open(file_path, "r") as f:
    content = f.read()

append_css = """
/* Reveal/Accordion styles */
.expandable-card {
  position: relative;
}

.expandable-summary {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.expandable-summary.expanded {
  -webkit-line-clamp: unset;
}

.expand-toggle {
  background: none;
  border: none;
  padding: 0;
  color: var(--muted);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  transition: color 150ms ease;
  margin-top: 0.5rem;
}

.expand-toggle:hover {
  color: var(--text);
}

.faq-item {
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  margin-bottom: 1rem;
  background: var(--surface);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: box-shadow 0.2s ease;
}

.faq-item:hover {
  box-shadow: var(--shadow);
}

.faq-item summary {
  padding: 1.2rem;
  font-weight: 600;
  color: var(--text);
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-item summary::-webkit-details-marker,
.faq-item summary::marker {
  display: none;
}

.faq-item summary::after {
  content: "+";
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--muted);
  transition: transform 0.3s ease;
}

.faq-item[open] summary::after {
  transform: rotate(45deg);
}

.faq-item p,
.faq-item .faq-content {
  padding: 0 1.2rem 1.2rem 1.2rem;
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}
"""

# Only append if not already there
if ".expandable-card" not in content:
    with open(file_path, "a") as f:
        f.write(append_css)

print("CSS updated with progressive disclosure properties.")
