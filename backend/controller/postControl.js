const Post = require('../module/postModule');
const catchAsync = require('../middleware/catchAsync');
const ErrorHandler = require('../ErrorControl/ErrorHandler');
// const sentToken = require('../utile/jwt')

exports.postUser = catchAsync( async (req,res,next)=>{
       const {description,subtitle,category,type} = req.body 
         
       if(req.body.postAvatar == ""){
         // console.log('mass entry')
         return next(new ErrorHandler('please choose file'))
      } 

      let postAvatar = `${process.env.BACKEND_URL}/uploads/post/${req.file.originalname}` ;


     const user = await Post.create({
            description,
            subtitle,
            postAvatar,
            category,
            type,
            user:req.user.id                       
       })
       if(!user){
         return next(new ErrorHandler('some field miss'))                         
       }

       res.status(200).json({
           success:true,
           message:'success post'                        
       })
})

//post get control

exports.getUserPost = catchAsync(async (req,res,next)=>{
         
        const userId = req.user.id;
          
        const post = await Post.find();
        const curren = await post.filter(value =>{
              if(value.user == userId){
                    return value
              }
          })
        res.status(200).json({
              success:true,
              curren
              
        })
          
})
// GET SINGLE USER VIDEOS
exports.getSingleUserPost = catchAsync(async (req,res,next)=>{
        
           const userID = req.params.id;
          const post = await Post.find();
          const curren = post.filter((value)=>{
                  if(value.user == userID){
                        return value
                  }
             })

             res.status(200).json({
                  success:true,
                  curren
                  
            })
})

//GET ALL POST

exports.getAllPost = catchAsync(async (req,res,next)=>{

         const Revers = await Post.find();
         const PostPost = Revers.reverse();

        const userPost =  PostPost.filter((items)=>{
             if(items.type == "public"){
                  return items
             }
         })

         res.status(200).json({
              success:true,
              userPost
         })
})


exports.NameChange = catchAsync(async (req,res,next)=>{
             const {type} = req.body;
      const update = req.params.id;
      
      if(!update){
            next(new ErrorHandler('server error'))
      }
      console.log('user id: ',update,'type data ',type)
     const storw = await Post.findByIdAndUpdate(req.params.id,{type},{
        new:true,
        runValidators:true
     });


      res.status(200).json({
            success:true,
            storw
      })
})