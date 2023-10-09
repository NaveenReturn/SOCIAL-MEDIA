import React,{useState,useEffect} from "react";
import {useForm} from 'react-hook-form';
import {useDispatch,useSelector} from 'react-redux';
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import { moviesUpdate } from "../actions/MoviesAction";
import {toast} from "react-toastify"

export default function MoviesUpload({close}){
     const dispatch = useDispatch();
     const {movies,error,loading} = useSelector((state) =>state.movieGetAll);
    const {register,handleSubmit,formState:{errors}} = useForm();
    const [beforAvatar,setBeforAvatar] = useState('./img/cinema-tiket.png');
    const [avatar,setAvatar]= useState('');
    const [date,setDate] = useState('');
   //  const FixedDate = new Date(date);
    const [formMovies,setFormMovies] = useState({
        name:'',
        description:'',
        directorname:'',
        musicdirectorname:'',
        starring:'',
        dancemaster:'',
        movietype:'',
    });
    useEffect(()=>{
      $( "#datepicker" ).datepicker({
         dateFormat:"dd-mm-yy",
         minDate: new Date(),
         onSelect:function(date){
            setDate(date)
         }
      });
      if(error){
           toast(error,{
              position:toast.POSITION.BOTTOM_CENTER,
              type:"warning"
           })
      }
     },[error])
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
            setFormMovies({...formMovies,[e.target.name]:e.target.value});
            // console.log("TYPE MOVIE ",formMovies.name)
         }
   }   
//    submit form
    const onSubmit = (e)=>{
      // e.preventDefault();
       const formData = new FormData();
       formData.append('name',formMovies.name);
       formData.append('description',formMovies.description);
       formData.append('directorname',formMovies.directorname);
       formData.append('musicdirectorname',formMovies.musicdirectorname);
       formData.append('starring',formMovies.starring);
       formData.append('dancemaster',formMovies.dancemaster);
       formData.append('movietype',formMovies.movietype);
       formData.append('date',date);
       formData.append('avatar',avatar);
       dispatch(moviesUpdate(formData));
      // console.log(formMovies.movietype)
    }                            
   return(
      <>
   <h1>MOVIES SECTION</h1>
       <div className="moviesprops">
       <form className="p-3" onSubmit={handleSubmit(onSubmit)}  >
         <table>
           <thead>
              <tr>
                <th colSpan={4}>
                    <div className="d-flex align-items-center justify-content-center">
                      <p className="">NEW MOVIE UPDATE</p>
                      <p className="ms-2"><input type='button' className='btn btn-danger' onClick={close} value={'cancel'} /></p>           
                    </div>
                  </th>  
                                
            </tr>                     
          </thead> 
          <tbody>
             <tr>
               <td><label className='py-2'>ENTER MOVIE NAME</label></td> 
               <td> <input  
                         type='text'
                         className='form-control'
                         name='name'
                         {...register('name',{
                            required:"please enter movie name"
                         })}
                         onChange={onChange}
                        /> 
                        </td> 
               <td><label className='py-2 ms-2'>ENTER DESCRIPTION include #</label></td> 
               <td>
               <textarea
                     className='mt-2 ms-2 form-control'
                     cols={26}
                     rows={1}
                     name='description'
                     {...register('description',{
                     required:"please enter movie subtitle"
                      })}
                     onChange={onChange}
                    ></textarea>                 
                </td>                                 
             </tr> 
             <tr >
                <td colSpan={2}><p className="text-center form-danger">{errors.name && errors.name.message}</p></td>  
                <td colSpan={2}><p className="text-center form-danger">{errors.description && errors.description.message}</p></td>                 
             </tr>  
             <tr>
                <td colSpan={2}><label className='py-3'>MOVIE PANER AVATAR</label></td>  
                <td><img src={beforAvatar} height={100} alt='cinema-ticket' className='py-3 rounded' /></td> 
                <td>
                <input  
                     type='file'
                     className='form-control ms-1'
                     name='avatar'
                      {...register('avatar',{
                       required:"choose the Paner Picture"
                     })}
                     onChange={onChange}
                    />               
                </td>                
             </tr>
             <tr>
               <td colSpan={4}><p className=" form-danger">{errors.avatar && errors.avatar.message}</p></td>                 
             </tr>
             <tr>
             <td><label className='py-2'>ENTER DATE</label></td>
               <td><input
                 {...register('date',{
                  required:"enter date"
                 })} 
                onChange={onChange} className='form-control' type="text" name='date' id="datepicker"/></td>   
           
               <td><label className='py-2 ms-2'>ENTER DIRECTOR NAME</label></td>  
               <td>
               <input  
                   type='text'
                    className='form-control my-2'
                   name='directorname'
                   {...register('directorname',{
                   required:"please enter director name"
                   })}
                   onChange={onChange}
                   />                
               </td>                
             </tr>
             <tr>
              <td colSpan={3}><p className="form-danger">{errors.date && errors.date.message}</p></td>
              <td><p className="form-danger">{errors.directorname && errors.directorname.message}</p></td>
              </tr>
              <tr>
               <td><label className='py-2'>MUSIC DIRECTOR NAME</label></td>  
               <td>
               <input  
                  type='text'
                  className='form-control my-2'
                  name='musicdirectorname'
                   {...register('musicdirectorname',{
                  required:"please enter music director name"
                 })}
                 onChange={onChange}
                 />                 
              </td> 
              <td><label className='py-2 ms-2'>STARRING NAME</label></td>  
              <td>
              <input  
                type='text'
                 className='form-control'
                  name='starring'
                  {...register('starring',{
                 required:"please enter starring name"
                 })}
                 onChange={onChange}
                />                   
              </td>               
             </tr> 
             <tr>
               <td colSpan={3}><p className="form-danger">{errors.musicdirectorname && errors.musicdirectorname.message}</p></td>      
               <td><p className="form-danger">{errors.starring && errors.starring.message}</p></td>               
             </tr>
             <tr>
                <td><label className='py-2'>DANCE MASTER NAME</label></td> 
                <td>
                <input  
                         type='text'
                         className='form-control'
                         name='dancemaster'
                         {...register('dancemaster',{
                            required:"please enter dance master name"
                         })}
                         onChange={onChange}
                        />                 
                </td> 
                <td><label className="px-2" >MOVIE TYPES</label></td>
                <td>
                  <select name="movietype"
                    {...register('movietype',{
                      required:'please enter Movie type'
                    })}
                  className="form-control" onChange={onChange} >
                     <option value={''}>-Movie Type-</option>
                     <option value={'action'}>Action</option>
                     <option value={'comedy'}>Comedy</option>
                     <option value={'family'}>Family</option>
                     <option value={'Emotion'}>Emotion</option>
                  </select>               
               </td>                 
             </tr> 
             <tr>
               <td><p className="form-danger">{errors.dancemaster && errors.dancemaster.message}</p></td> 
               <td></td>
               <td><p className="form-danger text-center">{errors.movietype && errors.movietype.message}</p></td>                   
             </tr>
             <tr>
               <td colSpan={4}><div className="d-flex justify-content-center p-2">
                  <div className="d-flex align-items-center">
                  <input type='submit' value={"Ticket"} className='btn ms-2 btn-bg px-3' />
                  <i className="fa fa-ticket fs-2 ms-2"></i>
                  </div>
                  </div></td>
             </tr>                 
        </tbody>                       
           </table>
       </form>
       </div>
      </>                             
   )
}