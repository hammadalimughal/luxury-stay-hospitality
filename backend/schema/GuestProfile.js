const GuestSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    preferences: { type: Map, of: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Guest', GuestSchema);
