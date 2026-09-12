const Mocha = require('mocha');
const Base = Mocha.reporters.Base;
const {
  EVENT_TEST_PASS,
  EVENT_TEST_FAIL,
  EVENT_TEST_END
} = Mocha.Runner.constants

class MyReporter extends Base {
  constructor(runner, options) {
    super(runner, options);

    runner.on(EVENT_TEST_PASS, function (test) {
      console.log('pass: %s', test.fullTitle());
    });

    runner.on(EVENT_TEST_FAIL, function (test, err) {
      console.log('fail: %s -- error: %s', test.fullTitle(), err.message);
    });

    runner.on(EVENT_TEST_END, function () {
      console.log('end: %d/%d', runner.stats.passes, runner.stats.tests);
    });
  }
}

module.exports = MyReporter;
