import { equal } from "assert";
import { add } from "../src";

describe('Babel usage suite', () => {
  it('should add numbers correctly', () => {
    equal(add(2, 3), 5);
  });
});
