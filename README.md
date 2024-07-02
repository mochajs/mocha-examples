# Mocha examples

A set of examples to help demonstrate common configurations using Mocha. They should all run out-the-box.

[![Build Status](https://github.com/mochajs/mocha-examples/workflows/Tests/badge.svg?branch=main)](https://github.com/mochajs/mocha-examples/actions?query=workflow%3ATests+branch%3Amain) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Examples

The most straightforward example is ["Hello World"](packages/hello-world/).
Additional examples include:

- [Apollo-Server GraphQL API](packages/apollo-server-graphql-api/)
- [Async setup with --delay](packages/async-setup-with-delay/)
- [Async setup with --file](packages/async-setup-with-file/)
- [Babel application](packages/babel/)
- [Browser](packages/browser/)
- [Express REST API](packages/express-rest-api/)
- [Karma](packages/karma/)
- [Node Sqlite 3 example](packages/node-sqlite3/)
- [Playwright application](packages/playwright/)
- [Programmatic usage](packages/programmatic-usage/)
- [Puppeteer application](packages/puppeteer/)
- [React, webpack](packages/react-webpack)
- [RxJs example](packages/rxjs/)
- [Selenium application](packages/selenium/)
- [TDD](packages/tdd/)
- [Third party reporter](packages/third-party-reporter/)
- [TypeScript application](packages/typescript/)
- [TypeScript with `ts-node`'s ESM loader](packages/typescript-ts-node-esm-loader/)
- [TypeScript with `tsx`'s ESM import](packages/typescript-tsx-esm-import/)
- [TypeScript, Babel](packages/typescript-babel/)
- [Vue and Puppeteer application](packages/vue-puppeteer/)

## Adding a new example

Follow the below steps:

1. Clone this repo locally
2. Create your folder under `packages/`
3. Run `npm init`
4. Now build your application and open a PR (its `npm test` will automatically be run in CI).

## Linting

There is generally no linting requirement for each example, but we recommend running prettier. You can install and run it with:

    npm install prettier
    prettier --write .

## Requirements

Each example application will have its own package dependencies but also a [version of Node.js](https://docs.npmjs.com/files/package.json#engines) it was designed and built from.

## Reporting a bug?

Feel free to send a branch to supply an MCVE from one of the applications.

## Potential setups to add in future

- Angular
- Pipe json output to file

We welcome suggestions on other useful setups.
