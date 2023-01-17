module.exports= app=>
{
    const meci=require("../controllers/meci.controller.js");
    var router=require("express").Router();

    router.get("/",meci.findAll);

    router.post("/",meci.create);

    router.delete("/",meci.delete);

    router.put("/",meci.update);

    app.use("/meci",router);
}