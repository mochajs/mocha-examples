# Third-party reporter

Mocha supports third-party reporters that can support advanced or specific use-cases. A reporter wraps around a [Runner](https://mochajs.org/api/runner) object and optionally listens to the events it emits.

To use a reporter published on npm (e.g., lcov-reporter), install it locally and set `--reporter lcov-reporter`. Alternatively, you can set the reporter in `.mocharc.json` as we've done here.

It is a very similar setup for [third party UI's](https://github.com/mochajs/mocha/wiki/Third-party-UIs).

For more details, see [Tutorial: Create a Custom Reporter](https://mochajs.org/api/tutorial-custom-reporter).

## Commands

- `npm test` - run our tests using the local `.mocharc.json` config file. They are run from the default location (`/test`) with the reporter found in `src/my-reporter.js`.
