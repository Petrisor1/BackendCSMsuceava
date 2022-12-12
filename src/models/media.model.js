module.exports=(sequelize,Sequelize) =>
{
    const Media=sequelize.define("media",
    {
        id:
        {
            type:Sequelize.INTEGER(10),
            autoIncrement:true,
            primaryKey:true,
        },
        nume:
        {
            type:Sequelize.STRING(200),
            allowNull:true,
        },
        data:
        {
            type:Sequelize.BLOB("long"),
        },

    })
    return Media;
}