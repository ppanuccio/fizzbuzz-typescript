export class FizzBuzzNumber {
    value: number;

    constructor(num : number){
        this.value = num;
    }

    toRepresentation(): string {
        if (this.isFizz(this.value)) {
          if (this.isBuzz(this.value)) {
            return "FizzBuzz";
          } else {
            return "Fizz";
          }
        }
        if (this.isBuzz(this.value)) {
          if (this.isFizz(this.value)) {
            return "FizzBuzz";
          } else {
            return "Buzz";
          }
        }
        return this.value.toString();
      }
      private isBuzz(num: number) {
        return num % 5 === 0;
      }
      private isFizz(num: number) {
        return num % 3 === 0;
      }
}