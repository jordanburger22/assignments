const express = require('express')
const app = express()

app.use(express.json())

app.use('/todolist', require("./Routes/toDoRouter.js"))



app.listen(4000, () => {
    console.log('server is running')
})