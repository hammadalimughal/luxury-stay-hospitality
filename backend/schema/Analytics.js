const ReportSchema = new Schema({
    type: { type: String, enum: ['occupancy', 'revenue', 'feedback'], required: true },
    data: { type: Map, of: Schema.Types.Mixed },
    generatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report', ReportSchema);
