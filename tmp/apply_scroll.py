import os
import re

css_path = "app/globals.css"

with open(css_path, "r") as f:
    css = f.read()

# Replace static animation
css = re.sub(
    r'\.hero,\s*\.page-hero,\s*\.section,\s*\.location-preview\s*\{\s*animation:\s*reveal\s*720ms\s*ease\s*both;\s*\}', 
    '', 
    css
)

css = re.sub(
    r'@keyframes reveal\s*\{[\s\S]*?\}[\s\n]*\}',
    '',
    css
)

scroll_css = """
/* Scroll Reveal */
.scroll-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 700ms ease-out, transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: opacity, transform;
}

.scroll-reveal.active {
  opacity: 1;
  transform: translateY(0);
}
"""

if ".scroll-reveal" not in css:
    css += scroll_css

with open(css_path, "w") as f:
    f.write(css)

def add_scroll_reveal(filepath):
    with open(filepath, "r") as f:
        content = f.read()
    
    # Check if ScrollReveal is already imported
    if "ScrollReveal" in content:
        return

    # Add import statement after the last import
    imports_end = content.rfind('import ')
    if imports_end != -1:
        end_of_line = content.find('\\n', imports_end)
        content = content[:end_of_line+1] + 'import { ScrollReveal } from "@/components/scroll-reveal";\\n' + content[end_of_line+1:]
    else:
        content = 'import { ScrollReveal } from "@/components/scroll-reveal";\\n' + content

    # Replace <section className="shell section"> with <ScrollReveal as="section" className="shell section">
    content = content.replace('<section className="shell section', '<ScrollReveal as="section" className="shell section')
    content = content.replace('      </section>', '      </ScrollReveal>')
    
    # Also for <section className="hero shell">
    content = content.replace('<section className="hero shell">', '<ScrollReveal as="section" className="hero shell">')

    # And for PageHero if they are wrapped in section.
    
    with open(filepath, "w") as f:
        f.write(content)

pages = [
    "app/page.tsx",
    "app/about/page.tsx",
    "app/conditions/page.tsx",
    "app/procedures/page.tsx"
]

for page in pages:
    if os.path.exists(page):
        add_scroll_reveal(page)

print("Applied scroll reveals successfully.")
