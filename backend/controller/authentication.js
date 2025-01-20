const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "USD00RD!rEcT!";
const User = require('../schema/User')

router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password } = req.body
        if (firstName && lastName && phone && email && password) {
            const checkUser = await User.findOne({ email })
            if (checkUser) {
                return res.status(409).json({
                    success: false,
                    error: "Email Already Registered"
                })
            }
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)
            newUser = await User.create({ firstName, lastName, email, phone, password: hashPassword })
            const fetchUser = await User.findOne({ email })
            const { _id, role } = fetchUser
            const user = {
                id: _id, firstName, lastName, phone, email, role
            }
            const authtoken = jwt.sign(user, JWT_SECRET);
            res.json({
                success: true,
                authtoken,
                user
            })
        }
        else {
            console.log(req.body)
            res.json({
                success: false,
                error: 'Invalid Form Data'
            })
        }
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
})


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const checkUser = await User.findOne({ email })
            if (!checkUser) {
                return res.status(409).json({
                    success: false,
                    error: "Invalid Credentials"
                })
            }
            const passwordCompare = await bcrypt.compare(password, checkUser.password);
            if (!passwordCompare) {
                return res.status(409).json({
                    success: false,
                    error: "Invalid Credentials"
                })
            }
            const { _id, firstName, lastName, phone, role } = checkUser
            const user = { _id, firstName, lastName, phone, email, role }
            const authtoken = jwt.sign(user, JWT_SECRET);
            res.json({
                success: true,
                authtoken,
                user
            })
        } else {
            console.log(req.body)
            res.json({
                success: false,
                error: 'Invalid Form Data'
            })
        }
    } catch (error) {
        console.log('error', error)
        res.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router