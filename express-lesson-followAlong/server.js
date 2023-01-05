const express = require('express')
const app = express()

app.use(express.json())

app.use("/movies", require('./routes/movieRouter.js'))
app.use("/tvshows", require('./routes/tvShowRouter.js'))



app.listen(9000, () => {
    console.log('server is running on port 9000')
})