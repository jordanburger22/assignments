const express = require('express')
const tvShowRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const tvShows = [
    {title: "Rick and Morty", id: uuidv4()},
    {title: "Watchmen", id: uuidv4()},
    {title: "Westworld", id: uuidv4()},
    {title: "Friends", id: uuidv4()}
]

tvShowRouter.get('/', (req, res) => {
    res.send(tvShows)
})

tvShowRouter.post("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuidv4()
    tvShows.push(newShow)
    res.send(`Succesfully added ${newShow.title}`)
})



module.exports = tvShowRouter