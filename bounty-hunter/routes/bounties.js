const express = require('express')
const bountyRouter = express.Router()
const Bounty = require("../models/bounty.js")



bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

bountyRouter.delete("/:bountyId", (req, res) => {
   Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedBounty) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(`succesfully deleted ${deletedBounty.firstName} ${deletedBounty.lastName}`)
   })
})

bountyRouter.put("/:bountyId", (req, res) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        {new: true},
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

    module.exports = bountyRouter