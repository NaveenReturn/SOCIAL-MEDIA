const mongoose = require('mongoose');

const MoviesSchama = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter movie name"],                        
    },
    description:{
         type:String,
         required:[true,"please enter movie subtitle"]                          
    },
    directorname:{
        type:String
    },
    musicdirectorname:{
        type:String,
    },
    starring:{
        type:String
    },
    dancemaster:{
        type:String
    },
    avatar:{
        type:String,
        // required:[true,"please enter movie paner"]                           
    },
    movietype:{
       type:String
    },
    date:{
      type:String,
      required:[true,'please enter date']
    },
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        required:[true,'first login'],
        ref:"users"
    },
    createAT:{
        type:Date,
        default:Date.now()                        
    }                               
});

const Movies = mongoose.model('movies',MoviesSchama);

module.exports = Movies;