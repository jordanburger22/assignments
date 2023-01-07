const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bounties = [
    {
        firstName: 'Luke',
        lastName: 'Skywalker',
        isLiving: "true",
        bounty: '30000',
        type: 'Jedi',
        _id: uuidv4()
    },
    {
        firstName: 'Darth',
        lastName: 'Maul',
        isLiving: "true",
        bounty: '20000',
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Obi-Wan',
        lastName: 'Kenobi',
        isLiving: "false",
        bounty: '5000',
        type: 'Jedi',
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
        res.send(newBounty)
    })

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send('bounty eliminated')
})

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedRequest = req.body
    const updatedBounty = Object.assign(bounties[bountyIndex], updatedRequest)
    res.send(updatedBounty)
})

    module.exports = bountyRouter