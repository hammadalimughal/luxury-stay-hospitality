const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
    website: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    email: { type: String }
})

const HotelSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: {
        type: String,
        required: true,
        enum: ['Luxury', 'Budget', 'Boutique', 'Business', 'Resort', 'Hostel', 'Apartment']
    },
    keywords: { type: Array },
    country: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    phone: { type: String },
    socials: socialSchema
}, { timestamps: true });

const Hotel = mongoose.model('hotel', HotelSchema)
module.exports = Hotel;