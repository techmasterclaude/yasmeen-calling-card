/**
 * `onRequestError` is the only hook that sees server-side errors; error.tsx
 * runs on the client and cannot report them. No error tracker is wired up yet
 * (see the closing report), so this logs in a shape a tracker can be dropped
 * into without touching call sites.
 */
export function onRequestError(
  err: unknown,
  request: { path: string; method: string },
) {
  console.error("[server-error]", {
    path: request.path,
    method: request.method,
    message: err instanceof Error ? err.message : String(err),
    stack: err instanceof Error ? err.stack : undefined,
  });
}
