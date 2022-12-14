const db= require("../models");
const Istorie=db.istorie;
const Op=db.Sequelize.Op;

exports.create=(req,res)=>
{
    if(!req.body)
    {
        res.status(400).send({message:"Continutul trimis este gol"});
    }

    const sponsor=
    {
        nume:req.body.nume,
    }
    Sponsor.create(sponsor).then(data=>{res.send(data)}).catch(err=>res.status(500).send({message:"Eroare la crearea istoriei"}))
}

exports.findAll=(res,req)=>
{
    Sponsor.findAll().then(sponsors=>res.send(sponsors)).catch(err=>res.status(500).send({
        message:"Eroare la obtinerea istoriei"
    }))
}

exports.update=(res,req)=>
{
    const id=req.params.id;

    Sponsor.update(req.body,{where:{id:id}}).then(num =>
        {
            if(num==1)
            {
                res.send({
                    message:"Informatia a fost updatata cu succes"
                })
            }
            else{

                res.send(
                    {
                        message:`Nu se pote updata istoria cu id-ul: ${id}`
                    }
                )
            }
        }).catch(res.status(500).send({
            message:`Eroare la updatate-ul istoriei cu id-ul: ${id} `
        }));
}

exports.delete=(res,req)=>
{
    const id=req.params.id;
    Sponsor.destroy({
        where:{id:id}
    }).then(num=>
        {
            if(num=1)
            {
                res.send({
                    message:"istoria a fost stearsa cu succes"
                })
            }
            else
            {
                res.send({
                    message:`A aprarut o eraore la stergerea jucatorului cu id-ul: ${id}`
                })
            }
        }).catch(err =>{res.status(500).send({
            message:err.message||`Eroare la stergerea unui jucator`});
        });
};