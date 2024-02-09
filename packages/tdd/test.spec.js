const assert = require("node:assert");

suite("Array", function () {
  suite("#indexOf()", function () {
    test("should return -1 when not present", function () {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});
