import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { getAllUser } from "../../actions/GetAllUser";
import { Link } from "react-router-dom";

const PostHeader = ({postId})=>{
      const dispatch = useDispatch();
      useEffect(()=>{
         dispatch(getAllUser) 
      },[dispatch])
      const {users} = useSelector((state) =>state.GetAllUser);
    return(
         <div>
           {users && users.map((items,i) =>{                  
               if(items._id === postId){
                   return(
                     <div key={i} className="d-flex align-items-center">
                    <div className="user-profile post-images">
                          <Link to={`/viewprofile/${postId}`}><img key={postId} className="img p-1" src={items.avatar} alt="cinema" /></Link>
                      </div>
                       <div className="header-title ps-2">
                           <h6>{items.name}</h6>
                           <p className="content" >{items.lifeTitle}</p>
                      </div>                    
                     </div>
                  )                
               }                    
           })}
         </div>                          
    )


}

export default PostHeader