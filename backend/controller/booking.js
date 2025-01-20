const express = require('express')
const Booking = require('../schema/Booking')
const router = express.Router()

router.post('/new', async (req, res) => {
    try {
        const { room, date, user } = req.body
        const booking = await Booking.create({ room, date, user })

        return res.json({
            success: true,
            booking
        })

    } catch (error) {

        console.log(`error at ${req.path}: `, error)
        return res.json({
            success: false,
            error: error.message
        })

    }
})

router.post('/fetchAll', async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const bookings = await Booking.find({
            date: { $gte: today }
        }).populate({
            path: 'room',
            populate: {
                path: 'hotel', // Populate the hotel field from the room
            },
        }).populate('user')
            .sort({ date: 1 });
        return res.json({
            success: true,
            bookings,
        });
    } catch (error) {
        return res.json({
            success: false,
            error: error.message,
        });
    }
});

router.post('/fetchBookedDates', async (req, res) => {
    try {
        const { room } = req.body;

        if (!room) {
            return res.json({
                success: false,
                message: "Room ID is required",
            });
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize to start of the day

        // Fetch bookings starting from today
        const bookedDates = await Booking.find({
            room,
            date: { $gte: today }, // Filter dates from today onward
        }).select('date -_id'); // Return only the `date` field

        // Extract dates for the response
        const bookedDateList = bookedDates.map((booking) => booking.date.toDateString());

        return res.json({
            success: true,
            bookedDates: bookedDateList, // Return array of booked dates
        });

    } catch (error) {
        return res.json({
            success: false,
            error: error.message,
        });
    }
});

router.post('/payment', async (req, res) => {
    try {
        const { id, paid } = req.body
        const booking = await Booking.findById(id)
        booking.paid = paid
        await booking.save()
        res.json({
            success: true
        })
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router