const express = require('express')
const router = express.Router()
const db=require("../src/models");
const clasament = require("../migrations/20221128122627-create_clasament_table");
// Getting all
// router.get('/', async(req,res) =>
// {
//     try{
//         const csm = await Csm.find()
//         res.json(csm)
//     }catch(err)
//     {
//         res.status(500).json({message:err.message})
//     }
// })

// router.get('/',(req,res)=>
// {
    
// })
// // Getting One
// router.get('/:id', (req,res) =>
// {
//     res.send('post is ok');
// })
// // Creating one
// router.post('/',async (req,res) =>
// {   const csm =new Csm({
//         name: req.body.name,
//         prenume: req.body.prenume
//     })
//     try{
//         const newCsm =await csm.save()
//         res.status(201).json(newCsm)
//     }catch(err)
//     {
//         res.status(400).json({message: err.message})
//     }
   
// })
// // Updating one
// router.patch('/:id', (req,res) =>
// {
    
// })
// // Deleting onew
// router.delete('/:id', (req,res) =>
// {
    
//})
//  async function getCsm(req,res,next)
//  {
//     try{
//         csm=await Csm.findById(req.params.id)
//         if(csm == null)
//         {
//             return res.status(404)
//         }
//     }catch(err)
//     {

//     }
//  }
module.exports = router;