import { strict as assert } from "node:assert";
import { sourceMapStack } from "./source-map.js";

describe("source maps", () => {
  it("reports the TypeScript source location", () => {
    assert.match(sourceMapStack(), /source-map\.ts:11:\d+/);
  });
});
