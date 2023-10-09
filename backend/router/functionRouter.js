

const express = require('express');
const { FunctionCreate, getALLFunction } = require('../controller/functionControl');
const Routers = express.Router();
const multer = require('multer');
const path = require('path');
const { isAuthenticated } = require('../middleware/Authenticated');
const { isActorAuthenticate } = require('../middleware/ActorAthenticate');

const upload = multer({
    storage:multer.diskStorage({
         destination:function(req,file,cb){
             cb(null,path.join(__dirname,"..","uploads/event"))                      
         },
         filename:function(req,file,cb){
            cb(null,file.originalname)
         }                          
    })                               
})

Routers.route('/functioncreate').post(upload.single('avatar'),FunctionCreate);
Routers.route('/getallfunction').get(getALLFunction)

module.exports = Routers;