import { FizzBuzz } from "../main/fizzbuzz"

describe('Fizz Buzz test', () => {
    let fizzbuzz: FizzBuzz;
    beforeEach(() => fizzbuzz = new FizzBuzz());

    test('should return Fizz with number 3', () => {
        expect(fizzbuzz.getFizzBuzz(3)).toBe('Fizz');
    });

    test('should return Buzz with number 5', () => {
        expect(fizzbuzz.getFizzBuzz(5)).toBe('Buzz');
    });

});