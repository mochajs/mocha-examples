# Vue 2 and Puppeteer

[This blog post describes this Vue/Mocha/Puppeteer setup in detail](http://thecodebarbarian.com/testing-vue-apps-with-puppeteer-and-mocha.html).

## Commands

- `npm start` - Start a static server using [serve](https://www.npmjs.com/package/serve). Run `npm start` and go to `http://localhost:5000` to see the basic Vue app in action.
- `npm test` - Run mocha tests. By default, runs Puppeteer in headless mode. Use `env D=1 npm test` to turn off headless mode so you can watch Mocha click through the app.
