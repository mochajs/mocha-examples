# Third party reporter

Full documentation about it [here](https://github.com/mochajs/mocha/wiki/Third-party-reporters).

To use a reporter published on npm (e.g., lcov-reporter), install it locally and set `--reporter lcov-reporter`.

It is a very similar setup for `third party UI's`, for more details see [here](https://github.com/mochajs/mocha/wiki/Third-party-UIs).

## Commands

- `npm test` - run our tests using the local `.mocharc.json` config file. They are run from the default location (`/test`) with the reporter found in `src/my-reporter.js`. In this example there is 1 failing test included, to demonstrate handling.

