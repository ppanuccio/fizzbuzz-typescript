import { FizzBuzzNumber } from "./fizzbuzz-number";

export class FizzBuzzApp {

  print(){
    for(let i=0; i<100 ; i++){
      console.log(new FizzBuzzNumber(i).toRepresentation());
    }
  }
}


