module.exports=async ()=>
{
    const Tweet= require("../src/models/Tweet");
    const User =require("../src/models/User");
    const Clasament=require("../src/models/Clasament");
    // User.hasMany(Tweet, {as: "Tweets", foreignKey:'userId'});
    // Tweet.belongsTo(User, {as: "User",foreignKey: 'userId'});
    const errHandler=(err)=>
    {
        console.error("Error: ",err);
    }

//   const user= await  User.create({username:"Abobului Ioan", password:"Ionel"}).catch((errHandler));

//   const tweet =await Tweet.create({content:"Acesta este continutul unui tweet",userId: User.id}).catch(errHandler);

//   const clasament=await Clasament.create({echipa:"Dinamo",meciuri:5,victorii:4,infrangeri:5,seturi:"5-3",puncte:21}).catch(errHandler);
 
//   const users=await User.findAll({where: {username:"Abobului Ioan"},inlude:[{model:Tweet,as:"Tweets"}]}).catch(errHandler);


//  console.log("CVP tweets",JSON.stringify({users}));
};