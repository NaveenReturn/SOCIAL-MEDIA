import React, { useEffect, useState } from "react";
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import {useForm} from 'react-hook-form';
import { FunctionAction } from "../actions/functionAction";
import {useDispatch,useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';

export default function NewFunction(){
     const dispatch = useDispatch();
     const navigate = useNavigate();
    const [pre,setPre] = useState('./img/function.jpg');
    const [date,setDate] = useState('')
    const {register,handleSubmit,formState:{errors}} = useForm();

   const [avatar,setAvatar] = useState();
    const [userData,setUserDate] = useState({
           name:'',
           celebraties:'',
           address:'',
           contact:'',
           email:'',
           content:''
    })
    const {error,isAuthenticated} = useSelector(state =>state.FunctionSuccess)
       const onChange = (e)=>{
     if(e.target.name === 'avatar'){
             const reader = new FileReader();
             reader.onload = ()=>{
                  if(reader.readyState === 2){
                      setPre(reader.result)
                      setAvatar(e.target.files[0])
                  }
             }
             reader.readAsDataURL(e.target.files[0])
         }else{
          setUserDate({...userData,[e.target.name]:e.target.value});
         }
   }
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
           type:'error'
         })
       }
       if(isAuthenticated){
          navigate('/')
       }
    },[error,isAuthenticated])
    const onSubmit = (e)=>{
      // e.preventDefault();
       const formData = new FormData();
       formData.append('name',userData.name);
       formData.append('celebraties',userData.celebraties);
       formData.append('address',userData.address);
       formData.append('contact',userData.contact);
       formData.append('email',userData.email);
       formData.append('content',userData.content);
       formData.append('date',date);
       formData.append('avatar',avatar);
       dispatch(FunctionAction(formData));
      // console.log(formMovies.movietype)
    }


  return(
     <>
   <div className="form-main">
         <div className="funRegister">
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column p-3" >
                    <h5 className="text-center text-white">INVAIT</h5>
                <label htmlFor="" className="text-white">EVENT NAME</label>
                <input type="text"
                 placeholder="Event Name..."
                  name="name"
                  {...register('name',{required:'enter event name'})}
                  onChange={onChange}
                 />
                 <p className="text-danger">{errors.name && errors.name.message}</p>
                <label htmlFor="" className="text-white">CELEBRATIES</label>
                <textarea 
                placeholder="Celebraties Name..."
                 name="celebraties"
                 {...register('celebraties',{required:'enter celebraties name'})} 
                 onChange={onChange}
                 cols="30" rows="2"></textarea>
                 <p>{}</p>
                 <label htmlFor="" className="text-white">DATE</label>
                 <input
                  className='form-control' 
                  type="text" 
                  placeholder="Enter Date...."
                  name='date' 
                   {...register('date',{required:'enter date'})}
                   onChange={onChange}
                  id="datepicker"
                  />
                  <p className="text-danger">{errors.date && errors.date.message}</p>
                 <label htmlFor="" className="text-white">ADDRESS</label>
                 <input type="text"
                  placeholder="Address"
                   name="address"
                   {...register('address',{required:'enter address'})}
                   onChange={onChange}
                  />
                  <p className="text-danger">{errors.address && errors.address.message}</p>
                 <label htmlFor="" className="text-white">CONTACT</label>
                 <input type="text"
                  placeholder="Phone Number..."
                   name="contact"
                   onChange={onChange}
                  />
                 <label htmlFor="" className="text-white">EMAIL</label>
                 <input type="email"
                  placeholder="Enter Email..."
                   name="email"
                   {...register('email',{required:'enter email'})}
                   onChange={onChange}
                  />
                  <p className="text-danger">{errors.email && errors.email.message}</p>
                 <div className="form-feild my-1">
                     <img src={pre} height="56" alt=""/> 
                     <input type="file" className="ms-3"
                      name="avatar"
                      {...register('avatar',{
                         required:'post photo'          
                      })} 
                      onChange={onChange}
                     /> 
                   <p className="text-danger">{errors.avatar && errors.avatar.message}</p>              
                 </div>
                   <textarea cols={30}
                    placeholder="content..."
                    name="content"
                    {...register('content',{required:'write content'})}
                    onChange={onChange}
                     role="2"></textarea>
                     <p className="text-danger">{errors.content && errors.content.message}</p>
                 <input className="mt-1 btn btn-primary" type="submit" value="Get Ready"/>
            </form>                       
        </div>                                    
      </div> 
     
     </>                              
  )
}