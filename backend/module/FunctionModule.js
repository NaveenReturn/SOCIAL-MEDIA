const mongoose = require('mongoose');
const validator = require('validator')

const FunctionToFunction = new mongoose.Schema({
     name:{
        type:String                           
     },
     celebraties:{
        type:String                           
     },
     address:{
        type:String                           
     },
     contact:{
        type:String                           
     },
     email:{
        type:String,
        validate:[validator.isEmail ,'Does Not Email Valid'],                         
     },
     content:{
        type:String                           
     },
     date:{
        type:String                           
     },
     avatar:{
        type:String                           
     },
   //   postuser:{
   //      type:mongoose.SchemaTypes.ObjectId
   //   },
     createAT:{
        type:Date,
        default:Date.now()                           
     }

})

const getFunction = mongoose.model('function',FunctionToFunction);

module.exports = getFunction;