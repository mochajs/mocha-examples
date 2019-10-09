# TypeScript Babel Combination application

## Commands

- `npm run check-types` - check types
- `npm run compile` - compile the ES6 Babel into the `/lib` directory
- `npm test` - run the tests using the local `.mocharc.json` config file. Babel Config set is inside `babel.config.js`.

## Good To Know

According to this [issue](https://github.com/babel/babel/issues/8962), create a new js file `babel-register.js` into the `test` directory, specify `extensions` for **TypeScript**. This cannot be done by just using `--require @babel/register`.