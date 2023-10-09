

const express = require('express');
const { StoryCreate, getAllStorys, getUserStory, getSingleStory, StoryUpdate } = require('../controller/storyControl');
const { isAuthenticated } = require('../middleware/Authenticated');
const routers = express.Router();
const multer = require('multer');
const path = require('path');

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,path.join(__dirname,"..","uploads/storys"))                       
        },
        filename:function(req,file,cb){
           cb(null,file.originalname)                        
        }                           
    })                               
})

routers.route('/create').post(isAuthenticated,upload.single('avatar'),StoryCreate);
routers.route('/getall').get(getAllStorys);
routers.route('/getstorylogin').get(isAuthenticated,getUserStory);
routers.route('/getsinglestory/:id').get(getSingleStory);
routers.route('/storyupdate/:id').put(upload.single('avatar'),StoryUpdate);

module.exports = routers;