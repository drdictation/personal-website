"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

import { navigation, siteConfig } from "@/lib/site-content";

export function SiteHeader() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);

  const links = navigation.map((item) => {
    const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));

    return (
      <Link
        key={item.href}
        className={active ? "nav-link active" : "nav-link"}
        href={item.href}
        aria-current={pathname === item.href ? "page" : undefined}
        onClick={() => { if (menuRef.current) menuRef.current.open = false; }}
      >
        {item.label}
      </Link>
    );
  });

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
        <nav aria-label="Primary" className="nav desktop-nav">{links}</nav>
        <details
          className="mobile-menu"
          ref={menuRef}
          onKeyDown={(event) => {
            if (event.key === "Escape" && menuRef.current) {
              menuRef.current.open = false;
              menuRef.current.querySelector("summary")?.focus();
            }
          }}
        >
          <summary>Menu</summary>
          <nav aria-label="Primary mobile" className="nav">{links}</nav>
        </details>
      </div>
    </header>
  );
}
