# Mocha examples

A set of examples to help demonstrate common configurations using Mocha. They should all run out-the-box.

[![Build Status](https://github.com/mochajs/mocha-examples/workflows/Tests/badge.svg?branch=master)](https://github.com/mochajs/mocha-examples/actions?query=workflow%3ATests+branch%3Amaster) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Examples

- [Apollo-Server GraphQL API](packages/apollo-server-graphql-api/)
- [Async setup with --delay](packages/async-setup-with-delay/)
- [Async setup with --file](packages/async-setup-with-file/)
- [Babel application](packages/babel/)
- [Karma](packages/karma/)
- [Programmatic usage](packages/programmatic-usage/)
- [React, webpack](packages/react-webpack)
- [Selenium application](packages/selenium/)
- [Third party reporter](packages/third-party-reporter/)
- [TypeScript application](packages/typescript/)
- [Vue and Puppeteer application](packages/vue-puppeteer/)
- [Puppeteer application](packages/puppeteer/)
- [TypeScript, Babel](packages/typescript-babel/)
- [Express REST API](packages/express-rest-api/)
- [Node Sqlite 3 example](packages/node-sqlite3/)
- [Playwright application](packages/playwright/)
- [RxJs example](packages/rxjs/)

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
