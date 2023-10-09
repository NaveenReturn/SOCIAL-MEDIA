const express = require('express');
const multer = require('multer');
const path = require('path');


const upload = multer({storage:multer.diskStorage({
      destination:function(req,file,cb){
             cb(null,path.join(__dirname,'..','uploads/user'))                      
      },
      filename:function(req,file,cb){
          cb(null,file.originalname)                         
      }                              
})})

const { userCreate,
     loginUser,
      updateUser, 
      getSingleUser,
       deleteUser,
        getAllUser, 
        UserLogOut,
        userProfile} = require('../controller/userControl');
const { isAuthenticated } = require('../middleware/Authenticated');

const router = express.Router();

router.route('/getall').get(getAllUser)
router.route('/register').post(upload.single('avatar'),userCreate);
router.route('/login').post(loginUser);
router.route('/logout').get(UserLogOut);
router.route('/getsingle/:id').get(getSingleUser)
router.route('/update/:id').put(upload.single('avatar'),updateUser)
router.route('/delete/:id').delete(deleteUser);
router.route('/userprofile').get(isAuthenticated,userProfile)

module.exports = router;