const HousekeepingSchema = new Schema({
    room: { type: Schema.Types.ObjectId, ref: 'Room', required: true },
    task: { type: String, required: true },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'Staff' },
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Housekeeping', HousekeepingSchema);
