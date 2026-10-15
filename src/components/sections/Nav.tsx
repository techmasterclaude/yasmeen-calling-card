"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

export function Nav() {
  const pathname = usePathname();
  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-md"
      style={{
        borderColor: "color-mix(in srgb, var(--bark) 16%, transparent)",
        background: "color-mix(in srgb, var(--paper) 86%, transparent)",
      }}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="-ml-2 flex min-h-[44px] min-w-[44px] items-center gap-2.5 px-3 text-[15px] font-semibold">
          <svg width="24" height="24" viewBox="0 0 100 100" aria-hidden="true">
            {[0, 72, 144, 216, 288].map((d) => (
              <ellipse key={d} cx="50" cy="28" rx="14" ry="22" fill="var(--petal)" transform={`rotate(${d} 50 50)`} />
            ))}
            <circle cx="50" cy="50" r="11" fill="var(--apricot)" />
          </svg>
          <span className="sr-only">{site.name}, home</span>
          <span aria-hidden="true" className="yh-display hidden whitespace-nowrap sm:inline">{site.name}</span>
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {site.nav.map((l) => {
            const active = pathname === l.href || pathname.startsWith(`${l.href}/`);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full px-2.5 text-[13px] font-semibold transition-colors duration-[180ms] hover:bg-[var(--paper-2)] hover:text-[var(--ink)] sm:px-3 sm:text-[14px]"
                  style={
                    active
                      ? { background: "color-mix(in srgb, var(--petal) 40%, var(--paper))", color: "var(--petal-deep)" }
                      : { color: "var(--ink-soft)" }
                  }
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer
      className="relative border-t px-5 py-10"
      style={{ borderColor: "color-mix(in srgb, var(--bark) 16%, transparent)", background: "var(--paper-2)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="text-[15px]">
          <span className="yh-display font-semibold">{site.name}</span>
          <span className="text-[var(--ink-soft)]"> · {site.role}</span>
        </p>
        <p className="text-[13px] text-[var(--ink-soft)]">{site.footer.note}</p>
      </div>
    </footer>
  );
}
