export class FizzBuzz {


    getFizzBuzz(value: number): string {
        let res = ""
        if (value % 3 === 0) {
            res = "Fizz";
        }
        if (value % 5 === 0) {
            res = `${res}Buzz`;
        }
        return res;
    }
}