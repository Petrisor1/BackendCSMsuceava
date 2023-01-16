
module.exports = (sequelize,Sequelize)=>
{
    const Stire=sequelize.define("stiri",
    {
        id:
        {
            type:Sequelize.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,

        },
        titlu:
        {
            type:Sequelize.STRING(255),
            allowNull:true,
            
        },
        descriere:
        {
            type:Sequelize.STRING(255),
            allowNull:true,

        }

    });
    return Stire;
};