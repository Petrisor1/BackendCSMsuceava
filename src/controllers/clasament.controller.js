const db = require("../models");
const Clasament = db.clasaments;
const Op=db.Sequelize.Op;

exports.create=(req,res) => 
{
    if(!req.body)
    {
        res.status(400).send(
            {
                message:"Continutul nu poate fi gol!"
            }
        )
    }
   // return;

    const clasament=
    {
        echipa:req.body.echipa,
        meciuri:req.body.meciuri,
        victorii:req.body.victorii,
        infrangeri:req.body.infrangeri,
        seturi:req.body.seturi,
        puncte:req.body.puncte
    }
    Clasament.create(clasament)
    .then( data => {res.send(data) }).catch(err=> res.status(500).send({
        message:"Eraore la crearea unui nou clasament"
    }))
};

exports.findAll=(req,res) =>
{
    Clasament.findAll().then(clasaments =>res.send(clasaments)).catch(err=>res.status(500).send({
        message:"Eroare la obtinerea clasamentelor"
    }))


}

exports.findOne=(res,req)=>
{
    const team=req.body.echipa;
    Clasament.findOne({where:{echipa:team}}).then(date=>res.send(data)).catch(
        err=>res.status(500).send({message:"Eroare la obitinerea unui clasament"})
    );
}

exports.update=(res,req)=>
{
    const id=req.params.id;

    Clasament.update(req.body,{where:{id:id}}).then(num =>
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
                        message:`Nu se pote updata clasamentul cu id-ul: ${id}`
                    }
                )
            }
        }).catch(res.status(500).send({
            message:`Eroare la updatate-ul clasamentului cu id-ul: ${id} `
        }));
}

exports.delete=(res,req)=>
{
    const id=req.params.id;
    Clasament.destroy({
        where:{id:id}
    }).then(num=>
        {
            if(num=1)
            {
                res.send({
                    message:"Clasamentul a fost sters cu succes"
                })
            }
            else
            {
                res.send({
                    message:`A aprarut o eraore la stergerea clasamentului cu id-ul: ${id}`
                })
            }
        }).catch(err =>{res.status(500).send({
            message:err.message||`Eroare la stergerea unui clasament`});
        });
};
