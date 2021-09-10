'use strict';
const assert = require('assert');

(async function() {
  const tests = await new Promise(resolve => {
    setTimeout(resolve, 5000, [
        {args: [1, 2], expected: 3},
        {args: [1, 2, 3], expected: 6},
        {args: [1, 2, 3, 4], expected: 10}
    ]);
  });

  describe('add()', function() {
    tests.forEach(({args, expected}) => {
      it(`correctly adds ${args.length} args`, function() {
        const res = args.reduce((sum, curr) => sum + curr, 0);
        assert.strictEqual(res, expected);
      });
    });
  });

  run();
})();
