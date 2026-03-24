import re

with open('app/globals.css', 'r') as f:
    content = f.read()

# 1. Root variables
root_replacement = """@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

:root {
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-serif: "Playfair Display", "Times New Roman", serif;
  --bg: #FAFAFA;
  --surface: #FFFFFF;
  --surface-strong: #F4F4F5;
  --surface-alt: #F8F9FA;
  --text: #111827;
  --muted: #4B5563;
  --line: #E5E7EB;
  --accent: #0F2236;
  --accent-soft: #E0E7FF;
  --stone: #E5E7EB;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  --shadow-hover: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --radius-lg: 12px;
  --radius-md: 8px;
  --radius-sm: 4px;
  --shell: min(1160px, calc(100vw - 2rem));
}"""
content = re.sub(r':root \{[^}]+\}', root_replacement, content, count=1)

# 2. Body background
body_replacement = """body {
  margin: 0;
  min-width: 320px;
  font-family: var(--font-sans), sans-serif;
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}"""
content = re.sub(r'body \{[^}]+\}', body_replacement, content, count=1)
content = re.sub(r'body::before \{[^}]+\}', "", content, count=1)

# 3. Header & Nav Shell
header_replacement = """.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  padding: 1rem 0;
  background: rgba(250, 250, 250, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}"""
content = re.sub(r'\.site-header \{[^}]+\}', header_replacement, content, count=1)

nav_shell_replacement = """.nav-shell {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem 0;
}"""
content = re.sub(r'\.nav-shell \{[^}]+\}', nav_shell_replacement, content, count=1)

# 4. Nav Links
nav_replacement = """.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
}"""
content = re.sub(r'\.nav \{[^}]+\}', nav_replacement, content, count=1)

nav_link_replacement = """.nav-link {
  padding: 0.4rem 0;
  color: var(--muted);
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 180ms ease;
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--text);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 300ms ease;
}"""
content = re.sub(r'\.nav-link \{[^}]+\}', nav_link_replacement, content, count=1)

nav_link_hover_replacement = """.nav-link:hover,
.nav-link:focus-visible,
.nav-link.active {
  color: var(--text);
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
  transform-origin: left;
}"""
content = re.sub(r'\.nav-link:hover,[\s\S]*?\.nav-link\.active \{[^}]+\}', nav_link_hover_replacement, content, count=1)

# 5. Headings
h123_replacement = """h1,
h2,
h3 {
  margin: 0;
  text-wrap: balance;
  color: var(--text);
}"""
content = re.sub(r'h1,\s*h2,\s*h3 \{[^}]+\}', h123_replacement, content, count=1)

h1_replacement = """h1 {
  font-family: var(--font-serif), serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.1;
  font-weight: 500;
  max-width: 14ch;
  letter-spacing: -0.02em;
}"""
content = re.sub(r'h1 \{[^}]+\}', h1_replacement, content, count=1)

h2_replacement = """h2 {
  font-family: var(--font-serif), serif;
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: -0.01em;
}"""
content = re.sub(r'h2 \{[^}]+\}', h2_replacement, content, count=1)

h3_replacement = """h3 {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}"""
content = re.sub(r'h3 \{[^}]+\}', h3_replacement, content, count=1)

# 6. Button
button_replacement = """.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.8rem 1.8rem;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 200ms ease;
  cursor: pointer;
}"""
content = re.sub(r'\.button \{[^}]+\}', button_replacement, content, count=1)

button_hover_replacement = """.button:hover,
.button:focus-visible {
  transform: translateY(-2px);
}
.button:active {
  transform: translateY(0);
}"""
content = re.sub(r'\.button:hover,\s*\.button:focus-visible \{[^}]+\}', button_hover_replacement, content, count=1)

btn_primary_replacement = """.button-primary {
  background: var(--text);
  color: white;
  box-shadow: var(--shadow);
}
.button-primary:hover {
  box-shadow: var(--shadow-hover);
  background: #1F2937;
}"""
content = re.sub(r'\.button-primary \{[^}]+\}', btn_primary_replacement, content, count=1)

btn_secondary_replacement = """.button-secondary {
  border-color: var(--line);
  background: var(--surface);
  color: var(--text);
}
.button-secondary:hover {
  border-color: #D1D5DB;
  background: var(--surface-alt);
}"""
content = re.sub(r'\.button-secondary \{[^}]+\}', btn_secondary_replacement, content, count=1)

# 7. Cards
cards_replacement = """.credential-card,
.info-card,
.feature-card,
.editorial-card,
.metric-card,
.note-panel,
.location-card {
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--surface);
  box-shadow: var(--shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.info-card:hover,
.feature-card:hover,
.location-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}"""
content = re.sub(r'\.credential-card,[\s\S]*?\.location-card \{[^}]+\}', cards_replacement, content, count=1)

# 8. Portrait frame
portrait_replacement = """.portrait-frame,
.location-image-wrap {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: var(--surface-alt);
  box-shadow: var(--shadow);
}"""
content = re.sub(r'\.portrait-frame,\s*\.location-image-wrap \{[^}]+\}', portrait_replacement, content, count=1)

# 9. Pills
pill_replacement = """.pill {
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--text);
  font-weight: 500;
  font-size: 0.95rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}"""
content = re.sub(r'\.pill \{[^}]+\}', pill_replacement, content, count=1)

# 10. Leadership and CTA Band
panel_replacement = """.leadership-panel,
.cta-band {
  padding: 3rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--text);
  box-shadow: var(--shadow);
}"""
content = re.sub(r'\.leadership-panel,\s*\.cta-band \{[^}]+\}', panel_replacement, content, count=1)

panel_color_replacement = """.leadership-panel .eyebrow,
.leadership-panel h2,
.leadership-panel p,
.cta-band .eyebrow,
.cta-band h2,
.cta-band p,
.cta-band a {
  color: #F9FAFB;
}

.leadership-panel .eyebrow,
.cta-band .eyebrow {
  color: #9CA3AF;
}"""
content = re.sub(r'\.leadership-panel \.eyebrow,[\s\S]*?\.cta-band a \{[^}]+\}', panel_color_replacement, content, count=1)

# Fix metric cards within leadership panel
metric_card_replacement = """.metric-card {
  padding: 1.15rem;
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  gap: 0.8rem;
  border: none;
  box-shadow: none;
}
.metric-card:hover {
  transform: none;
}"""
content = re.sub(r'\.metric-card \{[^}]+\}', metric_card_replacement, content, count=1)

# 11. Footer
footer_replacement = """.footer-grid {
  display: grid;
  gap: 1.5rem;
  padding: 2.5rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--surface-strong);
}"""
content = re.sub(r'\.footer-grid \{[^}]+\}', footer_replacement, content, count=1)

with open('app/globals.css', 'w') as f:
    f.write(content)

print("CSS rewritten successfully.")
