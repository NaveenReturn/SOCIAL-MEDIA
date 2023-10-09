import React, { Fragment, useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { register } from "../../actions/RegisterAction";
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify'

export default function Register(){
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const {loading,isAuthenticated,error,message} = useSelector((state)=>state.authSlice);
        const [avatar,setAvatar] = useState("");
        const [preveAvatar,setPreveAvatar] = useState("./img/user.jpg");
         const [userData,setUserDate] = useState({
              name:"",
              email:"",
              password:"",
              lifeTitle:"",
              topmoment:""
         })
         // console.log(userData)
      const onChange = (e)=>{
            if(e.target.name === 'avatar'){
                 const reader = new FileReader();
                 reader.onload =()=>{
                     if(reader.readyState === 2){
                          setPreveAvatar(reader.result)
                          setAvatar(e.target.files[0])
                     }
                 }
                 reader.readAsDataURL(e.target.files[0])
            }
            else{
               setUserDate({...userData,[e.target.name]:e.target.value})
               console.log(userData.name)
            }
        }
      const onSubmitDate = (e)=>{
             e.preventDefault()
            const formData = new FormData();
            formData.append('name',userData.name)
            formData.append('email',userData.email)
            formData.append('password',userData.password)
            formData.append('lifeTitle',userData.lifeTitle)
            formData.append('topmoment',userData.topmoment)
            formData.append('avatar',avatar)
            dispatch(register(formData))
      }

      useEffect(()=>{
          if(error){
               toast(error,{
                    position:toast.POSITION.BOTTOM_CENTER,
                    type:"error"
               })
          }
          if(message){
               toast(message,{
                    position:toast.POSITION.BOTTOM_CENTER,
                    type:"success"
               })  
          }
          if(isAuthenticated){
               navigate('/')
          }
      },[null,error,null,isAuthenticated])


     return(
        <Fragment>
           <div className="register">
             <div className="row  ">
                 <div className="col-10 col-lg-5 m-auto">
                     <form onSubmit={onSubmitDate} className="card p-3" method="post" encType="multipart/form-data">
                            <h5 className="text-center" >REGISTER</h5>
                         <div className="form-groups">
                              <label htmlFor="field_name">Name</label>   
                              <input type="name"
                                 id="name"
                                 name="name"
                                 value={userData.name}
                                 className="form-control"
                                 onChange={onChange}
                              />  
                         </div>
                         <div className="form-groups">
                              <label htmlFor="field_email">Email</label>   
                              <input type="email"
                                 id="email"
                                 name="email"
                                 className="form-control"
                                 onChange={onChange}
                              />  
                         </div>
                         <div className="form-groups">
                              <label htmlFor="field_password">Password</label>   
                              <input type="password"
                                 id="password"
                                 name="password"
                                 className="form-control"
                                 onChange={onChange}
                              />  
                         </div>
                         <div className="form-groups">
                              <label htmlFor="field_title">Life Title</label>   
                              <input type="text"
                                 id="lifetitle"
                                 name="lifeTitle"
                                 className="form-control"
                                 onChange={onChange}
                              />  
                         </div>
                         <div className="form-groups">
                              <label htmlFor="field_Moment">Top Moment</label>   
                              <input type="text"
                                 id="topMoment"
                                 name="topmoment"
                                 className="form-control"
                                 onChange={onChange}
                              />  
                         </div>
                         <div className="form-groups">
                              <label htmlFor="field_avatar">Avatar</label>   
                              <div className="col d-flex">
                                   <div>
                                      <figure className="avatar mr-3 item-rtl">
                                             <img className="rounded-circle" 
                                                
                                              src={preveAvatar} 
                                              alt="cinema"/>                           
                                      </figure>                                
                                   </div>
                              <div className="custome-file ms-1">
                                   <input type="file"
                                   id="avatar"
                                   name="avatar"
                                   className="form-control"
                                   onChange={onChange}
                                />
                              </div> 
                              </div> 
                         </div>
                         <div className="form-groups col" >
                          
                             <input disabled={loading} style={{width:"100%"}} className="btn btn-success" type="submit"  />
                         </div>
                     </form>               
                 </div>                  
             </div>                      
       </div>                                
        </Fragment>                           
     )                              
}