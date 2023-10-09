
const express = require('express');
const multer = require('multer');
const path = require('path');
const { actoerCreate, actoerLogin, getSingleActor, ActorLogOut } = require('../controller/Actores');
const routers = express.Router();

const upload = multer({
    storage:multer.diskStorage({
       destination:function(req,file,cb){
          cb(null,path.join(__dirname,"..",'uploads/actoer'))
       },
       filename:function(req,file,cb){
          cb(null,file.originalname)                         
       }                            
    })
})

routers.route('/register').post(upload.single('avatar'),actoerCreate);
routers.route('/login').post(actoerLogin);
routers.route('/singleactor/:id').get(getSingleActor);
routers.route('/logout').get(ActorLogOut);

module.exports = routers;