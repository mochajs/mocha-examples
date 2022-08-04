const fs = require("fs");

function writeJsonFile(fileName, jsonData) {
  fs.writeFileSync(`${fileName}.json`, JSON.stringify(jsonData), "utf-8");
}

function readJsonFile(fileName) {
  return JSON.parse(fs.readFileSync(`${fileName}.json`, "utf-8"));
}

function deleteJsonFile(fileName) {
  fs.unlinkSync(`${fileName}.json`);
}

module.exports = {
  writeJsonFile,
  readJsonFile,
  deleteJsonFile,
};
