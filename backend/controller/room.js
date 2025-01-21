const express = require('express')
const Room = require('../schema/Room')
const router = express.Router()
const { uploadImage } = require('./upload')

router.post('/new', uploadImage.single('image'), async (req, res) => {
    try {
        console.log('req.body', req.body)
        const { title, type, number, hotel, price, description } = req.body
        if (!req.file) {
            return res.json({
                success: false,
                error: `Image is Required!`
            })
        }
        const image = `/uploads/${req.file.filename}`
        const room = await Room.create({ title, type, number, hotel, price, description, image })
        res.json({
            success: true,
            room
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            error: error.message
        })
    }
})

router.post('/fetchAllRooms', async (req, res) => {
    try {
        const rooms = await Room.find().populate('hotel')
        res.json({
            success: true,
            rooms
        })
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Room.findByIdAndDelete(id)
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

router.post('/fetchHotelRooms', async (req, res) => {
    try {
        const { id } = req.body
        console.log('id', id)
        const rooms = await Room.find({ hotel: id }).populate('hotel')
        res.json({
            success: true,
            rooms
        })
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router