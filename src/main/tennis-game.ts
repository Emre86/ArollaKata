export class TennisGame {

    playerOne: boolean = true;

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
            return this.getScorePlayerOne();
        } else {
            return this.getScorePlayerTwo();
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
            } else {
                this.scorePlayerTwo++;
            }
            if (this.scorePlayerOne === 3 && this.scorePlayerOne === this.scorePlayerTwo) {
                this.isDeuce = true;
            }
        }
    }

    playAndLostCurrentGame() {
        this.playerOne = !this.playerOne;
        if (this.isAdvantage) {
            this.isAdvantage = false
        }
    }

}