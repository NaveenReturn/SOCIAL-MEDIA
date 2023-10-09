const cinPass = require('../module/CinemaTicketPassword');
const catchAsync = require('../middleware/catchAsync'); 
const ErrorHandler = require('../ErrorControl/ErrorHandler')
exports.TicketPass = catchAsync(async (req,res,next)=>{
    
    const {email,password} = req.body;
    
    const ticket = await cinPass.create({email,password})

    res.status(201).json({
       success:true,
       ticket
    })
})

exports.TicketLogin = catchAsync(async (req,res,next)=>{

    const {email,password} = req.body;

    if(!email || !password){
        return next(new ErrorHandler('please enter email && password',400))
    }

   const user = await cinPass.findOne({email}).select('+password')
   if(!user){
     return next(new ErrorHandler('Invalid Email ',401))
   }

   if(! await user.ValiDatePass(password)){
     return next(new ErrorHandler('does not match password',401)) 
   }
      res.status(200).json({
         success:true,
         message:"success login"
      })
})