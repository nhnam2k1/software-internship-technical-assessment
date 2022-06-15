import ValidateLuhnNumber from "./ValidateLuhnNumber";

const ps = require("prompt-sync");
const prompt = ps();

let credit : string = prompt("Please type your credit card number: ");
let validate : number = ValidateLuhnNumber(credit);

process.exit(validate);