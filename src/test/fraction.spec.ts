import { Fraction } from "../main/fraction";

describe('Fizz Buzz test', () => {
    let fraction: Fraction;
    beforeEach(() => fraction = new Fraction());

    test('should return 2 with gcd(6,2) ', () => {
        expect(fraction.gcd(6, 2)).toBe(2);
    });
});