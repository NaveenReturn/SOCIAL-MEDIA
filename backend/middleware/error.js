const ErrorHandler = require('../ErrorControl/ErrorHandler')

module.exports =(err,req,res,next)=>{
     err.statusCode = err.statusCode || 500

     if(process.env.NODE_MON == 'developer'){
     res.status(err.statusCode).json({
         success:false,
         message:err.message,
         stack:err.stack,
         error:err                           
     })
//      if(err.name == 'CastError'){
//         message = "resoure not fount"
//         error = new ErrorHandler(message)
//         err.statusCode = 400
//    }
     }


     if(process.env.NODE_MON == 'production'){
           let message = err.message;
           let error = new ErrorHandler(message)

           if(err.name == "ValidationError"){
                message = Object.values(err.errors).map(value =>value.message)
                error = new ErrorHandler(message)
                err.statusCode = 400
           } 
   
           
           if(err.name == 'CastError'){
                message = "resoure not fount"
                error = new ErrorHandler(message)
                err.statusCode = 401
           }
           if(err.code == 11000){
                message = `Duplicate ${Object.keys(err.keyValue)}`;
                error = new ErrorHandler(message);
           }
           res.status(err.statusCode).json({
               success:false,
               message:error.message || 'Internal Error'
           })
     }
}