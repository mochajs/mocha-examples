# Typescript application

Full documentation about it [here](https://mochajs.org/#-require-module-r-module)

Tests here are kept next to their code (not in a separate dir). This was done to demonstrate an alternative way of housing tests.

## Commands

- `npm run compile` - compile the ES6 Typescript into the `/lib` directory
- `npm run lint` - run the Typescript linter using the `tslint.json` config file.
- `npm test` - run the tests using the local `.mocharc.json` config file. As the config includes the Typescript transpilation hook `ts-node/register` it does not require pre-compilation before running.

## ES Modules

If your typescript project's `tsconfig.json` has module code generation set to something other than `CommonJS`, you may
encounter an error `"SyntaxError: Unexpected token {"` when you use an import statement.

```
import { fail, ok } from 'assert';
       ^

SyntaxError: Unexpected token {
    at Module._compile (internal/modules/cjs/loader.js:721:23)

```

This is because the underlying `ts-node` does not support ES modules:


 > Import Statements
 > Current node.js stable releases do not support ES modules. Additionally, ts-node does not have the required hooks into node.js to support ES modules. You will need to set "module": "commonjs" in your tsconfig.json for your code to work.

See: https://www.npmjs.com/package/ts-node#import-statements

You may need `tsconfig.json` compiler options for `module` to be something other than `commonjs`. You can still set it to
`commonjs` only for testing. The workaround is to set the environment variable `TS_NODE_COMPILER_OPTIONS` when executing
`mocha` to give `ts-node` a module setting of `commonjs`. For example, in `package.json`:

```
  "scripts": {
    "test": "env TS_NODE_COMPILER_OPTIONS='{\"module\": \"commonjs\" }' mocha"
  }
```


