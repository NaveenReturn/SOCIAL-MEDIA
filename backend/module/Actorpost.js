const mongoose = require('mongoose');

const ActressPost = new mongoose.Schema({
    post:{
        type:String                           
    },
    type:{
       type:String                            
    },
    description:{
        type:String                           
    },
    user:{
       type:mongoose.SchemaTypes.ObjectId,
       required:'login first',
       ref:'actoers'                            
    },
    createAT:{
       type:Date,
       default:Date.now()                            
    }
})

const modules = mongoose.model('actorpost',ActressPost);

module.exports = modules