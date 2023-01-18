const dbConfig=require("../database/db.config.js");
const Sequelize=require("sequelize");

const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorAliases:false,
    
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.clasaments = require('./clasament.model.js')(sequelize,Sequelize);
db.aministrators=require('./administrator.model.js')(sequelize,Sequelize);
db.istorie = require('./istorie.model.js')(sequelize,Sequelize);
db.jucators=require('./jucator.model.js')(sequelize,Sequelize);
db.media=require('./media.model.js')(sequelize,Sequelize);
db.sponsors=require('./sponsor.model.js')(sequelize,Sequelize);
db.stiri=require('./stire.model.js')(sequelize,Sequelize);
db.mecis=require('./meci.model.js')(sequelize,Sequelize);
db.meciuri_viitors=require('./meci_viitor.model.js')(sequelize,Sequelize);
module.exports =db;