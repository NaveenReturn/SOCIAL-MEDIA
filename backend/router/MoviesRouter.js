const express = require('express');
const { MoviesPost, getAllMovies } = require('../controller/moviesControll');
const routers = express.Router();
const multer = require('multer');
const path = require('path');
const {isAuthenticated} = require('../middleware/Authenticated');
const ErrorHandler = require('../ErrorControl/ErrorHandler');

const upload = multer({storage:multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'..','uploads/movies'))
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)                           
    }
})})

 if(!upload){
    return ErrorHandler('please check file',400)
 }

// router controll
routers.route('/moviesupload').post(isAuthenticated,upload.single('avatar'),MoviesPost);
routers.route('/getallmovies').get(getAllMovies)

module.exports = routers;
