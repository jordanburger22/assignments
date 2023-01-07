const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

app.use('/bounties', require('./routes/bounties.js'))

app.listen(5000, () => {
    console.log('server is running on port 5000')
})