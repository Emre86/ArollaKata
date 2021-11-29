export class TennisGame {

    playerOne: boolean = true;

    scorePlayerOne: number = 0;
    scorePlayerTwo: number = 0;

    point: Array<number> = [0, 15, 30, 40];

    runningScore() {
        if (this.scorePlayerOne === 0 && this.scorePlayerTwo === 0) {
            return "love";
        }
        if (this.playerOne === true) {
            if (this.scorePlayerOne > this.point.length - 1) {
                this.scorePlayerOne = 0;
                return "win";
            }
            return this.point[this.scorePlayerOne].toString();
        }
    }

    playAndWinCurrentGame() {
        this.scorePlayerOne++;
    }

}