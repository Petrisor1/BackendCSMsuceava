module.exports = app=>
{
    const meci_viitor=require("../controllers/meci_viitor.controller.js");
    var router=require("express").Router();

    router.get("/",meci_viitor.findAll);

    router.post("/",meci_viitor.create);

    router.delete("/:id",meci_viitor.delete);

    router.put("/:id",meci_viitor.update);

    app.use("/meci_viitor",router);
}