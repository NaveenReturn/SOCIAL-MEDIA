import React, { useState } from "react";
import './style.css';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import { ActorPostCreate } from "../../actions/ActorPost";

export default function ActorsPost(){
      const dispatch = useDispatch();
    const [statickArrow,setStatickArrow] = useState('./img/arrow-statick.png')
    const [change,setChange] = useState('./img/up-arrow.gif')
    const [avatar,setAvatar] = useState('');

    const [userData,setUserData] = useState({
        description:'',
        type:''                           
    })
     const onChange = (e)=>{
         if(e.target.name === 'avatar'){
                const fileReader = new FileReader();
                fileReader.onload =()=>{
                    if(fileReader.readyState === 2){
                         setAvatar(e.target.files[0])
                    }
                }
                fileReader.readAsDataURL(e.target.files[0])
                
         }else{
            setUserData({...userData,[e.target.name]:e.target.value})                       
         }                          
     }
    const {register,handleSubmit,formState:{errors}} = useForm();
    const onSubmit = ()=>{
           console.log('wrong one')                        
         const formData = new FormData();
         formData.append('type',userData.type);
         formData.append('description',userData.description);
         formData.append('avatar',avatar);
         console.log(userData.description)
         dispatch(ActorPostCreate(formData));
    }
   return(
       <>
       <div className="acters-section" >
           <div className="acters-rei p-2">
               <div>
               <p className="text-center text-white">WELCOME AGAIN</p> 
                 {/* <button className="btn btn-danger" onClick={postCancel} >Cancel</button>                  */}
               </div>
              <form onSubmit={handleSubmit(onSubmit)}  >
                 <div className="acters-post-info">
                          <div className="main-v-p d-flex justify-content-center">
                            <div className="pho-vid rounded d-flex justify-content-center">
                               {avatar == ""?<img src={statickArrow} height="100" alt=""/>:
                               <img src={change} height="100" alt=""/>}
                               
                            </div>    
                          </div>  
                       <div className="form-file d-flex justify-content-between">
                           <div className="py-2">
                              <input className="form-control"
                               type="file" 
                                name="avatar"
                               {...register('avatar',{required:'post fill'})}
                               onChange={onChange}
                                /> 
                                <p className="text-danger">{errors.avatar && errors.avatar.message}</p>   
                           </div> 
                           <div className="video-type">
                                   <select 
                                   className="form-control"
                                    name="type"
                                    
                                    {...register('type',{required:'select'})}
                                    onChange={onChange}
                                    >
                                       <option value="">--Select--</option>
                                       <option value="publick">publick</option>
                                       <option value="privacy">privacy</option>             
                                   </select>
                                   <p className="text-danger">{errors.type && errors.type.message}</p>
                                </div>       
                       </div> 
                      <div className="acter-descri py-1">
                         <textarea className="form-control" name="description"
                          
                          {...register('description',{
                             required:'description....'      
                          })}
                          onChange={onChange}
                         placeholder="description.....#" cols="70" rows="3"></textarea>
                         <p className="text-danger">{errors.description && errors.description.message}</p>
                      </div>   
                 <div className="d-flex justify-content-center">
                     <input className="btn text-white" type="submit" value="Tack Ready"/>               
                 </div>         
                  </div> 
               </form>
         </div>      
       </div>
       </>                            
   )
}