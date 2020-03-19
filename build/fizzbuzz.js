"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz_number_1 = require("./fizzbuzz-number");
class FizzBuzzApp {
    print() {
        for (let i = 0; i < 100; i++) {
            console.log(new fizzbuzz_number_1.FizzBuzzNumber(i).toRepresentation());
        }
    }
}
exports.FizzBuzzApp = FizzBuzzApp;
//# sourceMappingURL=fizzbuzz.js.map