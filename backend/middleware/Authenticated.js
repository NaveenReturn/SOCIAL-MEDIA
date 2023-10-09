const User = require('../module/userModule');
const catchAsync = require('../middleware/catchAsync');
const ErrorHandler = require('../ErrorControl/ErrorHandler');
const jwt = require('jsonwebtoken')

exports.isAuthenticated = catchAsync( async (req,res,next)=>{
       const {token} = req.cookies;

       if(!token){
           return next(new ErrorHandler('First Login Next Move',401))                       
       }

      const verify =  jwt.verify(token,process.env.JWT_SECRET)
      req.user = await User.findById(verify.id)
      next();
})


exports.authorizedRoles = (...roles)=>{
        return(req,res,next)=>{
             if(!roles.includes(req.user.role)){
                 return next(new ErrorHandler(`Role ${req.user.role} is not allowed`))
             }
             next()
        }
}
