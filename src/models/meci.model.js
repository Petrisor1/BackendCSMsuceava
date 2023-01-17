const {DataTypes, Sequelize}=require("sequelize");
module.exports =(sequelize,Sequelize) =>
{

    const Meci=sequelize.define("meci",
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
        stare:
        {
            type:Sequelize.STRING(),

        },
        data:
        {
            type:Sequelize.DATE()
        }

    })
    return Meci
};