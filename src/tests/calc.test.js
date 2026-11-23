const { add, multiply, average } = require("../calc");

describe("calc", () => {
  test("add returns the sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("multiply returns the product of two numbers", () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test("average returns the mean of a list", () => {
    expect(average([2, 4, 6])).toBe(4);
  });

  test("average of an empty list is 0", () => {
    expect(average([])).toBe(0);
  });
});
