const express = require('express')

const Helpers = require('./recipe-model')

const router = express.Router()

router.get('/', (req, res)=>{
    Helpers.getRecipes()
    .then( recipes => {
        res.status(200).json(recipes)
    })
    .catch( err => {
        res.status(500).json({message: 'Failed to get recipes'})
    })
})

router.get('/:id/steps', (req, res)=>{
    const { id } = req.params;

    Helpers.getInstructions(id)
    .then(steps => {
        res.status(200).json(steps)
    })
    .catch(err =>{
        res.status(500).json({message : 'Failed to get intructions'})
    })
})

router.get('/:id/shoppinglist' , (req, res)=> {
    const { id } = req.params;
    Helpers.getShoppingList(id)
    .then(steps => {
        res.status(200).json(steps)
    })
    .catch(err =>{
        res.status(500).json({message : 'Failed to get your shopping list'})
    })
})















module.exports = router;