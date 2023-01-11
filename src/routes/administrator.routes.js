module.exports =app => {

    const administratos=require("../controllers/administrator.controller.js");
    var router=require("express").Router();

    //GET all administrators
    router.get("/",administratos.findAll);

    //Adaugarea unui administrator
    router.post("/",administratos.create);

    //Stergerea unui administrator
    router.delete("/",administratos.delete);

    //Update aministrator
    router.put("/",administratos.update);

    app.use("/administrator",router);
}