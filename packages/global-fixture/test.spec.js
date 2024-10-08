describe("example", () => {
  it("reads from the global count", () => {
    if (typeof globalThis.fixtureCount !== "number") {
      throw new Error("Expected a globalThis.fixtureCount.");
    }
  });
});
