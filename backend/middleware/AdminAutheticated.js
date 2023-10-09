const Admin = require('../module/adminModule');
const catchAsync = require('../middleware/catchAsync');
const ErrorHandler = require('../ErrorControl/ErrorHandler');
const jwt = require('jsonwebtoken')

exports.isAuthenticated = catchAsync(async (req,res,next)=>{
     const {token} = req.cookies;
     if(!token){
        return next(new ErrorHandler('First Login next user search',401))                           
     }

     const verify =  jwt.verify(token,process.env.JWT_SECRET);

    req.admin = await Admin.findById(verify.id);
    next();
})

exports.isAthorizedRole = (...roles)=>{
      return(req,res,next)=>{
          console.log(req.body)
        if(roles.includes(req.admin.role)){
             return next(new ErrorHandler(`Role ${req.admin.role} only alowed`))                      
        }    
        next()                       
      } 
                                
}