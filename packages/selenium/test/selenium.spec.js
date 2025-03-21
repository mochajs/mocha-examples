// Adapted from Selenium docs
// https://github.com/SeleniumHQ/seleniumhq.github.io/blob/6d10d09/examples/javascript/test/getting_started/firstScript.spec.js
// Apache License 2.0, copyright 2025 Software Freedom Conservancy
import { Builder, By, Browser } from "selenium-webdriver";
import firefox from "selenium-webdriver/firefox";
import assert from "assert";

let driver = null;

describe("Selenium", () => {
  beforeEach(async () => {
    const options = new firefox.Options().addArguments('--headless');
    // If Firefox is not installed, this line installs it, hence the 90 second test timeout
    driver = await new Builder()
      .forBrowser(Browser.FIREFOX)
      .setFirefoxOptions(options)
      .build();
    await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("should submit a message", async () => {
    let title = await driver.getTitle();
    assert.equal("Web form", title);
  
    await driver.manage().setTimeouts({implicit: 500});
  
    let textBox = await driver.findElement(By.name('my-text'));
    let submitButton = await driver.findElement(By.css('button'));
  
    await textBox.sendKeys('Selenium');
    await submitButton.click();
  
    let message = await driver.findElement(By.id('message'));
    let value = await message.getText();
    assert.equal("Received!", value);
  });
});
