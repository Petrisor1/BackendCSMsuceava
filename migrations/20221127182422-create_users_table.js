'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable("users",
   {
     id:{
      type:Sequelize.INTEGER(11),
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
  },
  username:{
      type:Sequelize.STRING(100),
      allowNull:false,
      unique:true,
  },
  password:
  {
      type:Sequelize.STRING(30),
      allowNull:false
  },
  createdAt:Sequelize.DATE,
  updatedAt:Sequelize.DATE
   });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
