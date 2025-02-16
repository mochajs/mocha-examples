const assert = require("assert");
const puppeteer = require("puppeteer");
const opts = process.env.D
  ? { headless: false, slowMo: 250 }
  : process.env.CI
  ? {
      headless: true,
      args: [`--no-sandbox`, `--disable-setuid-sandbox`],
    }
  : {};

describe("my app", function () {
  let browser;
  let page;
  let server;

  before(async function () {
    this.timeout(10000);
    // Create an Express static server that will serve up `index.html` at
    // `http://localhost:3000/index.html`
    const app = require("express")();
    app.use(require("express-static")("."));
    server = await app.listen(3001);

    // Launch Puppeteer and navigate to the Express server
    browser = await puppeteer.launch(opts);
    page = await browser.newPage();
    await page.goto("http://localhost:3001/index.html");
  });

  after(async function () {
    await browser.close();
    await server.close();
  });

  it('h1 should say "mocha is good"', async function () {
    const tag = "h1";
    await page.waitForSelector(tag);
    const heading = await page.$eval(tag, (heading) => heading.innerText);
    assert.equal(heading, "Mocha is good");
  });
});
