const express = require('express')
const middle = express.Router()


middle.use('/', (req, res, next) => {
    const employment = {hired: true}
    req.body = employment
    next()
})

module.exports = middle








