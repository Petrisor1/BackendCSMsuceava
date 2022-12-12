'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable("media",
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
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE

   })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("media");
  }
};
