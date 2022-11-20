const express = require('express')
const router = express.Router()
const Csm =require('../models/csm')

// Getting all
router.get('/', async(req,res) =>
{
    try{
        const csm = await Csm.find()
        res.json(csm)
    }catch(err)
    {
        res.status(500).json({message:err.message})
    }
})
// Getting One
router.get('/:id', (req,res) =>
{
    res.send('post is ok');
})
// Creating one
router.post('/',async (req,res) =>
{   const csm =new Csm({
        name: req.body.name,
        prenume: req.body.prenume
    })
    try{
        const newCsm =await csm.save()
        res.status(201).json(newCsm)
    }catch(err)
    {
        res.status(400).json({message: err.message})
    }
   
})
// Updating one
router.patch('/:id', (req,res) =>
{
    
})
// Deleting onew
router.delete('/:id', (req,res) =>
{
    
})
module.exports = router