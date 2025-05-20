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
    let result;

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
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
// console.log("2kg: " + test.getNum("2kg"));
// console.log("2kg6: " + test.getNum("2kg6"));
// console.log("3.5mi: " + test.getNum("3.5mi"));
// console.log("3/5l: " + test.getNum("3/5l"));
// console.log("3/5.5l: " + test.getNum("3/5.5l"));
// console.log("3/5/7l: " + test.getNum("3/5/7l"));
// console.log("mig5: " + test.getNum("mig5"));
// console.log("mi: " + test.getNum("mi"));
// console.log("/: " + test.getNum("/"));
// console.log("5: " + test.getNum("5"));
// console.log("/gh: " + test.getNum("/gh"));
// console.log(": " + test.getNum(""));

module.exports = ConvertHandler;
