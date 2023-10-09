const mongoose = require('mongoose');

const Storys = new mongoose.Schema({
     subtitle:{
          type:String,
          required:[true,"please enter Title"]                         
     },
     content:{
         type:String,
         required:[true,"Write Content"]                          
     },
     avatar:{
         type:String,                          
     },
     category:{
         type:String
     },
     storytype:{
        type:String,
        default:'publick'
     },
     user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"users"
     },
     createAT:{
        type:Date,
        default:Date(Date.now())                           
     }
})

const story = mongoose.model('story',Storys);
module.exports = story