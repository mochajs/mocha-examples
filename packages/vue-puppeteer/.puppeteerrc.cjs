const { join } = require("path");

/**
 * Use a package-local browser cache so concurrent installs of the puppeteer
 * examples (e.g. during `lerna bootstrap`) don't race on the shared
 * ~/.cache/puppeteer directory and corrupt each other's downloads.
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  cacheDirectory: join(__dirname, ".cache", "puppeteer"),
};
