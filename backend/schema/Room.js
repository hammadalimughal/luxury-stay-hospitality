const mongoose = require('mongoose');
const { Schema } = mongoose

const RoomSchema = new Schema({
    title: { type: String, required: true },
    number: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    type: { type: String, enum: ['single', 'double', 'suite'], required: true },
    availability: { type: Boolean, default: true },
    hotel: { type: Schema.Types.ObjectId, ref: 'hotel', required: true },
    image: { type: String },
    status: { type: String, enum: ['clean', 'dirty', 'maintenance'], default: 'clean' },
    price: { type: Number, required: true },
});

module.exports = mongoose.model('room', RoomSchema);
