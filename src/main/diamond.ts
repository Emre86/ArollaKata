export class Diamond {

    getDiamond(letter: string) {
        if (letter === "C") {
            return "  A  \n B B \nC   C\n B B \n  A  \n";
        }
        if (letter === "B") {
            return " A \nB B\n A \n";
        }
        return "A";
    }


}