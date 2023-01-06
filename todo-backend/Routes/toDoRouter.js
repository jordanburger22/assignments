const express = require('express')
const listRouter = express.Router()
const {v4: uuidv4} = require('uuid')


const toDoList = [
    {
        name: "Clean",
        description: "Clean the bedroom",
        completed: false,
        _id: uuidv4()
    },
    {
        name: 'Shopping',
        description: "Need groceries",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Laundry",
        description: "Put away clean laundry",
        completed: false,
        _id: uuidv4()
    }
]

listRouter.route('/')
    .get((req, res) => {
        res.send(toDoList)
    })

    .post((req, res) => {
        const listUpdate = req.body
        listUpdate._id = uuidv4()
        toDoList.push(listUpdate)
        res.send('list updated')
    })


listRouter.get("/:itemId", (req, res) => {
    const itemId = req.params.itemId
    const foundItem = toDoList.find(item => item._id === itemId)
    res.send(foundItem)
})

listRouter.delete("/:itemId", (req, res) => {
    const itemId = req.params.itemId
    const itemIndex = toDoList.findIndex(item => item._id === itemId)
    toDoList.splice(itemIndex, 1)
    res.send('Item removed from list')
})

listRouter.put("/:itemId", (req, res) => {
    const itemId = req.params.itemId
    const itemIndex = toDoList.findIndex(item => item._id === itemId)
    const listUpdate = req.body
    const updatedListItem = Object.assign(toDoList[itemIndex], listUpdate)
    res.send(updatedListItem)
})



module.exports = listRouter