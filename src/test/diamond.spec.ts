import { Diamond } from "../main/diamond"

describe('Diamond unit test', () => {
    let diamond: Diamond;
    beforeEach(() => diamond = new Diamond());

    test('should return Diamond with letter A', () => {
        expect(diamond.getDiamond("A")).toBe("A\n");
    });

    test('should return Diamond with letter B', () => {
        expect(diamond.getDiamond("B")).toBe(" A\nB B\n A\n");
    });

    test('should return Diamond with letter C', () => {
        expect(diamond.getDiamond("C")).toBe("  A\n B B\nC   C\n B B\n  A\n");
    });

    test('should return Diamond with letter D', () => {
        expect(diamond.getDiamond("D")).toBe("   A\n  B B\n C   C\nD     D\n C   C\n  B B\n   A\n");
    });

    test('should return Diamond with letter F', () => {
        expect(diamond.getDiamond("F")).toBe("     A\n    B B\n   C   C\n  D     D\n E       E\nF         F\n E       E\n  D     D\n   C   C\n    B B\n     A\n");
    });
});