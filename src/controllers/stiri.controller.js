const db= require("../models");
const Stire=db.stiri;
const Op=db.Sequelize.Op;

exports.create=(req,res)=>
{
    if(!req.body)
    {
        res.status(400).send({message:"Continutul trimis este gol"});
    }

    const stire=
    {
        titlu:req.body.titlu,
        descriere:req.body.descriere
    }
    Stire.create(stire).then(data=>{res.send(data)}).catch(err=>res.status(500).send({message:"Eroare la crearea unei stiri"}))
}

exports.findAll=(req,res)=>
{
    Stire.findAll().then(stiri=>res.send(stiri)).catch(err=>res.status(500).send({
        message:"Eroare la obtinerea stirilor"
    }))
}

exports.update=(req,res)=>
{
    const id=req.params.id;

    Stire.update(req.body,{where:{id:id}}).then(num =>
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
                        message:`Nu se pote updata stirea cu id-ul: ${id}`
                    }
                )
            }
        }).catch(err=>res.status(500).send({
            message:`Eroare la updatate-ul stirii cu id-ul: ${id} `
        }));
}

exports.delete=(req,res)=>
{
    const id=req.params.id;
    Stire.destroy({
        where:{id:id}
    }).then(num=>
        {
            if(num=1)
            {
                res.send({
                    message:"Stirea a fost sters cu succes"
                })
            }
            else
            {
                res.send({
                    message:`A aprarut o eraore la stergerea stirii cu id-ul: ${id}`
                })
            }
        }).catch(err =>{res.status(500).send({
            message:err.message||`Eroare la stergerea unei stiri`});
        });
};