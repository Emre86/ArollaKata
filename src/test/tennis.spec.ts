import { TennisGame } from "../main/tennis-game";

describe('Tennis unit test', () => {
    let tGame: TennisGame;
    beforeEach(() => tGame = new TennisGame());

    test('should return love when game Start ', () => {
        expect(tGame.runningScore()).toEqual("love");
    });

    test('should return 15 when player one win one times', () => {
        tGame.playAndWinCurrentGame();
        const score = tGame.runningScore();
        expect(score).toEqual("15");
    });

    test('should return 30 when player one win two times', () => {
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        const score = tGame.runningScore();
        expect(score).toEqual("30");
    });

    test('should return 40 when player one win three times', () => {
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        const score = tGame.runningScore();
        expect(score).toEqual("40");
    });

    test('should return win when player one win four times', () => {
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        const score = tGame.runningScore();
        expect(score).toEqual("win");
    });

    test('should return love for two player', () => {
        const scorePlayerOne = tGame.getScorePlayerOne();
        const scorePlayerTwo = tGame.getScorePlayerTwo();
        expect(scorePlayerOne).toEqual("love");
        expect(scorePlayerTwo).toEqual("love");
    });

    test('should return love when player one lost the first times', () => {
        tGame.playAndLostCurrentGame();
        const score = tGame.runningScore();
        expect(score).toEqual("love");
    });



});