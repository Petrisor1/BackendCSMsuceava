'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("administrators",
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
            type:Sequelize.STRING(150),
            allowNull:false,            
        },
        prenume:
        {
            type:Sequelize.STRING(150),

        },
        parola:
        {
            type:Sequelize.STRING(150),
        },
        email:
        {
            type:Sequelize.STRING(150),
        },
        createdAt:Sequelize.DATE,
        updatedAt:Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("administrators");
  }
};
