const ErrorHandler = require('../ErrorControl/ErrorHandler');
const catchAsync = require('../middleware/catchAsync');
const User = require('../module/userModule');
const APIFeatures = require('../utile/ApiSearch');
const sentToken = require('../utile/jwt');

exports.userCreate = catchAsync( async(req,res,next)=>{
    const {name,
           email,
          password,
          lifeTitle,
          topmoment }= req.body 
          console.log(name)
          let avatar;
          if(req.file){
               avatar = `${process.env.BACKEND_URL}/uploads/user/${req.file.originalname}`
          }
    const user =  await User.create({name,email,password,lifeTitle,topmoment,avatar})
    console.log('RESULT  ',user)
    if(!user){
       return next(new ErrorHandler("Field missing",400))                           
    }
     sentToken(user,201,res)                         
})

//Get Single User -api/cinema/sinleuser

exports.getSingleUser = catchAsync(async (req,res,next)=>{
       
      const user = await User.findById(req.params.id);
      if(!user){
          return next(new ErrorHandler('this id not invalid'))
      }
      res.status(200).json({
           success:true,
           user
      })
})
//login User -api/cinema/login
exports.loginUser = catchAsync( async (req,res,next)=>{
      const {email,password} = req.body;

      if(!email || !password){
          return next(new ErrorHandler('please enter email && password',400))
      }

     const user = await User.findOne({email}).select('+password')
     if(!user){
       return next(new ErrorHandler('Invalid Email ',401))
     }

     if(! await user.ValidPassword(password)){
       return next(new ErrorHandler('does not match password',401)) 
     }

     sentToken(user,201,res)
})
// USER LOG OUT
exports.UserLogOut = catchAsync(async (req,res,next)=>{

     res.cookie('token',null,{
          expires:new Date(Date.now()),
          httpOnly:true
     }).status(200).json({
          success:true,
          message:"log out success"
     })
})
// userProfile

exports.userProfile = catchAsync(async (req,res,next)=>{
      const user = await User.findById(req.user.id);

      res.status(200).json({
          success:true,
          user
      })
})
//Update User - api/cinema/update

exports.updateUser = catchAsync(async (req,res,next)=>{

     const user = await User.findById(req.params.id);
     if(!user){
          return next(new ErrorHandler('this id does not match',400))
     }

     const {name,lifeTitle,topmoment} = req.body
      let avatar;
      
      if(req.file){
          avatar = `${process.env.BACKEND_URL}/uploads/user/${req.file.originalname}`
      }

     // const users = await User.findByIdAndUpdate(req.params.id,req.body,{
     //      new:true,
     //      runValidators:true,
          
     // })

     const users = await User.findByIdAndUpdate(req.params.id,{name,lifeTitle,topmoment,avatar})

     res.status(200).json({
         success:true,
         users,
         avatar
     })
})

//delete user - api/cinema/delete
exports.deleteUser = catchAsync( async (req,res,next)=>{
     const user = await User.findById(req.params.id);
     if(!user){
          res.status(400).json({
               success:false,
               messsage:"this not available please check"
          })
     }

     const users = await User.findByIdAndDelete(req.params.id);
     if(users){
          res.status(200).json({
                success:true,
                message:"success full deleted"
          })
     }
})

// GET ALL USER

exports.getAllUser = catchAsync(async (req,res,next)=>{
        
        const apifeature = new APIFeatures(User.find(),req.query).search()
        
        const user = await apifeature.query
      res.status(200).json({
           success:true,
           user
      })
})