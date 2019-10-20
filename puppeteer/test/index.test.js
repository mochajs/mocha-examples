const assert = require('assert');
const puppeteer = require('puppeteer');
const { expect } = require('chai')
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

  it('should h1 have a Mocha is good', async function() {  
    const tag = 'h1'; 
    await page.waitFor(tag); 
    const heading = await page.$eval(tag, heading => heading.innerText);
    expect(heading).to.eql('Mocha is good');  
  }); 
});