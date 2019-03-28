# Babel application

More details on using Mocha with Babel [here](https://mochajs.org/#-require-module-r-module)

## Runtime Environment:

Three possibilities:
1. Avoid features which require runtime support (including new Built-ins and generators)
2. Require `@babel/runtime` directly, allowing usage of generators, but not polyfills which would modify the global environment
3. Require `@babel/polyfill` as a peer dependency and document that the consuming app must require it

This example app does not use features which require runtime support.

## Commands

- `npm run compile` - compile the ES6 Babel into the `/lib` directory
- `npm test` - run the tests using the local `.mocharc.yaml` config file. The config includes the Babel transpilation hook `@babel/register`. We have the babel config set inside `.babelrc`.
