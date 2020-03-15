import { DefaultFizzBuzzStrategy } from "./fizzbuzz-strategy";

describe("DefaultFizzBuzzStrategy", () => {
  it("return 1 with number 1", () => {
    const defaultFizzBuzzNumberStrategy = new DefaultFizzBuzzStrategy();
    const output = defaultFizzBuzzNumberStrategy.toRepresentation(1);
    expect(output).toBe("1");
  });

  it('should return Fizz with multiple of 3', () => {
    const defaultFizzBuzzNumberStrategy = new DefaultFizzBuzzStrategy();
    const output = defaultFizzBuzzNumberStrategy.toRepresentation(3);
    expect(output).toEqual("Fizz");
  });

  it('should return Buzz with multiple of 5', () => {
    const defaultFizzBuzzNumberStrategy = new DefaultFizzBuzzStrategy();
    const output = defaultFizzBuzzNumberStrategy.toRepresentation(5);
    expect(output).toEqual("Buzz");
  });

  it('should return FizzBuzz with multiple of 3 and 5', () => {
    const defaultFizzBuzzNumberStrategy = new DefaultFizzBuzzStrategy();
    const output = defaultFizzBuzzNumberStrategy.toRepresentation(15);
    expect(output).toEqual("FizzBuzz");
  });
});
