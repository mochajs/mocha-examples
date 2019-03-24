# Babel application

Full documentation about it [here](https://mochajs.org/#-require-module-r-module)

## Commands

- `npm run compile` - compile the ES6 Babel into the `/lib` directory
- `npm test` - run the tests using the local `.mocharc.yaml` config file. The config includes the Babel transpilation hook `@babel/register`. We have the babel config set inside `.babelrc`.
