const BillingSchema = new Schema({
    guest: { type: Schema.Types.ObjectId, ref: 'Guest', required: true },
    reservation: { type: Schema.Types.ObjectId, ref: 'Reservation', required: true },
    items: [
        {
            description: { type: String, required: true },
            amount: { type: Number, required: true },
        },
    ],
    total: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Billing', BillingSchema);
