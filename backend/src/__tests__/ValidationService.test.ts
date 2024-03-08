import ValidationService from "../services/ValidationService.ts";

describe("The validation service", () => {
  const validationService = new ValidationService();

  it("should fail when length of the input is too short", () => {
    const input = "123456";
    const test = validationService.isValidLength(input);
    expect(test).toBe(false);
  });

  it("should pass when length of the input is correct", () => {
    const input = "123456789012345";
    const test = validationService.isValidLength(input);
    expect(test).toBe(true);
  });

  it("should fail when string contains non-numbers", () => {
    const input = "1234567890abcde";
    const test = validationService.containsOnlyNumbers(input);
    expect(test).toBe(false);
  });

  it("should pass when string contains only numbers", () => {
    const input = "123456789012345";
    const test = validationService.containsOnlyNumbers(input);
    expect(test).toBe(true);
  });

  it("should fail when string is invalid Luhn number", () => {
    const input = "4417123456789112";
    const test = validationService.isValidLuhnNumber(input);
    expect(test).toBe(false);
  });

  it("should pass when string is valid Luhn number", () => {
    const input = "4417123456789113";
    const test = validationService.isValidLuhnNumber(input);
    expect(test).toBe(true);
  });

  
});
