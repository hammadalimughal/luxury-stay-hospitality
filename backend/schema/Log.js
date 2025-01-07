const LogSchema = new Schema({
    action: { type: String, required: true },
    performedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Log', LogSchema);
