const express = require('express')
const app = express()
const {v4: uuidv4} = require('uuid')

app.use('/person', require('./middleware/middleware.js'))

const person = {
    _id: uuidv4(),
    firstName: 'George',
    lastName: 'Kerr',
}

app.get('/person', (req, res) => {
    const updatedPerson = Object.assign(person, req.body)
    res.send(updatedPerson)
})


app.listen(7000, () => {
    console.log('server is running')
})