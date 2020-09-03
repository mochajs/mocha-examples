const assert = require("assert");
const playwright = require("playwright");

describe("Playwright", () => {
    let page;
    let browser;
    let context;

    const BASE_URL = "https://mochajs.org";

    beforeEach(async () => {
        const { chromium } = playwright;
        browser = await chromium.launch({ headless: true });
        context = await browser.newContext();
        page = await context.newPage(BASE_URL);
        await page.goto(BASE_URL);
    });

    afterEach(async function() {
        await browser.close();
    });

    it("should render mocha homepage", async () => {
        const headerText = await page.$eval(
            "id=tag",
            header => header.innerText
        );
        assert.strictEqual(headerText, "simple, flexible, fun");
    });
});
