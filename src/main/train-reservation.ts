export class TrainReservation {

    reserve(trainId: string, bookingReference: string, seats: Array<string>) {
        return { "train_id": trainId, "booking_reference": bookingReference, "seats": seats };
    }

    booking(trainId) {
        return { "seats": { "1A": { "booking_reference": "", "seat_number": "1", "coach": "A" }, "2A": { "booking_reference": "", "seat_number": "2", "coach": "A" } } };
    }

}