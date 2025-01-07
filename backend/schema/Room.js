const RoomSchema = new Schema({
    number: { type: String, required: true, unique: true },
    type: { type: String, enum: ['single', 'double', 'suite'], required: true },
    availability: { type: Boolean, default: true },
    status: { type: String, enum: ['clean', 'dirty', 'maintenance'], default: 'clean' },
    price: { type: Number, required: true },
});

module.exports = mongoose.model('Room', RoomSchema);
