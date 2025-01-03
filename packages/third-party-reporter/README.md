# Third-party reporter

Mocha supports third-party reporters that can support advanced or specific use-cases. Reporters wrap around [Runner](https://mochajs.org/api/runner) objects and optionally listen to the events they emit.

To use a reporter published on npm (e.g., lcov-reporter), install it locally and set `--reporter lcov-reporter`. Alternatively, you can set the reporter in `.mocharc.json` as we've done here.

It is a very similar setup for [third party UI's](https://github.com/mochajs/mocha/wiki/Third-party-UIs).

## Commands

- `npm test` - run our tests using the local `.mocharc.json` config file. They are run from the default location (`/test`) with the reporter found in `src/my-reporter.js`. In this example there is 1 failing test included, to demonstrate handling.
