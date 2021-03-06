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

    test('should return FizzBuzz with number 15', () => {
        expect(fizzbuzz.getFizzBuzz(15)).toBe('FizzBuzz');
    });

    test('should return FizzBuzz with number 60', () => {
        expect(fizzbuzz.getFizzBuzz(60)).toBe('FizzBuzz');
    });

    test('should return string 2 with number 2', () => {
        expect(fizzbuzz.getFizzBuzz(2)).toBe('2');
    });

    test('should return string 14 with number 14', () => {
        expect(fizzbuzz.getFizzBuzz(14)).toBe('14');
    });

    test('should return string 26 with number 26', () => {
        expect(fizzbuzz.getFizzBuzz(26)).toBe('26');
    });

    test('should return string 59 with number 59', () => {
        expect(fizzbuzz.getFizzBuzz(59)).toBe('59');
    });

});