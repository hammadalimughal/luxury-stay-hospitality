const express = require('express')
const app = express()
require('./db')

const PORT = process.env.PORT || 1535

app.listen(PORT, () => {
    console.log(`App is live on: http://localhost:${PORT}`)
})