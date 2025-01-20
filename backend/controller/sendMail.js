const nodemailer = require('nodemailer');

const sendMail = async (to, subject, html) => {
    return new Promise(async (resolve, reject) => {
        const transporter = await nodemailer.createTransport({
            host: 'webversedesigns.com',
            port: 465,
            secure: true, // Use true if you're using port 465 (SSL)
            auth: {
                user: 'ahzam@webversedesigns.com',
                pass: 'Ahzam.alam@1234'
            },
            tls: {
                // Do not fail on invalid certs
                rejectUnauthorized: false
            }
        });

        // Construct the email message
        const mailOptions = {
            from: 'ahzam@webversedesigns.com',
            to: to,
            subject: subject,
            html: html
        };
        var success = false
        // Send the email
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
        return success

    })
}

module.exports = sendMail