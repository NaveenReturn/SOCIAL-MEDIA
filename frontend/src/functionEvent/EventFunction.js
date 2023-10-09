import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { FunctionGetAll } from "../actions/functionAction";
import Loading from "../component/layout/Loading";
import {useNavigate} from 'react-router-dom';

export default function FunctionEvent(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
   useEffect(()=>{
      dispatch(FunctionGetAll)
   },[dispatch])
    const {FuncFunc,loading} = useSelector((state)=>state.FunctionSuccess)
    
    const Home = ()=>{
          navigate('/celebration')
    }

      return(
          <>
          {loading?<Loading/>:
                <div>
                <div className="px-3 mb-2 fun-groups d-flex justify-content-between align-items-center">
                    <h4>FUNCTION</h4>
                     <button className="btn btn-info py-2"  >New Event</button>
                </div>
         
                  {FuncFunc && FuncFunc.map((items)=>(
                         <div className="function-event d-flex p-2">
                         <div className="left-site p-1 d-flex justify-content-center align-items-center">
                              <div className="func-paner rounded">
                                   <img src={items.avatar} className="rounded" height="100" alt=""/>               
                              </div>
                         </div>
                         <div className="right-site p-1">
                              <h3 className="text-center"  >{items.name}</h3>
                              
                              <div className="mt-3" >
                                  <p className="opacity-50">Celebraties</p>                
                                  <div className="ps-2  d-flex justify-content-between align-items-center">
                                    <p className="fs-fs"><pre>{items.celebraties}</pre></p> 
                                    <p className="pe-3">DATE : <span>{items.date}</span></p>              
                                  </div>               
                              </div>
                              <div>
                                   <p className="opacity-50">Address</p>               
                                  <p><pre>{items.address}</pre></p>                
                              </div>
                              <p className="opacity-50">Details</p>
                               <div className="des">
                                    <p>{items.content}</p>               
                               </div>
                              <div className="mt-2">
                                  <p>{items.email}</p>
                                  <p>{items.contact}</p>                
                              </div>
                         </div>
                     </div> 
                  ))}
                   </div>
          }
          </>                         
      )                             
}