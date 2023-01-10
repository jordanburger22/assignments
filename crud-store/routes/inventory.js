const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')


inventoryRouter.get('/', (req, res, next) => {
    Inventory.find((err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})

inventoryRouter.post('/', (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newInventory)
    })
})

inventoryRouter.get("/:inventoryId", (req, res, next) => {
    Inventory.findOne({_id: req.params.inventoryId}, (err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})

inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndDelete({_id: req.params.inventoryId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`succesfully deleted ${deletedItem.name} from the database`)
    })
})

inventoryRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryId},
        req.body,
        {new: true},
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
        )
})


module.exports = inventoryRouter