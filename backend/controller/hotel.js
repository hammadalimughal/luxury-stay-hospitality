const express = require('express')
const Hotel = require('../schema/Hotel')
const { uploadImage } = require('./upload')
const router = express.Router()

router.post('/new', uploadImage.single('image'), async (req, res) => {
    try {
        const { name, category, keywords, country, address, state, city, zipCode, phone, description } = req.body
        const socials = JSON.parse(req.body.socials)
        console.log('req.body: ', req.body)
        console.log('Image: ', req.file)
        // return
        if (!req.file) {
            return res.json({
                success: false,
                error: `Image is Required!`
            })
        }

        const image = `/uploads/${req.file.filename}`
        const hotel = await Hotel.create({ name, category, keywords, country, address, state, city, zipCode, phone, description, socials, image })

        return res.json({
            success: true,
            hotel
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
        const hotels = await Hotel.aggregate([
            {
                $lookup: {
                    from: "rooms", // The collection name for rooms
                    localField: "_id",
                    foreignField: "hotel",
                    as: "rooms",
                },
            },
            {
                $addFields: {
                    roomCount: { $size: "$rooms" }, // Count the number of rooms
                },
            }
        ]);
        console.log('hotels',hotels)
        return res.json({
            success: true,
            hotels
        })
    } catch (error) {
        return res.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router