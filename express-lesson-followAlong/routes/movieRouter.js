const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie.js')



// movieRouter.get('/', (req, res) => {
//     res.send(movies)
// })

// movieRouter.post("/", (req, res) => {
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.send(`Succesfully added ${newMovie.title}`)
// })

movieRouter.get("/", (req, res, next) => {
        Movie.find((err, movies) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(movies)
        })
    })

movieRouter.post("/", (req, res, next) => {
        const newMovie = new Movie(req.body)
        newMovie.save((err, savedMovie) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedMovie)
        })
    })


movieRouter.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if(!foundMovie){
        const error = new Error('the item was not found')
        return next(error)
    }
    res.send(foundMovie)
})


movieRouter.get("/search/genre", (req, res, next) => {
    Movie.find({ genre: req.query.genre }, (err, movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

movieRouter.delete("/:movieId", (req, res, next) => {
    Movie.findOneAndDelete({_id: req.params.movieId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`succesfully deleted item ${deletedItem.title} from the database`)
    })
})

movieRouter.put("/:movieId", (req, res, next) => {
    Movie.findOneAndUpdate(
        {_id: req.params.movieId},
        req.body,
        {new: true},
        (err, updatedMovie) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
})


module.exports = movieRouter