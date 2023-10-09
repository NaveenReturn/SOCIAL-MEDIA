import React, { Fragment, useEffect, useState } from 'react';
import { getAllMovies, moviesUpdate } from '../actions/MoviesAction';
import {useDispatch,useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
// import {toast} from 'react-toastify';
import Loading from '../component/layout/Loading'
import MoviesUpload from './moviesprops';

export default function MainRootMovies({Close}){
   console.log(Close)
   const dispatch = useDispatch();
   const {movies,error,loading} = useSelector((state) =>state.movieGetAll);
   const [open,setOpen] = useState('');
     
   const Opne = ()=>{
       setOpen('open')
   }
   const closes =()=>{
       setOpen('')
   }
   useEffect(()=>{
      dispatch(getAllMovies);
      // if(error){
      //     toast(error,{
      //        position:toast.POSITION.BOTTOM_CENTER,
      //        type:'error'
      //     })
      // }
  },[dispatch,error])

   const {register,handleSubmit,formState:{errors}} = useForm()
   const [read,setRead] = useState('readMore');
    const [close,setClose] = useState('close');
    const ReadChange = (e)=>{
         e.preventDefault();
         if(read === "readMore"){
             setRead('readClose')
         }else if(read === "readClose"){
            setRead('readMore')
         }
    }

    const onCancel = (e)=>{
        e.preventDefault();
        if(close === 'open'){
            setClose('close')
        }else if(close === 'close'){
           setClose('open')
        };
    }
    const [date,setDate] = useState('');
    const FixedDate = new Date(date);
    const [formMovies,setFormMovies] = useState({
        name:'',
        description:'',
        directorname:'',
        musicdirectorname:'',
        starring:'',
        dancemaster:''
    });
    const [beforAvatar,setBeforAvatar] = useState('./img/cinema-tiket.png');
    const [avatar,setAvatar]= useState('');

   const onChange = (e)=>{
         if(e.target.name === 'avatar'){
             const reader = new FileReader();
             reader.onload = ()=>{
                  if(reader.readyState === 2){
                      setBeforAvatar(reader.result)
                      setAvatar(e.target.files[0])
                  }
             }
             reader.readAsDataURL(e.target.files[0])
         }else{
            setFormMovies({...formMovies,[e.target.name]:e.target.value})
         }
   }

    const onSubmit = (e)=>{
      console.log('entry mode',avatar,"name")
      // e.preventDefault();
       const formData = new FormData();
       formData.append('name',formMovies.name);
       formData.append('description',formMovies.description);
       formData.append('directorname',formMovies.directorname);
       formData.append('musicdirectorname',formMovies.musicdirectorname);
       formData.append('starring',formMovies.starring);
       formData.append('dancemaster',formMovies.dancemaster);
       formData.append('date',FixedDate.toLocaleDateString());
       formData.append('avatar',avatar);
       dispatch(moviesUpdate(formData));
    }
   return(
      <>
            <Fragment>
          <div className=''>
            {open?<MoviesUpload close={closes}  />:""}
            {/* <header>
               <div className='d-flex justify-content-between align-items-center'>
                  <p className='fs-3'>MOVIES UPDATE</p> 
                   <div className='d-flex justify-content-between'>
                   <input type='search'className='form-control' placeholder='Movies Search...' />
                    <button className='btn bg-info'>
                       <i className='fa fa-search'></i>
                    </button>
                   </div>
                  <p></p>
               </div>
                <input type='submit' value={'Update Movies'} className='btn btn-info' onClick={opens} />
            </header> */}
               <input type='submit' onClick={Opne} value={'Update Movies'} className='btn btn-info movie-con'  />
             {loading?<Loading/>:
                     <Fragment>
             {movies && movies.map((items)=>(
        <div  key={items._id} className='col mt-1 p-1' >
          <div style={{background:"#ccc"}} className='rounded col d-flex justify-content-between  align-items-center'>
       <div className='movie-heder d-flex align-items-center'>
          <img className='p-1 rounded-circle' alt='cinema-ticket' src='./img/sony-music-large-logo.jpg' height={64} />
          <div>
              <p className=''>Sony Music</p>
              <p className=' text-primary'>#thalapathi vijay #thalapathi vijay</p>        
          </div>
       </div>
       <div>
         <i className="fa fa-ellipsis-h pe-3" ></i>            
       </div>
   </div> 
   {/* movies post */}
    <div className='mov-avatar d-flex justify-content-center'>
        <img className='p-1 rounded' alt='cinema-ticket' height={270} src={items.avatar} />              
     </div> 
    {/* icons */}
     <div  className="icon row px-2 text-white">
       <div className="col col-xl-6 col-lg-5 col-md-4 p-1">
          <i className="far fa-heart px-2"></i>
           <i className="fab fa-facebook-messenger pe-2"></i>
            <i className="fab fa-telegram pe-2"></i>
            </div>
         <div className="d-flex align-items-center justify-content-end col col-xl-6 col-lg-7 col-md-8 ">
            <i className="far fa-bookmark"></i>
       </div>
    </div>
    {/* mivies duration */}
     <div className='text-white'>
        <p>12 hous</p>              
        <p className='opacity-50 text-white'>Fixed Date: <span>{items.date}</span></p> 
     </div>
    {/* movies duration */}
     {read === "readMore"?"":
        <div className='p-2'>             
        <p className='text-white'>Movie Name <span className='text-primary'>{items.name}</span></p>  
        <p className='text-white'>Movie Type <span className='text-primary'>{items.movietype
}</span></p>
        <p className='text-primary'>
           {items.description}
        </p>
        <p className='text-white'>Movie Type :<span className='opacity ps-1'>comedy</span></p>
        <p className='text-white'>Director Name :<span className='opacity ps-1'>{items.directorname}</span></p>
        <p className='text-white'>Musicdirector Name :<span className='opacity ps-1'>{items.musicdirectorname}</span></p>   
        <p className='text-white'>Dancemaster :<span className='opacity ps-1'>{items.dancemaster}</span></p>  
        <p className='text-white'>Starring :<span className='opacity ps-1'>{items.starring}</span></p>      
    </div>
     }
    {/* READ_MOTE */}
    {read === "readMore"?<span role='button' className='text-primary opacity-50' onClick={ReadChange} >Read More...</span>:<span role='button' className='text-primary opacity-50' onClick={ReadChange}>Read Less...</span>}
 </div>
              ))}
                   </Fragment>
             }

                 {/*update movies form list*/}
               {/* <div className={`paner-paner ${close === "close"?"paner-paner":"paner-d-flex"}`}>
                 <div className='movies-register card p-3'>
                 <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' >
                        <p className='p-1 text-center fs-5'>NEW MOVIE UPDATE <input type='submit' onClick={onCancel} className='btn btn-danger ms-2' value={'cancel'} /></p>
                     <div className='form_groups'>
                        <label className='py-2'>ENTER MOVIE NAME</label>
                        <input  
                         type='text'
                         className='form-control'
                         name='name'
                         {...register('name',{
                            required:"please enter movie name"
                         })}
                         onChange={onChange}
                        />
                        <p className='form-danger pt-1'>{errors.name && errors.name.message}</p>
                     </div>
                     <div className='form_groups d-flex flex-column'>
                        <label className='py-2'>ENTER DESCRIPTION include #</label>
                         <textarea
                          className='p-2 form-control'
                           cols={26}
                            rows={2}
                            name='description'
                            {...register('description',{
                               required:"please enter movie subtitle"
                            })}
                            onChange={onChange}
                            ></textarea>
                     </div>
                     <p className='form-danger pt-1'>{errors.description && errors.description.message}</p>
                     <div className='form_groups my-2'>
                        <label className='py-2'>MOVIE PANER AVATAR</label>
                       <div className='d-flex align-items-center'>
                          <img src={beforAvatar} height={55} alt='cinema-ticket' className='p-1 rounded' />
                           <input  
                            type='file'
                           className='form-control ms-1'
                           name='avatar'
                           {...register('avatar',{
                              required:"choose the Paner Picture"
                           })}
                           onChange={onChange}
                          />
                       </div>
                     </div>
                     <p className='form-danger pt-1'>{errors.avatar && errors.avatar.message}</p>
                     <div className='form_groups d-flex flex-column'>
                        <label className='py-2'>ENTER DATE</label>
                        <input 
                        type='date'
                         name='date'
                        className='form-control'
                        {...register('date',{
                           required:"enter date"
                        })}
                        onChange={(e)=>setDate(e.target.value)}
                           />
                     </div>
                     <p className='form-danger pt-1'>{errors.date && errors.date.message}</p>
                     <div className='form_groups'>
                        <label className='py-2'>ENTER DIRECTOR NAME</label>
                        <input  
                         type='text'
                         className='form-control'
                         name='directorname'
                         {...register('directorname',{
                            required:"please enter director name"
                         })}
                         onChange={onChange}
                        />
                        <p className='form-danger pt-1'>{errors.directorname && errors.directorname.message}</p>
                     </div>
                     <div className='form_groups'>
                        <label className='py-2'>ENTER MUSIC DIRECTOR NAME</label>
                        <input  
                         type='text'
                         className='form-control'
                         name='musicdirectorname'
                         {...register('musicdirectorname',{
                            required:"please enter music director name"
                         })}
                         onChange={onChange}
                        />
                        <p className='form-danger pt-1'>{errors.musicdirectorname && errors.musicdirectorname.message}</p>
                     </div>
                     <div className='form_groups'>
                        <label className='py-2'>ENTER STARRING NAME</label>
                        <input  
                         type='text'
                         className='form-control'
                         name='starring'
                         {...register('starring',{
                            required:"please enter starring name"
                         })}
                         onChange={onChange}
                        />
                        <p className='form-danger pt-1'>{errors.starring && errors.starring.message}</p>
                     </div> 
                    <div className='form_groups'>
                        <label className='py-2'>ENTER DANCE MASTER NAME</label>
                        <input  
                         type='text'
                         className='form-control'
                         name='dancemaster'
                         {...register('dancemaster',{
                            required:"please enter dance master name"
                         })}
                         onChange={onChange}
                        />
                        <p className='form-danger pt-1'>{errors.dancemaster && errors.dancemaster.message}</p>
                     </div>
                      <input type='submit' value={"Upload"} className='form-control mt-2 btn-bg' />
                 </form>
            </div>  
             </div>   */}
          </div>
       </Fragment>  
      
      </>                             
   )
}