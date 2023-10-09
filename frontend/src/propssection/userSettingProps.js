import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { SecureURL } from "../actions/PostAction";

export default function SettingProps({open,userId}){
     const navigate = useNavigate(); 
     const dispatch = useDispatch();                             
    const [type,setType] = useState();
    const [id,setId] = useState(userId);
    const onChange = (e)=>{
          setType(e.target.value)                          
    }
    const onSubmit = (e)=>{
        e.preventDefault();
//          const formdate = new FormData();
//          formdate.append('id',userId);
//          formdate.append('type',type);
       
          dispatch(SecureURL(id,type))
//         console.log(type,id)
           open()
           setTimeout(()=>{
               navigate('/profile')
           },500)
    }
   return(
       <>
       <div className="props-privacy">
           <div className="privacy-radios">
               <h4 className="text-center p-2"><i className="fa fa-wifi text-white"></i>  PUBLIC OR PRIVACY... <span onClick={open} role="button">🎬</span></h4>
              <form onSubmit={onSubmit}  >
                   <div className="privacy-props p-3">
                     <input type="radio" className="p-2 radio" onClick={onChange} name="post-url" value={"public"} id="type"/>
                    <label htmlFor="">Public <i className="fa fa-globe fs-4"></i></label>
                  </div>
                  <div className="privacy-props p-3">
                      <input type="radio" className="p-2 radio" onClick={onChange} name="post-url" value={"privacy"} id="type"/>
                      <label htmlFor="">Privacy <i className="fas fa-key fs-4"></i></label>
                  </div>
             <div className="p-2 text-center"><input type="submit" className="btn btn-primary" value="submit😊"/></div>                  
              </form>
        </div>
       </div>
       </>                            
   )
}