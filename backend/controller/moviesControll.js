const Movies = require('../module/moviesModule');
const catchAsync = require('../middleware/catchAsync');
const ErrorHandler = require('../ErrorControl/ErrorHandler');

exports.MoviesPost = catchAsync(async (req,res,next)=>{
     const {name,
          description,
          directorname,
          musicdirectorname,
          starring,
          dancemaster,
          movietype,
          date} = req.body;
      
     let avatar = `${process.env.BACKEND_URL}/uploads/movies/${req.file.originalname}`;
     
//      monies create
   const movie = await Movies.create({
        name,
        description,
        directorname,
        musicdirectorname,
        starring,
        dancemaster,
        avatar,
        movietype,
        date,
        user:req.user.id                           
    });
    if(!movie){
        next(new ErrorHandler('sorry can not reach',401))                           
    }
     res.status(201).json({
          success:true,
          movie                        
     })
})

exports.getAllMovies = catchAsync(async (req,res,next)=>{

     const movie = await Movies.find();

     res.status(200).json({
          success:true,
          movie
     })
})