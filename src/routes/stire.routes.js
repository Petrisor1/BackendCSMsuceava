module.exports = app=>
{
    const stiri=require("../controllers/stiri.controller.js");
    var router=require("express").Router();

    router.get("/",stiri.findAll);

    router.post("/",stiri.create);

    router.delete("/:id",stiri.delete);

    router.put("/:id",stiri.update);

    app.use("/stiri",router);
}