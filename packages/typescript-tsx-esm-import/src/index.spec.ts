import { equal } from "assert";
import index from "./index.js";

describe("TypeScript usage suite", () => {
  it("should be able to execute a test", () => {
    equal(true, true);
  });

  it("should return expected string", () => {
    equal(index("incoming"), "incoming-static");
  });
});
