export function sourceMapStack(): string {
  return new Error("source map fixture").stack ?? "";
}
