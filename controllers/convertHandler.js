const { conversions } = require("../utils/units.js");
function ConvertHandler() {
  this.getNum = function (input) {
    let inputArr = input.split(/[A-z]+/);
    if (inputArr.length === 1) {
      return isNaN(inputArr[0]) || inputArr[0] === ""
        ? "Invalid number"
        : +inputArr[0];
    }
    if (inputArr.length === 2) {
      if (!isNaN(inputArr[1]) && inputArr[1] !== "") {
        return "Invalid number";
      }
      if (inputArr[0] === "") {
        return 1;
      }
      if (inputArr[0].split("/").includes("")) {
        return "Invalid number";
      }
      if (inputArr[0].split("/").length === 1) {
        return +inputArr[0];
      }
      if (inputArr[0].split("/").length === 2) {
        return +inputArr[0].split("/")[0] / +inputArr[0].split("/")[1];
      }
    }

    return "Invalid number";
  };

  this.getUnit = function (input) {
    let inputArr = input.split(/[0-9\/\.]+/);
    if (
      inputArr.length === 1 &&
      (conversions.hasOwnProperty(inputArr[0].toUpperCase()) ||
        conversions.hasOwnProperty(inputArr[0].toLowerCase()))
    ) {
      return this.spellOutUnit(inputArr[0]);
    }
    if (
      inputArr.length === 2 &&
      inputArr[0] === "" &&
      (conversions.hasOwnProperty(inputArr[1].toUpperCase()) ||
        conversions.hasOwnProperty(inputArr[1].toLowerCase()))
    ) {
      return this.spellOutUnit(inputArr[1]);
    }

    return "Invalid unit";
  };

  this.getReturnUnit = function (initUnit) {
    return conversions[initUnit];
  };

  this.spellOutUnit = function (unit) {
    return (
      conversions[conversions[unit.toLowerCase()]] ||
      conversions[conversions[unit.toUpperCase()]]
    );
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}
// const test = new ConvertHandler();
// console.log("2kg: " + test.getUnit("2kg"));
// console.log("2kg6: " + test.getUnit("2kg6"));
// console.log("3.5mi: " + test.getUnit("3.5mi"));
// console.log("3/5l: " + test.getUnit("3/5l"));
// console.log("3/5.5l: " + test.getUnit("3/5.5l"));
// console.log("3/5/7l: " + test.getUnit("3/5/7l"));
// console.log("mig5: " + test.getUnit("mig5"));
// console.log("mi: " + test.getUnit("mi"));
// console.log("/: " + test.getUnit("/"));
// console.log("5: " + test.getUnit("5"));
// console.log("/gh: " + test.getUnit("/gh"));
// console.log(": " + test.getUnit(""));

module.exports = ConvertHandler;
