const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bounties = [
    {
        firstName: 'Luke',
        lastName: 'Skywalker',
        isLiving: true,
        bounty: '30000 credits',
        type: 'Jedi',
        _id: uuidv4()
    },
    {
        firstName: 'Darth',
        lastName: 'Maul',
        isLiving: true,
        bounty: '20000 credits',
        type: 'sith',
        _id: uuidv4()
    }
]

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })

    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send('Bounty succesfully added.')
    })

    module.exports = bountyRouter