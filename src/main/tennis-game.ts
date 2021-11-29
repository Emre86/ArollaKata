export class TennisGame {

    playerOne: boolean = true;

    playerTwo: boolean = false;
    scorePlayerOne: number = 0;
    scorePlayerTwo: number = 0;

    point: Array<string> = ["love", "15", "30", "40"];

    isDeuce = false;

    isAdvantage = false;
    runningScore() {

        if (this.isAdvantage) {
            return "advantage";
        }

        if (this.isDeuce) {
            return "deuce";
        }

        if (this.playerOne === true) {
            if (this.scorePlayerOne > this.point.length - 1) {
                this.scorePlayerOne = 0;
                return "win";
            }
            return this.point[this.scorePlayerOne];
        } else {
            if (this.scorePlayerTwo > this.point.length - 1) {
                this.scorePlayerTwo = 0;
                return "win";
            }
            return this.point[this.scorePlayerTwo];
        }
    }


    getScorePlayerOne() {
        return this.point[this.scorePlayerOne];
    }

    getScorePlayerTwo() {
        return this.point[this.scorePlayerTwo];
    }


    playAndWinCurrentGame() {

        if (this.isDeuce) {
            this.isAdvantage = true;
        } else {
            if (this.playerOne) {
                this.scorePlayerOne++;
            }
            if (this.playerTwo) {
                this.scorePlayerTwo++;
            }

            if (this.scorePlayerOne === 3 && this.scorePlayerOne === this.scorePlayerTwo) {
                this.isDeuce = true;
            }
        }
    }

    playAndLostCurrentGame() {
        this.playerOne = false;
        this.playerTwo = true;
    }

}