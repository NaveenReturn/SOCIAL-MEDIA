const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const CinemaPassword = new mongoose.Schema({
     email:{
         type:String,
         required:[true,'please enter email']
     },
     password:{ 
        type:String,
        required:[true,'please enter password']
     },
     role:{
        type:String,
        default:"main"
     },
     reateAT:{
         type:Date,
         default:new Date(Date.now())
     }
})
CinemaPassword.pre('save',async function(){
     this.password = await bcrypt.hash(this.password,10)
})
CinemaPassword.methods.ValiDatePass = async function(password){
      return await bcrypt.compare(password,this.password)
}

const CinemaPasswords = mongoose.model('ticketpassword',CinemaPassword);

module.exports = CinemaPasswords;