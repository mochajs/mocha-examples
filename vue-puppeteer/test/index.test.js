const assert = require('assert');
const puppeteer = require('puppeteer');

const opts = process.env.D ? { headless: false, slowMo: 250 } : {};

describe('my app', function() {
  let browser;
  let page;
  let server;

  before(async function() {
    this.timeout(10000);

    // Create an Express static server that will serve up `index.html` at
    // `http://localhost:3000/index.html`
    const app = require('express')();
    app.use(require('express-static')('.'));
    server = await app.listen(3000);

    // Launch Puppeteer and navigate to the Express server
    browser = await puppeteer.launch(opts);
    page = await browser.newPage();
    await page.goto('http://localhost:3000/index.html');
  });

  after(async function() {
    await browser.close();
    await server.close();
  });

  it('displays the current page', async function() {
    this.timeout(10000);

    // Click on the "Home" link and make sure "Home" shows up
    await page.evaluate(() => document.querySelector('a[href="#/home"]').click());
    let content = await page.evaluate(() => document.querySelector('#route').innerHTML);
    assert.equal(content, '<h1>Home</h1>');

    // Click on the "About" link and make sure "About Us" shows up
    await page.evaluate(() => document.querySelector('a[href="#/about"]').click());
    content = await page.evaluate(() => document.querySelector('#route').innerHTML);
    assert.equal(content, '<h1>About Us</h1>');
  });
});