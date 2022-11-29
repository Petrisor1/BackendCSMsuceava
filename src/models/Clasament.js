const Sequelize =require('sequelize');
const sequelize = require("../database/connection");

module.exports= sequelize.define('Clasament',
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
           
        }
    });
