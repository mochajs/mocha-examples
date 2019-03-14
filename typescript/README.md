# Typescript application

Full documentation about it [here](https://mochajs.org/#-require-module-r-module)

Tests here are kept next to their code (not in a separate dir). This was done to demonstrate an alternative way of housing tests.

## Commands

- `npm run compile` - compile the ES6 Typescript into the `/lib` directory
- `npm run test` - run the tests using the local `.mocharc.json` config file. As the config includes the Typescript transpilation hook `ts-node/register` it does not require pre-compilation before running.
