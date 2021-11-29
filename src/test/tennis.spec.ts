import { TennisGame } from "../main/tennis-game";

describe('Tennis unit test', () => {
    let tGame: TennisGame;
    beforeEach(() => tGame = new TennisGame());

    test('should return love when game Start ', () => {
        expect(tGame.runningScore()).toEqual("love");
    });

    test('should return 15 when player one win', () => {
        tGame.playAndWinCurrentGame();
        const score = tGame.runningScore();
        expect(score).toEqual("15");
    });

    test('should return 30 when player one win', () => {
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        const score = tGame.runningScore();
        expect(score).toEqual("30");
    });

    test('should return 40 when player one win', () => {
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        tGame.playAndWinCurrentGame();
        const score = tGame.runningScore();
        expect(score).toEqual("40");
    });



});