export class FizzBuzz {

    getFizzBuzz(value: number): string {
        const fizz = this.getFizz(value);
        const buzz = this.getBuzz(value);
        return `${fizz}${buzz}`;
    }

    getFizz(value: number): string {
        return value % 3 === 0 ? "Fizz" : "";
    }

    getBuzz(value: number): string {
        return value % 5 === 0 ? "Buzz" : "";
    }
}