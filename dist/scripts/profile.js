"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printProfile = void 0;
var printProfile = exports.printProfile = function printProfile(data) {
  var name = data.name,
    company = data.company;
  console.log("".concat(name, " are work in ").concat(company));
};