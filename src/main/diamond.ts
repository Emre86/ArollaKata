export class Diamond {


    range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
    getDiamond(letter: string) {
        const a = "A".charCodeAt(0);
        const l = letter.charCodeAt(0);

        const spaceExtern = this.range(0, (l - a), 1);
        const spaceIntern = this.range(1, (l - a) * 2 - 1, 2);
        spaceIntern.unshift(0);

        let bottomDiamond = '';
        for (let i = 1; i < spaceExtern.length; i++) {
            const lineDiamond = this.generateLineDiamond(String.fromCharCode(l - i), spaceExtern[i], spaceIntern[spaceIntern.length - i - 1]);
            bottomDiamond = bottomDiamond.concat(lineDiamond);
        }

        spaceExtern.reverse();

        let topDiamond = '';
        for (let i = 0; i < spaceExtern.length; i++) {
            const lineDiamond = this.generateLineDiamond(String.fromCharCode(a + i), spaceExtern[i], spaceIntern[i]);
            topDiamond = topDiamond.concat(lineDiamond);
        }

        return `${topDiamond}${bottomDiamond}`;
    }

    generateLineDiamond(letter: string, spaceExtern: number, spaceIntern: number) {
        const extern: string = " ".repeat(spaceExtern);
        const intern: string = " ".repeat(spaceIntern);
        if (spaceIntern === 0) {
            return `${extern}${letter}\n`;
        }
        return `${extern}${letter}${intern}${letter}\n`;
    }


}