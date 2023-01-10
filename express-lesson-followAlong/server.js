const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true)

mongoose.connect("mongodb+srv://jordanburger22:.5HC5.FQHsqYVz8@cluster0.cihycu0.mongodb.net/?retryWrites=true&w=majority", () => console.log('connected to database'))

// mongoose.connect("mongodb://localhost:27017/test-db", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// }, () => console.log('connected to database'))

app.use("/movies", require('./routes/movieRouter.js'))
app.use("/tvshows", require('./routes/tvShowRouter.js'))




app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log('server is running on port 9000')
})