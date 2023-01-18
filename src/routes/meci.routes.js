module.exports= app=>
{
    const meci=require("../controllers/meci.controller.js");
    var router=require("express").Router();

    router.get("/",meci.findAll);

    router.post("/",meci.create);

    router.delete("/:id",meci.delete);

    router.put("/:id",meci.update);

    app.use("/meci",router);
}