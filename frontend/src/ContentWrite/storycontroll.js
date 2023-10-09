import { useEffect } from "react"
import { getAllUser } from "../actions/GetAllUser";
import {useDispatch,useSelector} from 'react-redux'
 
const StoryHeadSplit = ({user_id,catType})=>{
   const dispatch = useDispatch();
 
   useEffect(()=>{
      dispatch(getAllUser)
   },[dispatch])
   const {users} = useSelector((state) =>state.GetAllUser)

    return(
       <>
        {users && users.map((items)=>{
           
           if(items._id == user_id){
              return(
             <div className="headtitle d-flex justify-content-between">
               <div className="leftcontent">
                 <p className="p-1 text-white">{items.name}</p>
                 <h4 className="lead text-white"><span className="opacity-50" >category</span> {catType}</h4>
                  <div className="d-flex align-items-center">
                    <button className="btn  px-4 text-white">follow</button>
                    <p className="ps-2 text-white top-icons">follower <span>11.2k</span></p>
                    <div className='d-flex align-items-center'>
                    <i className="far fa-thumbs-up px-1 top-icons ps-4 text-white mouse"><span className='px-1 text-white'>1k</span></i>
                    <i className="far fa-thumbs-down px-1 top-icons text-white mouse"><span className='px-1 text-white'>4</span></i>
                    <i className="far fa-heart px-1 top-icons text-white mouse"><span className='p-1'>support</span></i>
                    <li className='fa fa-bug text-success top-icons mouse'><span className='p-1'>report</span></li>
                    </div>
                  </div>
               </div>
              <div className="p-2 ">
                 <div className="rightimg d-flex justify-content-center">
                    <img src={items.avatar} className="" height="100" alt="cinema"/>
                 </div>
              </div>
           </div>
              )
           }
        })}
       
       </>
    )
} 

export default StoryHeadSplit;