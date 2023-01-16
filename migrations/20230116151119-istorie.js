'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('istories',
    {
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
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE

    })
  },

  async down (queryInterface, Sequelize) {
   queryInterface.dropTable('istories');
  }
};
