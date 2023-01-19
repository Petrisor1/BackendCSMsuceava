const db = require("../models");
const config = require("../../config/auth.config.js");
const Administrator = db.administrators;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt=require("bcryptjs");


exports.signin = (req, res) => {
    Administrator.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(admin => {
        if (!admin) {
          return res.status(404).send({ message: "Email Not found." });
        }
  
            var passwordIsValid ;
          
          if(req.body.parola===admin.parola)  
          {
            passwordIsValid=true;
          }
    
        console.log("Acesta este rezultatul compararii parolelor"+passwordIsValid
        +"\n body: "+req.body.parola+
        "\n Administrator: "+admin.parola);
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Parola nevalida!"
          });
        }
  
        var token = jwt.sign({ id: admin.id }, config.secret, {
          expiresIn: 5 // 24 hours
        });
  
          res.status(200).send({
            id: admin.id,
            email: admin.email,
            accessToken: token
          });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };