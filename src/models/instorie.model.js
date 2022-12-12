require.models =(sequelize,Sequelize)=>
{
    const  Istorie=sequelize.define("instorie",{
        id:{
            type:Sequelize.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
       },
        titlu:{
            type:Sequelize.STRING(100),
            allowNull:false,
            unique: true,
        },
        descriere:
        {
            type:Sequelize.STRING(250),
            allowNull:false,
        },
    })
    return Istorie;
}