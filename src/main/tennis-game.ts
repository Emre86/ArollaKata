export class TennisGame {

    playerOne: boolean = true;
    playerTwo: boolean = false;

    scorePlayerOne: number = 0;
    scorePlayerTwo: number = 0;

    runningScore() {
        if (this.scorePlayerOne === 0 && this.scorePlayerTwo === 0) {
            return "love";
        }
        if (this.playerOne === true) {
            return this.scorePlayerOne.toString();
        }
    }

    playAndWinCurrentGame() {
        this.scorePlayerOne = 15;
    }

}