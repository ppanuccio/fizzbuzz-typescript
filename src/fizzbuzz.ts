export class FizzBuzzApp {

    print(num: number): string {
      if(this.isFizz(num)){
        if(this.isBuzz(num)){
          return "FizzBuzz";
        }else{
          return "Fizz";
        }
      }
      if(this.isBuzz(num)){
        if(this.isFizz(num)){
          return "FizzBuzz"
        }else{
          return "Buzz";
        }
      }
      return num.toString();
    }

  private isBuzz(num: number) {
    return num % 5 === 0;
  }

  private isFizz(num: number) {
    return num % 3 === 0;
  }
  }