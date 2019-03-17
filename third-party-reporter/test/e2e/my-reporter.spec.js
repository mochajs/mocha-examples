const { deepEqual, equal } = require('assert');
var { EVENT_TEST_PASS, EVENT_TEST_FAIL, EVENT_TEST_END } = require('mocha/lib/runner').constants
var MyReporter = require('../../src/my-reporter');

describe('My Reporter e2e tests', () => {
  const pendingTest = {
    name: 'pending',
    slow: () => '',
    fullTitle: () => 'pending test title',
  };
  const failTest = {
    name: 'fail',
    slow: () => '',
    fullTitle: () => 'fail test title',
  };
  const passTest = {
    name: 'pass',
    slow: () => '',
    fullTitle: () => 'pass test title',
  };

  let stdout;
  let cached;
  let runner;

  beforeEach(() => {
    runner = {};
    stdout = [];
  })

  describe('On test pass', () => {
    it('should print expected pass message', function() {
      cached = console.log;
      console.log = function(msg, substr1) {
        stdout.push({msg, substr1});
      }
      runner.on = function(event, callback) {
        if (event === EVENT_TEST_PASS) {
          callback(passTest);
        }
      };
      MyReporter.call({}, runner);
      console.log = cached;

      const expectedMessage = {
        msg: 'pass: %s',
        substr1: 'pass test title'
      }
      deepEqual(stdout[0], expectedMessage);
    });
  });

  describe('On test failure', () => {
    it('should print expected fail message and error message', function() {
      cached = console.log;
      console.log = function(msg, substr1, substr2) {
        stdout.push({msg, substr1, substr2});
      }
      runner.on = function(event, callback) {
        if (event === EVENT_TEST_FAIL) {
          callback(failTest, { message: 'error message' });
        }
      };

      MyReporter.call({}, runner);
      console.log = cached;
      const expectedMessage = {
        msg: 'fail: %s -- error: %s',
        substr1: 'fail test title',
        substr2: 'error message'
      }

      deepEqual(stdout[0], expectedMessage);
    });
  });

  describe('On end of suite', () => {
    it('should print expected end message with stats for tests and passes', function() {
      cached = console.log;
      console.log = function(msg, substr1, substr2) {
        stdout.push({msg, substr1, substr2});
      }
      runner.on = function(event, callback) {
        if (event === EVENT_TEST_END) {
          callback();
        }
      };
      runner.stats = {
        passes: 1,
        tests: 2
      }

      MyReporter.call({}, runner);
      console.log = cached;
      const expectedMessage = {
        msg: 'end: %d/%d',
        substr1: 1,
        substr2: 2
      }

      deepEqual(stdout[0], expectedMessage);
    });
  });
});
