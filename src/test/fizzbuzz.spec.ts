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

    test('should return Fizz with number 9', () => {
        expect(fizzbuzz.getFizzBuzz(9)).toBe('Fizz');
    });

    test('should return Buzz with number 25', () => {
        expect(fizzbuzz.getFizzBuzz(25)).toBe('Buzz');
    });

    test('should return Fizz with number 15', () => {
        expect(fizzbuzz.getFizzBuzz(15)).toBe('FizzBuzz');
    });


    test('should return Fizz with number 60', () => {
        expect(fizzbuzz.getFizzBuzz(60)).toBe('FizzBuzz');
    });

});