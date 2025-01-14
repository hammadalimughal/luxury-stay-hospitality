const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('./db')

const PORT = process.env.PORT || 1535
app.set('view engine', 'ejs');
app.use('/', express.static(__dirname + '/views'));
app.use(bodyParser.json({ limit: '40mb' }))
app.use(bodyParser.urlencoded({ limit: '40mb', extended: true }))
app.use(cookieParser())

app.use('/api', require('./controller/apiHandler'))

app.listen(PORT, () => {
    console.log(`App is live on: http://localhost:${PORT}`)
})