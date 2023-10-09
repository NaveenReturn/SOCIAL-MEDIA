import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postupload } from '../../actions/PostAction';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';

export default function PostUpload(){
      const navigate = useNavigate();
   const {error} = useSelector(state =>state.postSlice)
   
   useEffect(()=>{
     if(error){
         toast(error,{
             position:toast.POSITION.BOTTOM_CENTER,
             type:"error"
         })
     }
    //  if(isAuthenticate){
    //       navigate('/')
    //  }
   },[error])

   const dispatch = useDispatch();
   const [post,setPost] = useState({
      subtitle:"",
      description:"",
      category:'',
      type:''
   })
   const [avatar,setAvatar] = useState("")

      const onChange = (e)=>{
          if(e.target.name === "postAvatar"){
                const reader = new FileReader();     
                reader.onload = ()=>{
                 if(reader.readyState === 2){
                     setAvatar(e.target.files[0])
                     console.log('avatar entry ',avatar)
                 }
               }
            reader.readAsDataURL(e.target.files[0])
          }else{
            setPost({...post,[e.target.name]:e.target.value})
          }
      }
    
      const onSubmitDate = (e)=>{
         e.preventDefault();
         const postData = new FormData();
         postData.append("subtitle",post.subtitle)
         postData.append('description',post.description)
         postData.append('postAvatar',avatar)
         postData.append('category',post.category)
         postData.append('type',post.type)
         // console.log(post.subtitle,"des",post.description,'avatar',avatar)
         dispatch(postupload(postData))
      }

    return(
       <div className='user-post-con py-3'>
          <p>post upload</p> 
          
          <div className="nav w-50 mx-auto lp">
                     <form onSubmit={onSubmitDate} className="card p-3" action="" method="post" encType="multipart/form-data">
                            <h5 className="text-center" >POST UPLOAD</h5>
                         <div className="form-groups">
                              <label htmlFor="field_name">Subtitle</label>   
                              <input type="name"
                                 id="subtitle"
                                 name="subtitle"
                                 className="form-control"
                                 onChange={onChange}
                              />  
                         </div>
                         <div className="form-groups mt-3 d-flex flex-column">
                              <label htmlFor="field_email">Description</label>   
                            <textarea className='form-control' name="description" onChange={onChange} id="description" cols="26" rows="3"></textarea>  
                         </div>
                         <div className="form-groups mt-3">
                              <label htmlFor="field_avatar">Avatar</label>   
                              <div className="col d-flex">
                              <div className="custome-file ms-1">
                                   <input type="file"
                                   id="postAvatar"
                                   name="postAvatar"
                                   className="form-control"
                                   onChange={onChange}
                                />
                              </div> 
                              </div> 
                         </div>
                         <div className='form-groups' >
                             <label>Select Category</label>
                              <select className='form-control'
                                   name='category'
                                   onChange={onChange}
                               >
                                   <option value={''} >--choose--</option>
                                   <option value={'😊'}>😊</option>
                                   <option value={'😂'}>😂</option>
                                   <option value={'❤️'}>❤️</option>
                                   <option value={'😠'}>😠</option>
                              </select>
                         </div>
                         <div className='form-groups' >
                             <label>Video Type</label>
                              <select className='form-control'
                                   name='type'
                                   onChange={onChange}
                               >
                                   <option value={''} >--select--</option>
                                   <option value={'public'}>publick</option>
                                   <option value={'privacy'}>privacy</option>
                              </select>
                         </div>
                         <div className="form-group d-flex justify-content-center">
                              <button type="submit" className="btn btn-merun mt-3" >Tack Ready</button>     
                         </div>
                     </form>  
                      {/* <!--right-site  --> */}
                  <div className="d-flex justify-content-center align-items-center post-success" >
                      <div className="">
                         

                         {avatar?<img className="ms-1" src="./postupload-1.gif" height="208" alt=""/>:
                          <img src="./postupoad-2.gif" height="261" alt=""/> }       
                      </div>                 
                    </div>                    
        </div>                                 
       </div>                            
    )
}