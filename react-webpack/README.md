# React, webpack

Full documentation about it [here](https://mochajs.org/#-require-module-r-module)

## Running the application

Run the `build` (see below) and then open `index.html` inside a browser.
  
## Makes use of

- [babel](https://babeljs.io/) - transpilation
- [enzyme](https://airbnb.io/enzyme/) - React component testing library
- [chai](https://www.chaijs.com/api/assert/) - assertion library


## Commands

- `npm run build` - run webpack using the local `webpack.config.js` file. Builds the client-side code into `/lib`.
- `npm run test` - run the tests using the local `.mocharc.js` config file. As the config includes the Babel transpilation hook `@babel/register` it does not require pre-compilation before running.
