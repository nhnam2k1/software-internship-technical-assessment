const VALID = 0;
const INVALID = 42;

const ValidateLuhnNumber = (creditCardNumber: string): number => {
    let nonWhitespaceCreditNumber: string = creditCardNumber.replace(/\s/g, "");
    let isCreditContainsDigitsOnly : boolean = /^\d+$/.test(nonWhitespaceCreditNumber);
    let creditLength: number = nonWhitespaceCreditNumber.length;

    if (creditLength < 2) return INVALID;
    if (!isCreditContainsDigitsOnly) return INVALID;

    let sum: number = 0;
    let hasReachEveryTwoDigits: boolean = false;

    for(let i: number = creditLength - 1; i >= 0; i--){
        let digit = parseInt(nonWhitespaceCreditNumber[i]);

        if (hasReachEveryTwoDigits){
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        
        sum += digit;
        hasReachEveryTwoDigits = !hasReachEveryTwoDigits; // Flipping boolean
    }

    if (sum % 10 !== 0) return INVALID;
    return VALID;
}

export default ValidateLuhnNumber;