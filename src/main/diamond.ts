export class Diamond {

    getDiamond(letter: string) {
        if (letter === "C") {
            const a = this.generateDisplay("A", 2, 0);
            const b = this.generateDisplay("B", 1, 1);
            const c = this.generateDisplay("C", 0, 3);
            return `${a}${b}${c}${b}${a}`;
        }
        if (letter === "B") {
            const a = this.generateDisplay("A", 1, 0);
            const b = this.generateDisplay("B", 0, 1);
            return `${a}${b}${a}`;
        }
        return "A";



    }


    generateDisplay(letter: string, spaceExtern: number, spaceIntern: number) {
        const extern: string = " ".repeat(spaceExtern);
        const intern: string = " ".repeat(spaceIntern)
        if (spaceIntern === 0) {
            return `${extern}${letter}\n`;
        }
        return `${extern}${letter}${intern}${letter}\n`;
    }


}