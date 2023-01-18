'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable("meciuri_viitors",
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
    data:
    {
        type:Sequelize.DATE()
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE

   })

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("mecirui_viitors");
  }
};
