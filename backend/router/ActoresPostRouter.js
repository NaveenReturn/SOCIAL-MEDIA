
const express = require('express');
const { CreatePostActor, getActorPost } = require('../controller/ActorPost');
const { isActorAuthenticate, ActorAuthorizedRoles } = require('../middleware/ActorAthenticate');
const Routers = express.Router();
const multer = require('multer');
const path = require('path');

const upload = multer({
    storage:multer.diskStorage({
         destination:function(req,file,cb){
             cb(null,path.join(__dirname,"..","uploads/actorpost"))                      
         },
         filename:function(req,file,cb){
            cb(null,file.originalname)
         }                          
    })                               
})
// URL SECTION

Routers.route('/actorpost').post(isActorAuthenticate,upload.single('avatar'),CreatePostActor);
Routers.route('/getactorpost').get(isActorAuthenticate,getActorPost)

module.exports = Routers;