import ValidateLuhnNumber from './ValidateLuhnNumber';

const testCases = [
    { message: 'single digit strings can not be valid', input: '1', expected: 42 },
    { message: 'a single zero is invalid', input: '0', expected: 42 },
    { message: 'a simple valid SIN that remains valid if reversed', input: '059', expected: 0 },
    { message: 'a simple valid SIN that becomes invalid if reversed', input: '59', expected: 0 },
    { message: 'a valid Canadian SIN', input: '055 444 285', expected: 0 },
    { message: 'invalid Canadian SIN', input: '055 444 286', expected: 42 },
    { message: 'invalid credit card', input: '8273 1232 7352 0569', expected: 42 },
    { message: 'valid number with an odd number of digits', input: '095 245 88', expected: 0 },
    { message: 'valid number with an even number of digits', input: '234 567 891 234', expected: 0 },
    { message: 'valid strings with a non-digit added at the end invalid', input: '059a', expected: 42 },
    { message: 'valid strings with punctuation included become invalid', input: '055-444-285', expected: 42 },
    { message: 'valid strings with symbols included become invalid', input: '055# 444$ 285', expected: 42 },
    { message: 'single zero with space is invalid', input: ' 0', expected: 42 },
    { message: 'more than a single zero is valid', input: '0000 0', expected: 0 },
    { message: 'input digit 9 is correctly converted to output digit 9', input: '091', expected: 0 },
    { message: 'using ascii value for non-doubled non-digit isn\'t allowed', input: '055b 444 285', expected: 42 },
    { message: 'using ascii value for doubled non-digit isn\'t allowed', input: ':9', expected: 42 },
];

let isFailed = false;

testCases.forEach((testCase) => {
    let value = ValidateLuhnNumber(testCase.input);
    let result = value == testCase.expected;
    if (!result){
        console.log(`Failed testcase ${testCase.message}`);
        isFailed = true;
    }
});

if (!isFailed) console.log("Successful Passed");