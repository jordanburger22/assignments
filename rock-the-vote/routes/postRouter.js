const express = require('express')
const post = require("../models/post.js")
const postRouter = express.Router()


// Get All Posts

postRouter.get('/', (req, res, next) => {
    post.find((err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

// Get Posts By User

postRouter.get('/user', (req, res, next) => {
    post.find({user: req.auth._id}, (err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

// Add New Posts

postRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id
    const newPost = new post(req.body)
    newPost.save((err, savedPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPost)
    })
})

// Delete Post

postRouter.delete('/:postId', (req, res, next) => {
    post.findOneAndDelete(
        {_id: req.params.postId, user: req.auth._id},
        (err, deletedPost) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Deleted ${deletedPost.title}`)
        }
    )
})

// Update Post

postRouter.put('/:postId', (req, res, next) => {
    post.findOneAndUpdate(
        {_id: req.params.postId, user: req.auth._id},
        req.body,
        {new: true},
        (err, updatedPost) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPost)
        }
    )
})

module.exports = postRouter