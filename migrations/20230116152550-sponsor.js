'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('sponsors',
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
            type:Sequelize.STRING(255),
            allowNull:false,
            unique:true,
        },
        createdAt:Sequelize.DATE,
        updatedAt:Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
   queryInterface.dropTable('sponsors');
  }
};
