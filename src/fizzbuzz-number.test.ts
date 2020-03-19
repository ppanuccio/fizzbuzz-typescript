import { FizzBuzzNumber } from "./fizzbuzz-number";

describe("FizzBuzz number", () => {
  it("return 1 with number 1", () => {
    const fizzBuzzNumber = new FizzBuzzNumber(1);
    const output = fizzBuzzNumber.toRepresentation();
    expect(output).toBe("1");
  });

  it('should return Fizz with multiple of 3', () => {
    const fizzBuzzNumber = new FizzBuzzNumber(3);
    const output = fizzBuzzNumber.toRepresentation();
    expect(output).toEqual("Fizz");
  });

  it('should return Buzz with multiple of 5', () => {
    const fizzBuzzNumber = new FizzBuzzNumber(5);
    const output = fizzBuzzNumber.toRepresentation();
    expect(output).toEqual("Buzz");
  });

  it('should return FizzBuzz with multiple of 3 and 5', () => {
    const fizzBuzzNumber = new FizzBuzzNumber(15);
    const output = fizzBuzzNumber.toRepresentation();
    expect(output).toEqual("FizzBuzz");
  });
});
