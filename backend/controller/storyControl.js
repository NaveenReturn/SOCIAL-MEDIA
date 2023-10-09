const Story = require('../module/story');
const catchAsync = require('../middleware/catchAsync');

exports.StoryCreate = catchAsync(async (req,res,next)=>{
        const {subtitle,content,category} = req.body;
        
        let avatar;
        if(req.file){
           avatar = `${process.env.BACKEND_URL}/uploads/storys/${req.file.originalname}`;
        }
      const story = await Story.create({
            subtitle,
            content,
            avatar,
            category,
            user:req.user.id                       
        })
     res.status(201).json({
         success:true,
         story                          
     })
})

exports.getAllStorys = catchAsync(async (req,res,next)=>{

      const story = await Story.find();
      res.status(200).json({
          success:true,
          story
      })
})

//post get control

exports.getUserStory = catchAsync(async (req,res,next)=>{
         
    const userId = req.user.id;
      
    const story = await Story.find();
    const storylist = await story.filter(value =>{
          if(value.user == userId){
                return value
          }
      })
    res.status(200).json({
          success:true,
          storylist
          
    })
      
})
// STORY UPDATE
exports.StoryUpdate = catchAsync(async (req,res,next)=>{
    
    const story = await Story.findById(req.params.id);
    if(!story){
        return next(new ErrorEvent('user not available',404))
    }

   const {subtitle,content,category} =req.body;
     console.log(content)
         let avatar;
         if(req.file){
            avatar = `${process.env.BACKEND_URL}/uploads/storys/${req.file.originalname}`;
         }

         const storys = await Story.findByIdAndUpdate(req.params.id,{subtitle,content,category})


    res.status(201).json({
        success:true,
        storys
    })
})

// GET SINGLE USER ID
exports.getSingleStory = catchAsync(async (req,res,next)=>{
     
         const story = await Story.findById(req.params.id);
          if(!story){
            return next(new ErrorEvent('sorry story not available',404))
          }

          res.status(200).json({
             success:true,
             story
          })

})
