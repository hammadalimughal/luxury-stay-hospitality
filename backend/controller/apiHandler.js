const express = require('express')
const router = express.Router()

router.use('/hotel',require('./hotel'))
router.use('/room',require('./room'))
router.use('/auth',require('./authentication'))
router.use('/contact',require('./contact'))
router.use('/booking',require('./booking'))

module.exports = router