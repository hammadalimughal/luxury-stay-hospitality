const MaintenanceSchema = new Schema({
    room: { type: Schema.Types.ObjectId, ref: 'Room' },
    issue: { type: String, required: true },
    status: { type: String, enum: ['reported', 'in-progress', 'resolved'], default: 'reported' },
    reportedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Maintenance', MaintenanceSchema);
