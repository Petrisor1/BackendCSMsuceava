module.exports =app =>
{
    const jucatori=require("../controllers/jucator.controller.js");
    var router=require("express").Router();

    router.get("/",jucatori.findAll);

    router.post("/",jucatori.create);

    //Stergerea unui clasament
    router.delete("/",jucatori.delete);

    //Update-ul unui clasament in functie de id
    router.put("/:id",jucatori.update);

    //Gasirea unui singur clasament in functie de numele acestuia
    router.get("/:echipa",jucatori.findOne);

    app.use("/jucator",router);
}