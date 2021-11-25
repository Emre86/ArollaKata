export class FizzBuzz {


    getFizzBuzz(value: number): string {
        if (value === 3) {
            return "Fizz";
        }
        if (value === 5) {
            return "Buzz";
        }
    }
}