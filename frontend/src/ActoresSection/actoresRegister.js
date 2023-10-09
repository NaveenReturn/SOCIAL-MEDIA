import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { ActoerRegisterRoot } from "../actions/actores";
// import './actores.css'
export default function ActoresRegister(){
     const dispatch = useDispatch();
     const {actoer} = useSelector((state)=>state.actoers)
     const [beforeAvatar,setBeforeAvatar] = useState('./img/user.jpg'); 
     const [avatar,setAvatar] = useState('');
     const [usedata,setUserdata] = useState({
         name:"",
         email:"",
         password:"",   
         category:""                       
     })
    const onChange = (e)=>{
        if(e.target.name === "avatar"){
             const reader = new FileReader();
             reader.onload = ()=>{
               if(reader.readyState === 2){
                   setBeforeAvatar(reader.result)
                   setAvatar(e.target.files[0])                
               }
             }
             reader.readAsDataURL(e.target.files[0])                       
        }else{
            setUserdata({...usedata,[e.target.name]:e.target.value})
        }
    }
    const onSubmit = (e)=>{
       e.preventDefault();
       const formData = new FormData();
       formData.append('name',usedata.name);
       formData.append('email',usedata.email);
       formData.append('password',usedata.password);
       formData.append('category',usedata.category);
       formData.append('avatar',avatar);
       dispatch(ActoerRegisterRoot(formData))
       console.log(usedata);
    }   
    


   return(                                  
     <div className=" actores-form d-flex justify-content-center align-items-center">
            <form onSubmit={onSubmit} className="d-flex flex-column p-2">
                <h4 className="text-center text-white">WELCOME</h4>
                <label htmlFor="field_name" className="text-white p-2">Enter Name</label>
                <input 
                  type="text"
                   className="ps-2 text-white input-st" 
                   placeholder="enter your name...." 
                   name="name"
                   onChange={onChange}
                   />
                <label htmlFor="field_email" className="text-white p-2">Enter Email</label>
                <input 
                type="email"
                 className="ps-2 text-white input-st"
                  placeholder="enter your email...."
                  name="email"
                  onChange={onChange}
                  />
                <label htmlFor="field_password" className="text-white p-2">Password</label>
                <input 
                type="password" 
                className="ps-2 text-white input-st" 
                placeholder="password...."
                name="password"
                onChange={onChange}
                />
                <div className="p-1 mt-1 d-flex align-items-center">
                   <img src={beforeAvatar} height={54} />  
                   <input type="file" accept="image/png, image/jpeg" name="avatar" onChange={onChange} className="ms-2 form-control" />              
                </div>
                <label htmlFor="category" className="text-white p-2">Category</label>
                <select className="form-control" onChange={onChange} name="category" id="">
                    <option value="">--selected--</option>
                    <option value="hero">Hero</option>
                    <option value="heroni">Heroni </option>
                    <option value="director">Director</option>
                    <option value="assistant director">Assistant Director</option>
                    <option value="camera man">Camera Man</option>
                    <option value="music director">Music Director</option>
                    <option value="fight master">Fight Master</option>
                    <option value="comedy artisht">Comedy Artisht</option>
                </select>
                  <div className="text-center p-1"><button className="btn-merun mt-1">submit</button></div>
                <div className="mt-1">
                <Link to={'/gettoken'} className="fs-5 link-underline-danger" >login</Link>                
                </div>
            </form>
        </div>                           
   )
}