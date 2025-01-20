const mongoose = require('mongoose');
const { Schema } = mongoose

const bookingSchema = new Schema({
    room: { type: Schema.Types.ObjectId, ref: 'room', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    paid: { type: Boolean, default: false },
    date: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('booking', bookingSchema);