export class TrainReservation {

    reserve(trainId: string, bookingReference: string, seats: Array<string>) {
        return { "train_id": "express_2000", "booking_reference": "75bcd15", "seats": ["1A", "1B"] };
    }


}