import { Diamond } from "../main/diamond"

describe('Diamond unit test', () => {
    let diamond: Diamond;
    beforeEach(() => diamond = new Diamond());

    test('should return Diamond with letter A', () => {
        expect(diamond.getDiamond("A")).toBe("A");
    });
});