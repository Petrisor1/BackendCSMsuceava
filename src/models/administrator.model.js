module.exports=(sequelize,Sequelize)=>
{
    const Administrator=sequelize.define("administrator",
    {
        id:
        {
            type:Sequelize.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        nume:
        {
            type:Sequelize.STRING(150),
            allowNull:false,            
        },
        prenume:
        {
            type:Sequelize.STRING(150),

        },
        parola:
        {
            type:Sequelize.STRING(150),
        },
        email:
        {
            type:Sequelize.STRING(150),
        }
    })
    return Administrator;
}