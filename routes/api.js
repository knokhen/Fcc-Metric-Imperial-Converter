"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    const { input } = req.query;
    if (!input) {
      res.send("invalid input");
    } else {
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);
      if (initNum === "invalid number" && initUnit === "invalid unit") {
        res.send("invalid number and unit");
      } else if (initNum === "invalid number") {
        res.send("invalid number");
      } else if (initUnit === "invalid unit") {
        res.send("invalid unit");
      } else {
        const returnNum = convertHandler.convert(initNum, initUnit);
        const returnUnit = convertHandler.getReturnUnit(initUnit);
        const string = convertHandler.getString(
          initNum,
          initUnit,
          returnNum,
          returnUnit,
        );
        res.json({ initNum, initUnit, returnNum, returnUnit, string });
      }
    }
  });
};
