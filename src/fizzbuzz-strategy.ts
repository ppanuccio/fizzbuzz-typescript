export interface FizzBuzzStrategy {
  toRepresentation(num: number): string;
}

export class DefaultFizzBuzzStrategy implements FizzBuzzStrategy {
  toRepresentation(fizzBuzzNumber: number): string {
    if (this.isFizz(fizzBuzzNumber)) {
      if (this.isBuzz(fizzBuzzNumber)) {
        return "FizzBuzz";
      } else {
        return "Fizz";
      }
    }
    if (this.isBuzz(fizzBuzzNumber)) {
      if (this.isFizz(fizzBuzzNumber)) {
        return "FizzBuzz";
      } else {
        return "Buzz";
      }
    }
    return fizzBuzzNumber.toString();
  }
  private isBuzz(num: number) {
    return num % 5 === 0;
  }
  private isFizz(num: number) {
    return num % 3 === 0;
  }
}
