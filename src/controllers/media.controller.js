const db= require("../models");
const Media=db.media;
const Op=db.Sequelize.Op;

exports.create=(req,res)=>
{
    if(!req.body)
    {
        res.status(400).send({message:"Continutul trimis este gol"});
    }

    const media=
    {
        nume:req.body.nume,
        data:req.body.data
    }
    Media.create(media).then(data=>{res.send(data)}).catch(err=>res.status(500).send({message:"Eroare la adaugarea fotografiei"}))
}

exports.findAll=(req,res)=>
{
    Media.findAll().then(sponsors=>res.send(sponsors)).catch(err=>res.status(500).send({
        message:"Eroare la obtinerea continutului media"
    }))
}

exports.update=(req,res)=>
{
    const id=req.params.id;

    Media.update(req.body,{where:{id:id}}).then(num =>
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
                        message:`Nu se pote updata continutul media cu id-ul: ${id}`
                    }
                )
            }
        }).catch(err=>res.status(500).send({
            message:`Eroare la updatate-ul continutului media cu id-ul: ${id} `
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
                    message:"Continut media  sters cu succes"
                })
            }
            else
            {
                res.send({
                    message:`A aprarut o eraore la stergerea cintinutului media cu id-ul: ${id}`
                })
            }
        }).catch(err =>{res.status(500).send({
            message:err.message||`Eroare la stergerea continutului media`});
        });
};