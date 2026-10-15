import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";
import { site, INDEXABLE } from "@/data/site";
import { SITE_URL, abs, personJsonLd, JsonLd } from "@/lib/seo";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
});

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: abs("/") },
  openGraph: {
    type: "website",
    url: abs("/"),
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: abs("/og"), width: 1200, height: 630, alt: site.title }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: [abs("/og")] },
  robots: INDEXABLE
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${karla.variable}`}>
      <head>
        {/*
          Sets a flag BEFORE first paint so CSS can hide reveal targets only when
          JS is actually running. Without it, .yh-reveal stays fully visible, so
          content is never gated on a script that might not load.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js-reveal')}catch(e){}`,
          }}
        />
        <JsonLd data={personJsonLd()} />
      </head>
      <body>
        {/* Parked off-screen by translation rather than sr-only's 1x1 clip, so it
            keeps a real 44px hit area instead of collapsing to a 1px target. */}
        <a
          href="#main"
          className="absolute left-4 top-4 z-50 inline-flex min-h-[44px] -translate-y-[200%] items-center rounded-full bg-white px-5 text-[15px] font-semibold shadow-lg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
