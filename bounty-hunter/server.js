const express = require('express')
const app = express()

app.use(express.json())

app.use('/bounties', require('./routes/bounties.js'))

app.listen(5000, () => {
    console.log('server is running on port 9000')
})