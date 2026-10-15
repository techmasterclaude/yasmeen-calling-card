"use client";

// Catches errors thrown in the root layout itself, where error.tsx cannot run.
// It must render its own <html>/<body>, and it cannot rely on the app's CSS.
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#FFFBF4", color: "#332A46" }}>
        <main style={{ maxWidth: 520, margin: "0 auto", padding: "20vh 20px", textAlign: "center" }}>
          <h1 style={{ fontSize: 28, marginBottom: 12 }}>This page failed to load</h1>
          <p style={{ color: "#645578", lineHeight: 1.6 }}>Please try again.</p>
          <button
            onClick={reset}
            style={{
              marginTop: 20, minHeight: 44, padding: "0 24px", borderRadius: 999,
              border: 0, background: "#5D4290", color: "#fff", fontSize: 15,
              fontWeight: 600, cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
