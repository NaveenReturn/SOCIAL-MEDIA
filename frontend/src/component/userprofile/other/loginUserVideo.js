import React,{useEffect} from "react";
import ProfilePostCon from "../profilePostControl";
import { postAction } from "../../../actions/PostAction";
import { useSelector,useDispatch } from "react-redux";

export default function LoginVideos(){
          const dispatch = useDispatch();
//       const {user} = useSelector((state)=>state.authSlice)
       
      const {users} = useSelector(state =>state.postSlice)                        
         useEffect(()=>{
           dispatch(postAction) 
      },[dispatch])
    return(
         <>
         <div className="row mt-5 px-4">
          {users && users.map((post,index) =>
             <ProfilePostCon key={index}  postType={post.postAvatar} />
            )}
         </div>
         </>                          
    )                               
}