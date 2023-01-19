const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))


mongoose.set('strictQuery', true)
mongoose.connect(
    'mongodb+srv://jordanburger22:.5HC5.FQHsqYVz8@cluster0.cihycu0.mongodb.net/?retryWrites=true&w=majority',
    () => console.log('Connected to the DB')
)

app.use('/main', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))

app.use('/auth', require('./routes/authRouter.js'))
app.use('/main/posts', require('./routes/postRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(7550, () => {
    console.log('server is running on port 7550')
})