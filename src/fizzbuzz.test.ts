import { FizzBuzz } from './fizzbuzz';

/**
 * FizzBuzz test
 */
describe('FizzBuzz', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('FizzBuzz is instantiable', () => {
    expect(new FizzBuzz()).toBeInstanceOf(FizzBuzz);
  });

  describe('print', () => {
    it('should return 1 with 1', () => {
      const fizzbuzz = new FizzBuzz();
      const output = fizzbuzz.print(1);
      expect(output).toEqual("1");
    });
  });
});