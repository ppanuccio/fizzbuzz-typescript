"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FizzBuzzNumber {
    constructor(num) {
        this.value = num;
    }
    toRepresentation() {
        if (this.isFizz(this.value)) {
            if (this.isBuzz(this.value)) {
                return "FizzBuzz";
            }
            else {
                return "Fizz";
            }
        }
        if (this.isBuzz(this.value)) {
            if (this.isFizz(this.value)) {
                return "FizzBuzz";
            }
            else {
                return "Buzz";
            }
        }
        return this.value.toString();
    }
    isBuzz(num) {
        return num % 5 === 0;
    }
    isFizz(num) {
        return num % 3 === 0;
    }
}
exports.FizzBuzzNumber = FizzBuzzNumber;
//# sourceMappingURL=fizzbuzz-number.js.map