'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("clasaments",
    {
      id:{
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        
   },
    echipa:{
        type:Sequelize.STRING(100),
        allowNull:false,
        unique: true,
    },
    meciuri:
    {
        type:Sequelize.INTEGER(11),
        allowNull:false,
        
    },
    victorii:
    {
        type:Sequelize.INTEGER(11),
        allowNull:false,
        
    },
    infrangeri:
    {
        type:Sequelize.INTEGER(11),
        allowNull:false,
       
    },
    seturi:
    {
        type:Sequelize.STRING(250),
        allowNull:false,
        default:"set1"
    },
    puncte:
    {
        type:Sequelize.INTEGER(11),
        allowNull:false,
       
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("clasaments");
  }
};
