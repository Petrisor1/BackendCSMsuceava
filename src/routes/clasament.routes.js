module.exports = app=>
{
    
    const clasaments=require("../controllers/clasament.controller.js");
     var router=require("express").Router();


     //Get route SELECT * from clasament
     router.get("/",clasaments.findAll);

    //Adaugarea unui clasament
    router.post("/",clasaments.create);

    //Stergerea unui clasament
    router.delete("/",clasaments.delete);

    //Update-ul unui clasament in functie de id
    router.put("/:id",clasaments.update);

    //Gasirea unui singur clasament in functie de numele acestuia
    router.get("/:echipa",clasaments.findOne);

    app.use("/clasament",router);
 //////////////////////////  OLD ///////////////////////////////
 //Get route SELECT * from clasament
//     router.get('/',(req,res)=>
//     {
//     //         console.log(req.body);
//     //     Clasament.findAll().then(clasaments => res.send(clasaments));
//         router.post

//     })

//     //POST req insert data into clasament 

//     router.post('/add',(req,res)=>
//     {
//     //     try{
//     //         if(!req.body)
//     //         {
//     //             res.status(400).send({massage:'Content can not be enpty!'})
//     //         }
//     //         console.log("Rugamintea este: "+req.body);
//     //         const rasp= res.send("Rspunsul este: "+ JSON.stringify(req.body)+"\nRequestul este: "+req.body);
//     //         console.log(rasp.body);
//     //             Clasament.create(
//     //             {   
//     //                 echipa:req.params.echipa,
//     //                 meciuri:req.params.meciuri,
//     //                 victorii:req.params.victorii,
//     //                 infrangeri:req.params.infrangeri,
//     //                 seturi:req.params.seturi,
//     //                 puncte:req.params.puncte,
                    
//     //             }

//     //         ).then(submitedClasament => res.send(submitedClasament.body))
//     //         .catch(err=>
//     //             {
//     //                 res.status.send()
//     //             });
//     //         }
//     //     catch(error)
//     //     {
//     //         console.error(error);
//     //     }
//     })

//     router.delete("/delete/:id",(req,res)=>
//     {
//         Clasament.destroy(
//             {
//                 where:{ 
//                     id:req.params.id
//                 }
                
//             }
//         ).then(()=>res.send("succes"));
//     })
//     module.exports = router;

//     router.put("/update-clasament/:id",(req,res)=>
//     {   console.log(req.body);
//         res.send(req.body);
//         const clasament =  Clasament.create({ echipa: req.params.ecihpa });
//         clasament.update(
//         {   echipa:req.params.echipa,
//             meciuri:req.params.meciuri,
//             victorii:req.params.victorii,
//             infrangeri:req.params.infrangeri,
//             seturi:req.params.seturi,
//             puncte:req.params.puncte,
//             where:{
//                 id:req.params.id,
//                 // $or:[
//                 //     {
//                 //         echipa:
//                 //         {
//                 //             $eq:req.params.echipa
//                 //         }
//                 //     }
//                 // ]
//             }
//         }).then(()=>res.send("Update cu succes"));
//     })

// 
};