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

    test('shoud return json for seats and booking_reference for a train', () => {
        const trainId = "express_2000";
        const reponse = trainReservation.booking(trainId);
        const expected = { "seats": { "1A": { "booking_reference": "", "seat_number": "1", "coach": "A" }, "2A": { "booking_reference": "", "seat_number": "2", "coach": "A" } } };
        expect(expected).toStrictEqual(reponse);
    });

});