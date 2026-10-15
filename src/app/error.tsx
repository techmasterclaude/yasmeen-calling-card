"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center gap-4 px-5 text-center">
      <h1 className="text-3xl">Something went wrong on this page</h1>
      <p className="text-[var(--ink-soft)]">
        The rest of the site is fine. Try again, or head back to the top.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="inline-flex min-h-[44px] items-center rounded-full px-6 text-[15px] font-semibold text-white"
          style={{ background: "var(--wisteria-deep)" }}
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center rounded-full bg-white px-6 text-[15px] font-semibold"
          style={{ color: "var(--petal-deep)", border: "1.5px solid var(--petal)" }}
        >
          Back to start
        </Link>
      </div>
    </main>
  );
}
