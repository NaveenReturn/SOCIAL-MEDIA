const express = require('express');
const { postUser, getUserPost, getAllPost, getSingleUserPost, NameChange } = require('../controller/postControl');
const { isAuthenticated } = require('../middleware/Authenticated');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const upload = multer({
     storage:multer.diskStorage({

      destination:function(req,file,cb){
         cb(null,path.join(__dirname,"..",'uploads/post'))
      },
      filename:function(req,file,cb){
         cb(null,file.originalname)                          
      }                             
})})

router.route('/filepost').post(isAuthenticated,upload.single('postAvatar'),postUser);
router.route('/getpost').get(isAuthenticated,getUserPost);
router.route('/getall').get(getAllPost);
router.route('/getsingleuser/:id').get(getSingleUserPost);
router.route('/namechack/:id').post(NameChange)

module.exports = router