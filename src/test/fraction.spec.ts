import { Fraction } from "../main/fraction";

describe('Fraction test', () => {
    let fraction: Fraction;
    beforeEach(() => fraction = new Fraction());

    test('should return 2 with gcd(6, 2) ', () => {
        expect(fraction.gcd(6, 2)).toBe(2);
    });

    test('should return 1 with gcd(109, 98) ', () => {
        expect(fraction.gcd(109, 98)).toBe(1);
    });

    test('should return 2 with gcd(1098, 118) ', () => {
        expect(fraction.gcd(1098, 118)).toBe(2);
    });

    test('should return 5 with gcd(65, 55) ', () => {
        expect(fraction.gcd(65, 55)).toBe(5);
    });

    test('should return 10 with gcd(1650, 1520) ', () => {
        expect(fraction.gcd(1650, 1520)).toBe(10);
    });

    test('should return 16 with gcd(528, 512) ', () => {
        expect(fraction.gcd(528, 512)).toBe(16);
    });

    test('should return 49 with gcd(245, 98) ', () => {
        expect(fraction.gcd(245, 98)).toBe(49);
    });

    test('should return 1020 with gcd(3060, 1020) ', () => {
        expect(fraction.gcd(3060, 1020)).toBe(1020);
    });

    test('should return 175 with gcd(952000, 525) ', () => {
        expect(fraction.gcd(952000, 525)).toBe(175);
    });
});