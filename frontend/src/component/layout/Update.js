import React, { Fragment, useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getSingleUser ,userUpdate } from '../../actions/RegisterAction';
import { useParams } from 'react-router-dom';

export default function Update(){
      // useParams
      const {id:userID} = useParams()
    
       //DISPATCH
       const dispatch = useDispatch();
       const {user} = useSelector((state)=>state.authSlice);

    //    changeAvatar
       const [changeAvatar,setChangeAvatar] = useState('');
    //    current avatar
       const [avatar,setAvatar] = useState("");
       const [name,setName] = useState("");
       const [lifeTitle,setLifeTitle]  = useState("");
       const [topmoment,setTopmoment]  = useState("");  

      const changeField = (e)=>{
            if(e.target.name === 'avatar'){
                 let reader = new FileReader();
                 reader.onload =()=>{
                     if(reader.readyState === 2){
                          setAvatar(reader.result)
                          setChangeAvatar(e.target.files[0])
                     }
                 }
                 reader.readAsDataURL(e.target.files[0])
            }
      }

      const onSubmitHandler = (e)=>{
             e.preventDefault();
          const formdate = new FormData();
          formdate.append('name',name)
          formdate.append('lifeTitle',lifeTitle)
          formdate.append('topmoment',topmoment)
          formdate.append('avatar',changeAvatar)
          dispatch(userUpdate(userID,formdate))
      }

      useEffect(()=>{
          
          dispatch(getSingleUser(userID))
      },[dispatch])

      useEffect(()=>{
           if(user){
               setName(user.name)
               setLifeTitle(user.lifeTitle)
               setTopmoment(user.topmoment)
               setAvatar(user.avatar) 
           }
      },[user])

      return(
        <Fragment>
              <div className="update p-2">
                  <div className="row">
                     <div className="col center d-flex justify-content-center align-items-center">
                       <img src="/img/cinema-ticket.png" height="30" alt=""/>
                         <img src="/img/cinema-tiket.png" className="ms-2" height="30" alt="cinema ticket"/>           
                     </div>             
                  </div>   
              <div className="rows">
              <form onSubmit={onSubmitHandler} className="p-3 rounded mt-2 shadow">
                     <div className="d-flex justify-content-center align-items-center">
                           <div className="hww mt-1">
                            <img src={avatar} className="wid-img rounded-circle" alt=""/>              
                            </div>
                         <div className="start">
                            {changeAvatar ?<div>
                             <img src="/img/Active-gif-cinema.gif" height="100" alt=""/>
                             <p className="opacity">GET READY...</p>  
                            </div>:<p className='opacity mt-5 ps-1' >NO CHANGE PROFILE</p>}     
                         </div>                               
                     </div>
                     <div className="change_button d-flex justify-content-center">
                         <div className="change mt-1">
                                <input className="btn-merun" onChange={changeField} name='avatar' type="file" />       
                         </div>          
                     </div>
                     <div className="update-groups">
                          <label htmlFor="field_name">NAME</label>
                          <input onChange={(e)=>setName(e.target.value)} value={name} type="name" className="form-control" name="name" />
                     </div>              
                  <div className="update-groups mt-4">
                          <label htmlFor="field_lifeTitle">LIFETITLE</label>
                          <input onChange={(e)=>setLifeTitle(e.target.value)} value={lifeTitle} type="text" className="form-control" name="lifeTitle" />
                     </div>                   
                     <div className="update-groups mt-4">
                          <label htmlFor="field_topmoment">TOPMOMENT</label>
                          <input onChange={(e)=>setTopmoment(e.target.value)} type="text" value={topmoment} className="form-control" name="topmoment" />
                     </div>
                  <div className="update-groups mt-4">
                          <input type="submit" className="form-control" value="upload" name="submit" />
                     </div>                                  
              </form>                 
              </div>                     
             </div>                                   
        </Fragment>                           
    )                               
}