module.exports = app=>
{
    const sponsors=require("../controllers/sponsor.controller.js");
    var router=require("express").Router();

    router.get("/",sponsors.findAll);

    router.post("/",sponsors.create);

    router.delete("/",sponsors.delete);

    router.put("/:id",sponsors.update);

    app.use("/sponsor",router);
}