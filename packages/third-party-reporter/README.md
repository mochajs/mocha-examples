# Third-party reporter

Mocha supports third-party reporters that can support advanced or specific use-cases. A reporter wraps around a [Runner](https://mochajs.org/api/runner) object and optionally listens to the events it emits.

To use a reporter published on npm (e.g., lcov-reporter), install it locally and set `--reporter lcov-reporter`. Alternatively, you can set the reporter in `.mocharc.json` as we've done here.

It is a very similar setup for [third party UI's](https://github.com/mochajs/mocha/wiki/Third-party-UIs).

For more details, including a list of which argument types go with which runner event, see [Tutorial: Create a Custom Reporter](https://mochajs.org/api/tutorial-custom-reporter).

## Commands

- `npm test` - run tests to validate `lib/my-reporter.js`
- `npm run test:unit` - run tests to see the output of `lib/my-reporter.js` on failing tests
