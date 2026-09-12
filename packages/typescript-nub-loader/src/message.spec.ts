import { strict as assert } from "node:assert";
import { formatMessage } from "./message.js";

describe("ES module TypeScript", () => {
  it("loads a .ts module through its emitted .js specifier", () => {
    assert.equal(formatMessage("Mocha"), "greeting: Mocha");
  });
});
