const mongoose=require('mongoose');

const csmSchema = new mongoose.Schema({
        name:{
                type:String,
                required:true,
                default:"Default value"
            },
        prenume:{   
                type:String,
                required:true,
                default:"Default value"
            },
        data:{
            type:Date,
            required:true,
            default:Date.now
        }
    })

module.exports = mongoose.model('Csm',csmSchema)