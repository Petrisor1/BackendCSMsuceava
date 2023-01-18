const {DataTypes, Sequelize}=require("sequelize");
module.exports =(sequelize,Sequelize) =>
{

    const Meci_viitor=sequelize.define("meciuri_viitor",
    {
        id:
        {
            type:Sequelize.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        echipa_unu:
        {
            type:Sequelize.STRING(255),
            allowNull:false
        },
        echipa_doi:
        {
            type:Sequelize.STRING(255),
            allowNull:false
        },
        data:
        {
            type:Sequelize.DATE()
        }

    })
    return Meci_viitor
};