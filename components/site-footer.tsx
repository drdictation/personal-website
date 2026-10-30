import Link from "next/link";

import { navigation, siteConfig } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-title">{siteConfig.name}</p>
          <p className="footer-copy">{siteConfig.role}</p>
          <p className="footer-copy">{siteConfig.qualifications}</p>
          <p className="footer-copy">{siteConfig.location}</p>
          <p className="footer-copy">{siteConfig.contact.practice}</p>
          <p className="footer-copy"><a className="text-link" href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}>{siteConfig.contact.phone}</a></p>
        </div>
        <div className="footer-links" aria-label="Footer">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
