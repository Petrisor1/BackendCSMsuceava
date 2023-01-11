module.exports= app=>
{
    const istorie=require("../controllers/istorie.controller.js");
    var router=require("express").Router();

    router.get("/",istorie.findAll);

    router.post("/",istorie.create);

    router.delete("/",istorie.delete);

    router.put("/",istorie.update);

    app.use("/istorie",router);
}