module.exports =app => {

    const administrators=require("../controllers/administrator.controller.js");
    var router=require("express").Router();

    //GET all administrators
    router.get("/",administrators.findAll);

    //Adaugarea unui administrator
    router.post("/",administrators.create);

    //Stergerea unui administrator
    router.delete("/:id",administrators.delete);

    //Update aministrator
    router.put("/:id",administrators.update);

    app.use("/administrator",router);
}