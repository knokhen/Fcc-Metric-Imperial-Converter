const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("Testing reading a whole number input.", () => {
    assert.strictEqual(
      convertHandler.getNum("2mi"),
      2,
      "convertHandler should correctly read a whole number input.",
    );
  });

  test("Testing reading a decimal number input.", () => {
    assert.strictEqual(
      convertHandler.getNum("3.1kg"),
      3.1,
      "convertHandler should correctly read a decimal number input.",
    );
  });

  test("Testing reading a fractional input.", () => {
    assert.strictEqual(
      convertHandler.getNum("3/5l"),
      0.6,
      "convertHandler should correctly read a fractional input.",
    );
  });

  test("Testing reading a fractional input with a decimal.", () => {
    assert.strictEqual(
      convertHandler.getNum("1.8/2lbs"),
      0.9,
      "convertHandler should correctly read a fractional input with a decimal.",
    );
  });

  test("Testing returning an error on a double-fraction", () => {
    assert.strictEqual(
      convertHandler.getNum("3/5/7kg"),
      "Invalid number",
      "convertHandler should correctly return an error on a double-fraction",
    );
  });

  test("Testing defaulting to a numerical input of 1 when no numerical input is provided.", () => {
    assert.strictEqual(
      convertHandler.getNum("mi"),
      1,
      "convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.",
    );
  });
});

