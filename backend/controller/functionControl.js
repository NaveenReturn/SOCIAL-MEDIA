const FunctionCon = require('../module/FunctionModule');
const catchAsync = require('../middleware/catchAsync')

exports.FunctionCreate = catchAsync(async (req,res,next)=>{
    
     const {name,
    celebraties,
    address,
    contact,
    email,
    content,
    date,
   } = req.body;   
   let avatar = `${process.env.BACKEND_URL}/uploads/event/${req.file.originalname}`  

   const Func = await FunctionCon.create({
       name,
       celebraties,
       address,
       contact,
       email,
       content,
       date,
       avatar,
   })

    res.status(201).json({
       success:true,
       Func                            
    })

})

// GET ALL FUNCTION 

exports.getALLFunction = catchAsync(async (req,res,next)=>{
     

     const Func = await FunctionCon.find();

     res.status(200).json({
        success:true,
        Func
     })
})