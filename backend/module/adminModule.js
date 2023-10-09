const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
       name:{
           type:String,
           required:[true,'please enter name']                        
       },
       email:{
          type:String,
          required:[true,'please enter email'],
          validate:[validator.isEmail,'email not valid plaese check'],
          unique:true                         
       },
       password:{
            type:String,
            required:[true,'please enter password'],
            select:false,                       
       },
       role:{
         type:String,
         default:'admin'
       },
       avatar:{
          type:String
       },
       createAt:{
          type:Date,
          default:Date.now()                         
       }                            
})
adminSchema.pre('save',async function(){
      this.password = await bcrypt.hash(this.password,10)
})
adminSchema.methods.JsonWebToken = function(){
     return jwt.sign({id:this.id},process.env.JWT_SECRET,{
             expiresIn:process.env.JWT_EXPIRES_TIME                      
      })                             
}
adminSchema.methods.ValidPassword = async function(enterpassword){
    return await bcrypt.compare(enterpassword,this.password)
}
const modul = mongoose.model('admin',adminSchema);

module.exports = modul;