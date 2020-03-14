import { FizzBuzzApp } from './fizzbuzz';

/**
 * FizzBuzz test
 */
describe('FizzBuzz', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('FizzBuzz is instantiable', () => {
    expect(new FizzBuzzApp()).toBeInstanceOf(FizzBuzzApp);
  });

  describe('print', () => {
    it('should return 1 with 1', () => {
      const fizzbuzz = new FizzBuzzApp();
      const output = fizzbuzz.print(1);
      expect(output).toEqual("1");
    });

    it('should return Fizz with multiple of 3', () => {
      const fizzbuzz = new FizzBuzzApp();
      const output = fizzbuzz.print(3);
      expect(output).toEqual("Fizz");
    });

    it('should return Buzz with multiple of 5', () => {
      const fizzbuzz = new FizzBuzzApp();
      const output = fizzbuzz.print(5);
      expect(output).toEqual("Buzz");
    });

    it('should return FizzBuzz with multiple of 3 and 5', () => {
      const fizzbuzz = new FizzBuzzApp();
      const output = fizzbuzz.print(15);
      expect(output).toEqual("FizzBuzz");
    });
  });
});