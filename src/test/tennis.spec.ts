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

    test('should return 15 when player one lost the first times And player two win the first times', () => {
        tGame.playAndLostCurrentGame();
        tGame.playAndWinCurrentGame();
        const score = tGame.runningScore();
        expect(score).toEqual("15");
    });

    test('should return 30 when player one lost the first times And player two win the next two times', () => {
        tGame.playAndLostCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        const score = tGame.runningScore();
        expect(score).toEqual("30");
    });

    test('should return 40 when player one lost the first times And player two win the next three times', () => {
        tGame.playAndLostCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        const score = tGame.runningScore();
        expect(score).toEqual("40");
    });

    test('should return win when player one lost the first times And player two win the next four times', () => {
        tGame.playAndLostCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        const score = tGame.runningScore();
        expect(score).toEqual("win");
    });

    test('should return love for player one and 15 for player two ', () => {
        tGame.playAndLostCurrentGame();
        tGame.playAndWinCurrentGame();
        const scorePlayerOne = tGame.getScorePlayerOne();
        const scorePlayerTwo = tGame.getScorePlayerTwo();
        expect(scorePlayerOne).toEqual("love");
        expect(scorePlayerTwo).toEqual("15");
    });

    test('should return love for player one and 30 for player two ', () => {
        tGame.playAndLostCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        const scorePlayerOne = tGame.getScorePlayerOne();
        const scorePlayerTwo = tGame.getScorePlayerTwo();
        expect(scorePlayerOne).toEqual("love");
        expect(scorePlayerTwo).toEqual("30");
    });

    test('should return love for player one and 40 for player two ', () => {
        tGame.playAndLostCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        const scorePlayerOne = tGame.getScorePlayerOne();
        const scorePlayerTwo = tGame.getScorePlayerTwo();
        expect(scorePlayerOne).toEqual("love");
        expect(scorePlayerTwo).toEqual("40");
    });

    test('should return 15 for player one and 15 for player two ', () => {
        tGame.playAndWinCurrentGame();
        tGame.playAndLostCurrentGame();
        tGame.playAndWinCurrentGame();
        const scorePlayerOne = tGame.getScorePlayerOne();
        const scorePlayerTwo = tGame.getScorePlayerTwo();
        expect(scorePlayerOne).toEqual("15");
        expect(scorePlayerTwo).toEqual("15");
    });

    test('should return 15 for player one and 30 for player two ', () => {
        tGame.playAndWinCurrentGame();
        tGame.playAndLostCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        const scorePlayerOne = tGame.getScorePlayerOne();
        const scorePlayerTwo = tGame.getScorePlayerTwo();
        expect(scorePlayerOne).toEqual("15");
        expect(scorePlayerTwo).toEqual("30");
    });

    test('should return 30 for player one and 40 for player two ', () => {
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndLostCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        const scorePlayerOne = tGame.getScorePlayerOne();
        const scorePlayerTwo = tGame.getScorePlayerTwo();
        expect(scorePlayerOne).toEqual("30");
        expect(scorePlayerTwo).toEqual("40");
    });

    test('should return deuce for two players', () => {
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndLostCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        const scorePlayerOne = tGame.getScorePlayerOne();
        const scorePlayerTwo = tGame.getScorePlayerTwo();
        const score = tGame.runningScore();
        expect(scorePlayerOne).toEqual("40");
        expect(scorePlayerTwo).toEqual("40");
        expect(score).toEqual("deuce");
    });

    test('should return advantage for the current player', () => {
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndLostCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        const scorePlayerOne = tGame.getScorePlayerOne();
        const scorePlayerTwo = tGame.getScorePlayerTwo();
        const score = tGame.runningScore();
        expect(scorePlayerOne).toEqual("40");
        expect(scorePlayerTwo).toEqual("40");
        expect(score).toEqual("advantage");
    });

});