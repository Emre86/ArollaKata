export class TennisGame {

    playerOne: boolean = true;

    playerTwo: boolean = false;
    scorePlayerOne: number = 0;
    scorePlayerTwo: number = 0;

    point: Array<string> = ["love", "15", "30", "40", "win"];

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
            return this.point[this.scorePlayerOne];
        } else {
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
        if (this.isAdvantage) {
            this.isDeuce = false;
            this.isAdvantage = false;
        }

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
        this.playerOne = !this.playerOne;
        this.playerTwo = !this.playerTwo;
        if (this.isAdvantage) {
            this.isAdvantage = false
        }
    }

}