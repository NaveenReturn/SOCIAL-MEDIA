const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
       name:{
          type:String,
          required:[true,"Please Enter Your Name"]                         
       },
       email:{
          type:String,
          required:[true,'Please Enter Your Email'],
          validate:[validator.isEmail ,'Does Not Email Valid'],
          unique:true                         
       },
       password:{
           type:String,
           required:[true,"Please Enter Password"],
           maxlength:[7,'sorry max character 7'],
           select:false                        
       },
       role:{
          type:String,
          default:'user'
       },
       lifeTitle:{
          type:String,
          required:[true,"Feature Life Title"],
          maxlength:[45,'lifeTile only 45 characters']                         
       },
       topmoment:{
          type:String,
          maxlength:[45,'topmoment sorry max 45 characters'],
          default:"Enjoy Life my self"                         
       },
       avatar:{
          type:String,

       },  
       accountAt:{
          type:Date,
          default:Date.now()                         
       }                          
})
userSchema.pre('save',async function(){
     this.password = await bcrypt.hash(this.password,10)                              
})
userSchema.methods.JsonWebToken = function(){
     return jwt.sign({id:this.id},process.env.JWT_SECRET,{
          expiresIn:process.env.JWT_EXPIRES_TIME
      })
}
userSchema.methods.ValidPassword = async function(enterpasswrd){
     return await bcrypt.compare(enterpasswrd,this.password)
}

const model = mongoose.model('users',userSchema);

module.exports = model;
