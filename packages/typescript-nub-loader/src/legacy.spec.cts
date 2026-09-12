import assert = require("node:assert/strict");
import legacyMessage = require("./legacy.cjs");

describe("CommonJS TypeScript", () => {
  it("loads a .cts module through require", () => {
    assert.equal(legacyMessage("Mocha"), "legacy: Mocha");
  });
});
