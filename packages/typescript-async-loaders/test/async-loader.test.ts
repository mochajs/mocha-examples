import assert from "assert";
import { describe, it } from "mocha";

function add(a: number, b: number): number {
  return a + b;
}

describe("async loaders", () => {
  it("should work", () => {
    assert.strictEqual(add(2, 3), 5);
  });
});
