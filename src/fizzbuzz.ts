import { FizzBuzzStrategy } from "./fizzbuzz-strategy";

export class FizzBuzzApp {
  strategy: FizzBuzzStrategy;

  constructor(strategy: FizzBuzzStrategy) {
    this.strategy = strategy;
  }

  print(num: number): string {
    return this.strategy.toRepresentation(num);
  }
}
