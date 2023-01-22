const express = require('express')
const UserExercise = require('../models/userExercise.js')
const UserExerciseRouter = express.Router()

// Get Exercises by Workout

UserExerciseRouter.get('/:workoutId', (req, res, next) => {
    UserExercise.find({workout: req.params.workoutId}, (err, exercises) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(exercises)
    })
})



// Add Exercise
UserExerciseRouter.post('/:workoutId', (req, res, next) => {
    req.body.workout = req.params.workoutId
    const newExercise = new UserExercise(req.body)
    newExercise.save((err, savedExercise) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedExercise)
    })
})


module.exports = UserExerciseRouter