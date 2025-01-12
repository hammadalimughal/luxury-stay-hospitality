const express = require('express')
const Hotel = require('../schema/Hotel')
const { uploadImage } = require('./upload')
const router = express.Router()

router.post('/new', uploadImage.single('image'), async (req, res) => {
    try {
        const { name, category, keywords, country, address, state, city, zipCode, phone, socials } = req.body
        console.log('req.body: ', req.body)
        console.log('Image: ', req.file)
        return
        if (!req.file) {
            return res.json({
                success: false,
                error: `Image is Required!`
            })
        }

        const image = `/uploads/${req.file.filename}`
        const hotel = await Hotel.create({ name, category, keywords, country, address, state, city, zipCode, phone, socials, image })

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

module.exports = router