const express = require('express')
const router = express.Router()
const Clasament=require(`../models/Clasament`);


//Get route SELECT * from clasament
router.get('/',(req,res)=>
{
    Clasament.findAll().then(clasaments => res.send(clasaments));
})

//POST req insert data into clasament 

router.post('/add',(req,res)=>
{

     console.log("Rugamintea este: "+JSON.stringify(req.body));
     const rasp= res.send("Rspunsul este: "+ JSON.stringify(req.body));
    console.log(rasp.body);
     //    Clasament.create(
//         {   
//             echipa:req.params.echipa,
//             meciuri:req.params.meciuri,
//             victorii:req.params.vicotii,
//             infrangeri:req.params.infrangeri,
//             seturi:req.params.seturi,
//             puncte:req.params.puncte,
            
//         }

//      ).then(submitedClasament => res.send(submitedClasament.body));
 })

 router.delete("/delete/:id",(req,res)=>
 {
    Clasament.destroy(
        {
            where:{ 
                id:req.params.id
            }
               
        }
    ).then(()=>res.send("succes"));
 })
module.exports = router;