import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/RegisterAction";
import { useSelector } from "react-redux";
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom'

export default function Login(){

      const [email,setEmail] = useState('');
      const [password,setPassword] = useState('') 
      const dispatch = useDispatch();   
      const navigate = useNavigate();
      const {error,isAuthenticated} = useSelector((state)=>state.authSlice);
      
      const onSubmit = (e)=>{
        e.preventDefault(login(email,password));
           
        dispatch(login(email,password))
      }

      useEffect(()=>{
        if(error){
           toast(error,{
               position:toast.POSITION.BOTTOM_CENTER,
               type:'error'
           })
        }
        if(isAuthenticated){
            navigate('/profile')
        }
      },[error,isAuthenticated]);

     const onClick = (e)=>{
         e.preventDefault();
         navigate('/register')
     }

     return(
   <Fragment>
    <div className="row wrapper lg-w-100 w-50 m-auto"> 
       <div className="col-10 col-lg-12 home-item">
            <form onSubmit={onSubmit} className="shadow-lg p-2">
               <h1 className="mb-3 text-center opacity">login</h1>
              <div className="form-group my-2">
                 <label htmlFor="email_field">Email</label>
                  <input
                      type="email"
                     id="email_field"
                    className="form-control mt-2"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control mt-2"
                onChange={(e)=>setPassword(e.target.value)} 
                value={password}
              />
            </div>
  
              <div className="col-xl-12 text-center mt-3" >
                 <button
                   id="login_button"
                   type="submit"
                   className="btn btn-primary px-5"
                  >
              LOGIN
            </button>
              </div>
            <div className="d-flex justify-content-between">
            <a href="#" className="float-right p-2">Forgot Password?</a>
            <a href="#" onClick={onClick} className="float-right p-2">New User?</a>
            </div>
          </form>
         </div>
    </div>                                  
         </Fragment>                          
     )                              
}