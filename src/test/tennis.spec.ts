import { TennisGame } from "../main/tennis-game";

describe('Tennis unit test', () => {
    let tennisGame: TennisGame;
    beforeEach(() => tennisGame = new TennisGame());

    test('should return love when game Start ', () => {
        expect(tennisGame.runningScore()).toEqual("love");
    });

});