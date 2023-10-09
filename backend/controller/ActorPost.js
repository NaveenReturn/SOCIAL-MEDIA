const ActorPost = require('../module/Actorpost');
const catchAsync = require('../middleware/catchAsync');
const ActorPostes = require('../module/Actorpost')

// POST CREATE 
exports.CreatePostActor = catchAsync(async (req,res,next)=>{
     
      const {type,description} = req.body;

         let post = `${process.env.BACKEND_URL}/uploads/actorpost/${req.file.originalname}`  

       const Apost = await ActorPost.create({
            post,
            type,
            description,
            user:req.actor.id
      })
      res.status(201).json({
           success:true,
           Apost                        
      })
})

// GET USER POST

exports.getActorPost = catchAsync(async (req,res,next)=>{
       
        const actorId = req.actor.id;
         const getAll = await ActorPostes.find();

       let Apost = await getAll.filter(value =>{
              if(actorId == value.user){
                  return value
              }
         })
        res.status(200).json({
            success:true,
            Apost
        })
})