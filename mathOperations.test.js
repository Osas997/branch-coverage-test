const { idOdd } = require("./mathOperations");

it("should odd number return true", () => {
  expect(idOdd(5)).toBe(true);
});

it("should even number return false", () => {
  expect(idOdd(6)).toBe(false);
});
