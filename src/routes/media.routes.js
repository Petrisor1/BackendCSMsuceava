module.exports=app=>
{
    const media=require("../controllers/media.controller.js");
    var router=require("express").Router();

    router.get("/",media.findAll);
    router.post("/",media.create);
    router.delete("/",media.delete);
    router.put("/:id",media.update);

    app.use("/media",router);
}