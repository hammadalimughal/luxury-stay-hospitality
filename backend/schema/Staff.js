const StaffSchema = new Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    phone: { type: String },
    email: { type: String, unique: true },
    hireDate: { type: Date, default: Date.now },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Staff', StaffSchema);
