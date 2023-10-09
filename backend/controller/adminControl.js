const ErrorHandler = require('../ErrorControl/ErrorHandler');
const catchAsync = require('../middleware/catchAsync');
const User = require('../module/userModule');
const Admin = require('../module/adminModule');
const sentToken = require('../utile/jwt');
const { use } = require('../router/AdminRoutee');

exports.adminCreate = catchAsync(async (req,res,next)=>{
        const {name,email,password,avatar} = req.body;
       const admin  = await Admin.create({
             name,
             email,
             password,
             avatar                      
         });
    sentToken(admin,201,res)

})

//Admin Logn - api/cinema/adlogin
exports.adminLogin = catchAsync( async (req,res,next)=>{
     const {email,password} = req.body
     if(!email || !password){
          return next(new ErrorHandler('please enter email && password',401))
     }
     const admin = await Admin.findOne({email}).select('+password');

     if(!admin){
          return next(new ErrorHandler('Invalid user'))
     }

     if(! await admin.ValidPassword(password)){
          return next(new ErrorHandler('Invalid Email or Password',401))
     }
     sentToken(admin,200,res)
})

exports.adminAllUserGet = catchAsync( async (req,res,next)=>{
        
     const user = await User.find(req.body);
     console.log(user)
     if(!user){
         return next(new ErrorHandler('user not available',401))                          
     } 
     res.status(200).json({
          success:true,
          user                         
     })                          
})