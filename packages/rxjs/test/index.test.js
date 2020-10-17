const { TestScheduler } = require("rxjs/testing");
const { from, of } = require("rxjs");
const { delay, concatMap } = require("rxjs/operators");
const { deepEqual } = require("assert");

const { getNames, throttleTimeForThreeMs } = require("../custom-operator");

describe("observable stream", () => {
  let testScheduler;
  const sourceValues = [
    {
      name: "mocha",
    },
    {
      name: "vanilla",
    },
    {
      name: "caramel",
    },
  ];

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      deepEqual(actual, expected);
    });
  });

  it("should follow marble diagrams with basic operators", () => {
    testScheduler.run(({ cold, expectObservable, expectSubscriptions }) => {
      const targetStream = cold("01(2|)", sourceValues);
      const subs = "^-!";
      const expected = "--0-1-(2|)";

      expectObservable(
        targetStream.pipe(concatMap((value) => of(value).pipe(delay(2))))
      ).toBe(expected, sourceValues);
      expectSubscriptions(targetStream.subscriptions).toBe(subs);
    });
  });

  it("should return computed values with custom operators, following the marble diagram", () => {
    testScheduler.run(({ expectObservable }) => {
      const targetStream = from(sourceValues).pipe(
        concatMap((value) => of(value).pipe(delay(2)))
      );
      const expected = "--0---(1|)";

      const resultValues = ["mocha", "caramel"];

      expectObservable(
        targetStream.pipe(getNames, throttleTimeForThreeMs)
      ).toBe(expected, resultValues);
    });
  });
});
