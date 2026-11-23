const { capitalize, reverse } = require("../strings");

describe("strings", () => {
  test("capitalize uppercases the first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("capitalize of an empty string is empty", () => {
    expect(capitalize("")).toBe("");
  });

  test("reverse reverses the text", () => {
    expect(reverse("abc")).toBe("cba");
  });
});
