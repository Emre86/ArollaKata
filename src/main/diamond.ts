export class Diamond {


    range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
    getDiamond(letter: string): string {
        const a = "A".charCodeAt(0);
        const l = letter.charCodeAt(0);

        const spaceExtern = this.range(0, (l - a), 1);
        spaceExtern.reverse();

        const spaceIntern = this.range(1, (l - a) * 2 - 1, 2);
        spaceIntern.unshift(0);

        const top: Array<string> = [];
        for (let i = 0; i < spaceExtern.length; i++) {
            const lineDiamond = this.generateLineDiamond(String.fromCharCode(a + i), spaceExtern[i], spaceIntern[i]);
            top.push(lineDiamond);
        }

        const bottom: Array<string> = [...top].reverse();
        bottom.shift();
        const topDiamond = top.join("").toString();
        const bottomDiamond = bottom.join("").toString();

        return `${topDiamond}${bottomDiamond}`;
    }

    generateLineDiamond(letter: string, spaceExtern: number, spaceIntern: number): string {
        const extern: string = " ".repeat(spaceExtern);
        const intern: string = " ".repeat(spaceIntern);
        if (spaceIntern === 0) {
            return `${extern}${letter}\n`;
        }
        return `${extern}${letter}${intern}${letter}\n`;
    }


}