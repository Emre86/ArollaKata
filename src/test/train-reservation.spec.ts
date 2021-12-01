import { TrainReservation } from "../main/train-reservation"

describe('Train Reservation test', () => {
    let trainReservation: TrainReservation;
    beforeEach(() => trainReservation = new TrainReservation());

    test('should return json for reservation', () => {
        const trainId = "express_2000";
        const bookingReference = "75bcd15";
        const seats = ["1A", "1B"];
        const reponse = trainReservation.reserve(trainId, bookingReference, seats);
        const expected = { "train_id": trainId, "booking_reference": bookingReference, "seats": seats };

        expect(expected).toStrictEqual(reponse);
    });



});