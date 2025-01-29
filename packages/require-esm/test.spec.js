const { expect } = require("chai");

describe("example", () => {
  it("2 + 2 === 4", () => {
    expect(2 + 2).to.be.eq(4);
  });

  it("2 + 2 === 5", () => {
    expect(2 + 2).to.be.eq(5);
  });
});
