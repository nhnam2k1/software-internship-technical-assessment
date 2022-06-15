"use strict";
exports.__esModule = true;
var VALID = 0;
var INVALID = 42;
var ValidateLuhnNumber = function (creditCardNumber) {
    var nonWhitespaceCreditNumber = creditCardNumber.replace(/\s/g, "");
    var isCreditContainsDigitsOnly = /^\d+$/.test(nonWhitespaceCreditNumber);
    var creditLength = nonWhitespaceCreditNumber.length;
    if (creditLength < 2)
        return INVALID;
    if (!isCreditContainsDigitsOnly)
        return INVALID;
    var sum = 0;
    var hasReachEveryTwoDigits = false;
    for (var i = creditLength - 1; i >= 0; i--) {
        var digit = parseInt(nonWhitespaceCreditNumber[i]);
        if (hasReachEveryTwoDigits) {
            digit *= 2;
            if (digit > 9)
                digit -= 9;
        }
        sum += digit;
        hasReachEveryTwoDigits = !hasReachEveryTwoDigits; // Flipping boolean
    }
    if (sum % 10 !== 0)
        return INVALID;
    return VALID;
};
exports["default"] = ValidateLuhnNumber;
