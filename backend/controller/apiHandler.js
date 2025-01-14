const express = require('express')
const router = express.Router()

router.use('/hotel',require('./hotel'))
router.use('/room',require('./room'))

module.exports = router