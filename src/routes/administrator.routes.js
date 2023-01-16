module.exports =app => {

    const administrators=require("../controllers/administrator.controller.js");
    var router=require("express").Router();

    //GET all administrators
    router.get("/",administrators.findAll);

    //Adaugarea unui administrator
    router.post("/",administrators.create);

    //Stergerea unui administrator
    router.delete("/",administrators.delete);

    //Update aministrator
    router.put("/",administrators.update);

    app.use("/administrator",router);
}