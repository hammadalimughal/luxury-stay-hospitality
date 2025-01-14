const express = require('express')
const Room = require('../schema/Room')
const router = express.Router()

router.post('/new', async (req, res) => {
    try {
        const { title, type, number, hotel, price } = req.body
        const room = await Room.create({ title, type, number, hotel, price })
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

module.exports = router