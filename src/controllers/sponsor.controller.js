const db= require("../models");
const Sponsor = db.sponsors;
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
    Sponsor.create(sponsor)
    .then(data=>{res.send(data)}).catch(err=>res.status(500).send({message:"Eroare la crearea sponsorului"}))
};

exports.findAll=(req,res)=>
{
    Sponsor.findAll().then(sponsors=>res.send(sponsors)).catch(err=>res.status(500).send({
        message:"Eroare la obtinerea sponsorilor"
    }))
}

exports.update=(req,res)=>
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
                        message:`Nu se pote updata clasamentul cu id-ul: ${id}`
                    }
                )
            }
        }).catch(err=>res.status(500).send({
            message:`Eroare la updatate-ul clasamentului cu id-ul: ${id} `
        }));
}

exports.delete=(req,res)=>
{
    const id=req.params.id;
    Sponsor.destroy({
        where:{id:id}
    }).then(num=>
        {
            if(num=1)
            {
                res.send({
                    message:"Sponsorul a fost sters cu succes"
                })
            }
            else
            {
                res.send({
                    message:`A aprarut o eraore la stergerea sponsorului cu id-ul: ${id}`
                })
            }
        }).catch(err =>{res.status(500).send({
            message:err.message||`Eroare la stergerea unui sponsor`});
        });
};