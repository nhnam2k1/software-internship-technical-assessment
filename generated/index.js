"use strict";
exports.__esModule = true;
var ValidateLuhnNumber_1 = require("../ValidateLuhnNumber");
var ps = require("prompt-sync");
var prompt = ps();
var credit = prompt("Please type your credit card number: ");
var validate = (0, ValidateLuhnNumber_1["default"])(credit);
process.exit(validate);
