'use strict';
const assert = require('assert');
const delay = 3000;

// Just for comparison
describe('mocha-test 1', () => {
  console.log('Started mocha-test 1 ...');
  it('will be started immediately but finished with delay', () => {
    assert.ok(true);
    console.log('... Finished mocha-test 1');
  });
});

// Some tests that require delay
setTimeout(function() {
  describe('mocha-test 2 (with delay)', function() {
    // Will be started with delay
    console.log('Started mocha-test 2 ...');
    it('will be started with delay and finished', () => {
      assert.ok(true);
      console.log('... Finished mocha-test 2');
    });
    run();
  });
}, delay);
