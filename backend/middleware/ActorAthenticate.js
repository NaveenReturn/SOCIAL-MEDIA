const Actor = require('../module/ActoresModule');
const catchAsync = require('../middleware/catchAsync');
const ErrorHandler = require('../ErrorControl/ErrorHandler');
const jwt = require('jsonwebtoken');

exports.isActorAuthenticate = catchAsync(async (req,res,next)=>{
   
       const {token} = req.cookies;  
       if(!token){
        return  next(new ErrorHandler('First Login',401))                         
       }  
       
       const verify =  jwt.verify(token,process.env.JWT_SECRET);

       req.actor = await Actor.findById(verify.id)
       next();
})

// exports.ActorAuthorizedRoles = async (...roles)=>{
       
//        return(req,res,next)=>{
//               console.log('entry-----1')
//             if(!roles.includes(req.user.role)){
//                 return next(new ErrorHandler(`Role ${req.user.role} is not allowed`))
//             }
            
//             next()
//        }
        
// }