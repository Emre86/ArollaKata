import { Diamond } from "../main/diamond"

describe('Diamond unit test', () => {
    let diamond: Diamond;
    beforeEach(() => diamond = new Diamond());

    test('should return Diamond with letter A', () => {
        expect(diamond.getDiamond("A")).toBe("A");
    });

    test('should return Diamond with letter B', () => {
        expect(diamond.getDiamond("B")).toBe(" A\nB B\n A\n");
    });

    test('should return Diamond with letter C', () => {
        expect(diamond.getDiamond("C")).toBe("  A\n B B\nC   C\n B B\n  A\n");
    });

});