const express = require('express')
const movieRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const movies = [
    {title: 'die hard', genre: 'action', _id: uuidv4()},
    {title: 'star wars', genre: 'fantasy', _id: uuidv4()},
    {title: 'lion king', genre: 'fantasy', _id: uuidv4()},
    {title: 'friday the 13th', genre: 'horror', _id: uuidv4()}
    
]

// movieRouter.get('/', (req, res) => {
//     res.send(movies)
// })

// movieRouter.post("/", (req, res) => {
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.send(`Succesfully added ${newMovie.title}`)
// })

movieRouter.route("/")
    .get((req, res) => {
        res.send(movies)
    })

    .post((req, res) => {
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.send(`Succesfully added ${newMovie.title}`)
    })


movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})


movieRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter( movie => movie.genre === genre)
    res.send(filteredMovies)
})


module.exports = movieRouter