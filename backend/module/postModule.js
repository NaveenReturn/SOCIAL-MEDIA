const mongoose = require('mongoose');
const { postUser } = require('../controller/postControl');

console.log('user ',postUser)
const postSchema = new mongoose.Schema({
   
        postAvatar:{
            type:String,
            required:[true,'choose the video or image']
        },
        description:{
           type:String,
           required:[true,"enter description"]
        },
        subtitle:{
            type:String,
            required:[true,'title enter']                          
        },
        user:{
           type: mongoose.SchemaTypes.ObjectId,
           required:[true,"id not valid"],
           ref:'users'
        },
        type:{
            type:String,
            required:[true,'video type']
        },
        category:{
            type:String,
            required:[true,'plase select category']
        },
        createAt:{
             type:Date,
             default:Date.now()
        }
        
})



const modul = mongoose.model('postes',postSchema);

module.exports = modul;