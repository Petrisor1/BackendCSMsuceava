const db= require("../models");
const Meci_viitor=db.meciuri_viitors;
const Op=db.Sequelize.Op;

exports.create=(req,res)=>
{
    if(!req.body)
    {
        res.status(400).send({message:"Continutul trimis este gol"});
    }

    const meci_viitor=
    {
        echipa_unu:req.body.echipa_unu,
        echipa_doi:req.body.echipa_doi,
        data:req.body.data
    }
    Meci_viitor.create(meci_viitor).then(data=>{res.send(data)}).catch(err=>res.status(500).send({message:"Eroare la crearea meciului"}))
}

exports.findAll=(req,res)=>
{
    Meci_viitor.findAll().then(meciuri=>res.send(meciuri)).catch(err=>res.status(500).send({
        message:"Eroare la obtinerea Meciurilor"
    }))
}

exports.update=(req,res)=>
{
    const id=req.params.id;

    Meci_viitor.update(req.body,{where:{id:id}}).then(num =>
        {
            if(num==1)
            {
                res.send({
                    message:"Informatia a fost updatata cu succes"
                });
            }
            else{

                res.send(
                    {
                        message:`Nu se pote updata meciul cu id-ul: ${id}`
                    }
                );
            }
        }).catch(err=>
            res.status(500).send({
            message:`Eroare la updatate-ul meciului ` +id
        }))
};

exports.delete=(req,res)=>
{
    const id=req.params.id;
    Meci_viitor.destroy({
        where:{id:id}
    }).then(num=>
        {
            if(num=1)
            {
                res.send({
                    message:"Meciul a fost sters cu succes"
                })
            }
            else
            {
                res.send({
                    message:`A aprarut o eraore la stergerea meciului cu id-ul: ${id}`
                })
            }
        }).catch(err =>{res.status(500).send({
            message:err.message||`Eroare la stergerea unui meci`});
        });
};