const { writeJsonFile, readJsonFile, deleteJsonFile } = require("../index");
const { expect } = require("chai");
const fs = require("fs");

describe("JSON FILE TESTING", () => {
  const fileName = "test";
  const jsonData = {
    name: "test",
    age: "20",
  };
  it("should write a json file", () => {
    writeJsonFile(fileName, jsonData);
    expect(fs.existsSync(`${fileName}.json`)).to.be.true;
  });

  it("should read a json file", () => {
    const result = readJsonFile(fileName);
    expect(result).to.deep.equal(jsonData);
  });

  it("should delete a json file", () => {
    deleteJsonFile(fileName);
  });
});
