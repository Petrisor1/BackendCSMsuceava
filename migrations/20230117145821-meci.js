'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  return queryInterface.createTable('mecis',
  {
    id:
    {
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    echipa_unu:
    {
        type:Sequelize.STRING(255),
        allowNull:false
    },
    echipa_doi:
    {
        type:Sequelize.STRING(255),
        allowNull:false
    },
    scor:
    {
        type:Sequelize.String(20)
    },
    castigator:
    {
        type:Sequelize.STRING(255),

    },
    data:
    {
        type:Sequelize.DATE()
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
  })
  },

  async down (queryInterface, Sequelize) {
  return  queryInterface.dropTable("mecis");
  }
};
