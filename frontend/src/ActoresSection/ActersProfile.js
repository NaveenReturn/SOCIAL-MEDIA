import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
// import ActersRegister from './propsSection/propsregister';
import {useSelector,useDispatch} from 'react-redux';
import { ActorPostGetIn } from '../actions/ActorPost';
import { ActoersLogOut } from '../actions/actores';
import {useNavigate} from 'react-router-dom';


export default function ActersProfile(){
     const dispatch = useDispatch();
     const navigate = useNavigate();
   const [control,setControl] = useState('')
   const postUpload = ()=>{
        setControl('post')
   }
   const {actoer,isAuthenticated} = useSelector((state) =>state.actoers);
   const {actorPost} = useSelector((state)=>state.actoersPost);
   useEffect(()=>{
         dispatch(ActorPostGetIn)
   },[dispatch])


   const logoutUser =(e)=>{
     e.preventDefault();
      dispatch(ActoersLogOut);
      navigate('/')
      setTimeout(function(){
         window.location.reload();
     },100);
 }
    return(
         <>
         {
            actorPost && actorPost.map((items)=>{
               console.log(items.type)
            })
         }
          {/* {control == "post"?<ActorsPost postCancel={postCancel} />:''} */}
         <div className='main-section p-1 px-1'> 
              <div className='rounded login-ac py-1 d-flex justify-content-between align-items-center' >
                  <div className='ps-3'>
                  <p className='text-white' >LOGIN 🔴 <span>{actoer && actoer.name}</span></p>
                  </div>
                  <div className='me-3'>
                      <button className='btn text-white' onClick={logoutUser} >log out</button>
                  </div>
              </div>
            {/* top paner */}
            <div className='top-to-top-paner rounded position-relative'>
                 <img src='./cinema-paner.jpg' className='w-100'/>
               <div className='actore-profile rounded-circle position-absolute left-0 top-100 translate-middle-y'>
                    <img src={actoer && actoer.avatar}  />
               </div>
            </div>
            {/* <div className='button-section d-flex justify-content-center py-2 flex-wrap'>
                 <div className='px-2'>
                   <input type='file' className='btn btn-info me-1' accept='image/*' />
                   <p className='p-1 opacity-50'>Profile Image</p>
                 </div>
                 <div className='px-2'>
                   <input type='file' className='btn btn-info' accept='image/*' />
                   <p className='p-1 opacity-50'>Paner Image</p>
                 </div>
             </div> */}
          {/* Account Section */}
          <div className='overallsection mt-5'>
              <div className='button-router mb-3'>
                  <p className='btn '><i className='fa fa-film px-2'></i>  Over All</p> 
                  <p className='btn '><i className='fa fa-image px-2'></i> Images</p>
                  <p className='btn '><i className='fa fa-video px-2'></i> Videos</p>
                  <p className='btn '><i className='fa fa-pen px-2'></i> Edit</p>   
                  <p className='btn '><i className="fa fa-solid fa-pen-to-square px-2"></i>Write</p> 
                  <p className='btn' onClick={postUpload}  ><i className="fa-solid fa-folder-tree px-2"></i>Post</p>
              </div>
              <div className='d-flex flex-wrap'>
                 {actorPost && actorPost.map((items)=>(
                    <div className='m-1 actore-section'><img src={items.post} height={140}/></div>
                 ))}

              </div>
          </div>
         </div>  
         
         </>                          
    )
}