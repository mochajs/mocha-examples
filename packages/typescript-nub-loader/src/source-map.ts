enum FailureKind {
  Fixture = "fixture",
}

export function sourceMapStack(): string {
  const message = [
    "source map",
    FailureKind.Fixture,
  ].join(": ");

  return new Error(message).stack ?? "";
}
