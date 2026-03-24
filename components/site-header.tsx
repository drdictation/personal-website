"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation, siteConfig } from "@/lib/site-content";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            CB
          </span>
          <span>
            <strong>{siteConfig.name}</strong>
            <small>
              {siteConfig.role} | {siteConfig.qualifications}
            </small>
          </span>
        </Link>
        <nav aria-label="Primary" className="nav">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                className={active ? "nav-link active" : "nav-link"}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
