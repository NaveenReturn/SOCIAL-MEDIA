const ErrorHandler = require('../ErrorControl/ErrorHandler');
const catchAsync = require('../middleware/catchAsync');
const Actor = require('../module/ActoresModule');
const sendToken = require('../utile/ActorJWT');

exports.actoerCreate = catchAsync(async (req,res,next)=>{
      const {name,email,password,category} = req.body;
      let avatar;
      if(req.file){
        avatar = `${process.env.BACKEND_URL}/uploads/actoer/${req.file.originalname}`
      }
     const actor = await Actor.create({name,email,password,category,avatar});
     sendToken(actor,201,res)
     
})

// login
exports.actoerLogin = catchAsync(async (req,res,next)=>{
     const {email,password} = req.body;
     if(!email || !password){
        return  next(new ErrorHandler("please enter email && password",400))                         
     }
    const actor = await Actor.findOne({email}).select('+password')
    if(!actor){
       return next(new ErrorHandler('user not found',401))                           
    }
    if(! await actor.PasswordValid(password)){
      return  next(new ErrorHandler("does't not match password"))                           
    }
    sendToken(actor,200,res)
})

// GET ACTOR SINGLE 
exports.getSingleActor = catchAsync(async (req,res,next)=>{
    
          const actor = await Actor.findById(req.params.id);
            if(!actor){
               return next(new ErrorHandler('user not available....',401))
            }
          res.status(200).json({
             success:true,
             actor
          })
})

// ACTOR LOGOUT
 
exports.ActorLogOut = catchAsync(async (req,res,next)=>{
        res.cookie('token',null,{
          expires:new Date(Date.now()),
          httpOnly:true
     }).status(200).json({
          success:true,
          message:"log out success"
     })
})