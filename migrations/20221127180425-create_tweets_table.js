'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable("tweets",
   {
    id:{
      type:Sequelize.INTEGER(11),
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
     },
      content:{
        type:Sequelize.STRING(250),
        allowNull:false,
        unique:"true",
      },
      userId: Sequelize.INTEGER(11),
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE,
      unique:"true",
   })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('tweets');
  }
};
