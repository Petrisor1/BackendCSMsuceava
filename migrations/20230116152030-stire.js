'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  return queryInterface.createTable('stiris',
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

    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
  })
  },

  async down (queryInterface, Sequelize) {
   queryInterface.dropTable('stires');
  }
};
