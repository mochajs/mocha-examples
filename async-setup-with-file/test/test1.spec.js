const assert = require('assert');

describe('mocha-test 1', () => {
  it('prepare.js must be loaded by now', () => {
    // prepare.js has been loaded
    assert.ok(require.cache[require.resolve('./prepare.js')]);
  });
});
