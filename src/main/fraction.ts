export class Fraction {

    public gcd(a: number, b: number) {
        return b === 0 ? a : this.gcd(b, a % b);
    }
}