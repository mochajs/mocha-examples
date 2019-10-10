# TypeScript-Babel application

This is a example that uses Babel to transform TypeScript to plain JavaScript, and uses TypeScript for just type-checking. It is recommended to be set via `@babel/cli`. Babel looks for `.js` files by default, but this is not configurable withn the Babel config file.

## Commands

- `npm run check-types` - check types for TypeScript.
- `npm run lint` - run the TypeScript linter using the `tslint.json` config file.
- `npm run compile` - compile the ES6 TypeScript into the `/lib` directory.
- `npm test` - run the tests using the local `.mocharc.json` config file. Babel Config set is inside `babel.config.js`.

## Handling Babel extensions

### Compiling TS + Babel

By specifying `--extensions ".ts, .tsx"` options, `@babel/cli` can handle `.ts`, `.tsx` files.

### Testing TS + Babel with Mocha

According to this [issue](https://github.com/babel/babel/issues/8962), you have to create a new js file `babel-register.js` into the `test` directory, specify `extensions` for **TypeScript**. This cannot be done by just using `--require @babel/register`.
