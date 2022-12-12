

module.exports=(sequelize,Sequelize) =>
{
    const Sponsor =sequelize.define("sponsor",
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
            type:Sequelize.STRING(255),
            allowNull:false,
            unique:true,
        }
    }
);
    return Sponsor;
}