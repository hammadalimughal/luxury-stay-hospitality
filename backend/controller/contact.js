// ahzam.alam@onesourcetech.org
// Ahzam.alam@1234
const express = require('express')
const sendMail = require('./sendMail')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body
        const html = `
    <div style="border-top:0px solid transparent;border-left:0px solid transparent;border-bottom:0px solid transparent;border-right:0px solid transparent;padding-top:5px;padding-bottom:5px;padding-right:0px;padding-left:0px">
        <div
            style="color:#555555;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.2;padding-top:30px;padding-right:25px;padding-bottom:0px;padding-left:25px">
            <div
            style="line-height:1.2;font-size:12px;color:#555555;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:24px;line-height:1.2;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="font-size:24px"><strong>New form submission on Luxury Stay Hospitality</strong></span>
            </p>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">First Name</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                ${firstName}
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Last Name</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                ${lastName}
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Email</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                <a href="mailto:${email}">${email}</a>
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Phone</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                <a href="tel:${phone}">${phone}</a>
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Message</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                ${message}
            </span>
            </div>
        </div>
    </div>
        `

        await sendMail('ahzamalam32@gmail.com', 'Contact Form - Luxury Stay Hospitality', html)
        res.json({
            success: true,
            message: `Form Submitted Successfully!`
        })
    } catch (error) {
        console.log('error')
        res.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router