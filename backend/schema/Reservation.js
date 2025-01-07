const ReservationSchema = new Schema({
    guest: { type: Schema.Types.ObjectId, ref: 'Guest', required: true },
    room: { type: Schema.Types.ObjectId, ref: 'Room', required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    status: { type: String, enum: ['booked', 'checked-in', 'checked-out', 'cancelled'], required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Reservation', ReservationSchema);
