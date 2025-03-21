# Programmatic usage

Full documentation about it [here](https://github.com/mochajs/mocha/wiki/Using-Mocha-programmatically)

## Commands

- `npm test` - run our tests calling Mocha programatically found in `index.js`. The options are handed to mocha when it is instantiated.

## Notes

`package.json` duplicates `./tests` for compatibility with different operating systems. See [#116](https://github.com/mochajs/mocha-examples/issues/116) and [cross-env#192 comment](https://github.com/kentcdodds/cross-env/issues/192#issuecomment-518035907) for more details.
