export class TennisGame {

    playerOne: boolean = true;

    playerTwo: boolean = false;
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
        } else {
            if (this.scorePlayerTwo > this.point.length - 1) {
                this.scorePlayerTwo = 0;
                return "win";
            }
            return this.point[this.scorePlayerTwo].toString();
        }
    }


    getScorePlayerOne() {
        return "love";
    }

    getScorePlayerTwo() {
        return "love";
    }


    playAndWinCurrentGame() {
        if (this.playerOne) {
            this.scorePlayerOne++;
        }
        if (this.playerTwo) {
            this.scorePlayerTwo++;
        }
    }

    playAndLostCurrentGame() {
        this.playerOne = false;
        this.playerTwo = true;
    }

}