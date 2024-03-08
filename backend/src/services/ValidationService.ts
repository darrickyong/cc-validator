import constants from "./constants.ts";

interface ValidationResult {
  isValid: boolean;
  message: string;
}

export default class ValidationService {
  constructor() {
  }

  containsOnlyNumbers(input: string): boolean {
    return /^[0-9]+$/.test(input);
  }

  isValidLength(input: string): boolean {
    if (input.length === 15 || input.length === 16) return true;
    return false;
  }

  isValidLuhnNumber(input: string): boolean {
    const reversed = input.split("").reverse().map(Number);
    let sum = 0;

    for (let i = 0; i < reversed.length; i++) {
      let digit = reversed[i];

      if (i % 2 != 0) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
    }

    return sum % 10 === 0;
  }

  validate(input: string): ValidationResult {
    try {
      if (!this.isValidLength(input)) {
        return { isValid: false, message: constants.LENGTH };
      }

      if (!this.containsOnlyNumbers(input)) {
        return { isValid: false, message: constants.NUMBERS_ONLY };
      }

      if (!this.isValidLuhnNumber(input)) {
        return { isValid: false, message: constants.INVALID_NUMBER };
      }

      return { isValid: true, message: constants.VALID_NUMBER };
    } catch {}
  }
}
