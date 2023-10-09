const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Actoress = new mongoose.Schema({
    name:{
       type:String,
       required:[true,'please enter name']
    },
    email:{
       type:String,
       required:[true,"please enter email"],
       validate:[validator.isEmail,"email not valid"],
       unique:true
    },
    password:{
       type:String,
       required:[true,"please enter password"],
       select:false
    },
    role:{
       type:String,
       default:'actor'
    },
    avatar:{
      type:String
    },
    category:{
      type:String,
      required:[true,"please enter category"]
    },
    CREATEAT:{
       type:Date,
       default:Date.now()
    }
});
Actoress.pre('save',async function(){
    this.password = await bcrypt.hash(this.password,10)
})
Actoress.methods.JsonWebTokens = function(){
       return jwt.sign({id:this.id},process.env.JWT_SECRET,{
             expiresIn:process.env.JWT_EXPIRES_TIME                      
        })
}
Actoress.methods.PasswordValid = async function(entrypassword){
    return await bcrypt.compare(entrypassword,this.password)
}
const ActoresModule = mongoose.model('actoer',Actoress);

module.exports = ActoresModule;