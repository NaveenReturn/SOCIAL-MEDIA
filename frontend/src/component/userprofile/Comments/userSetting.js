import React, { useState } from "react";
import {useSelector} from 'react-redux';
import SettingProps from "../../../propssection/userSettingProps";
import SettingPostCheck from "./postTypeCheck";

export default function UserSetting(){
      const [props,setProps] = useState('close');
      const [userId,setUserId] = useState(); 

      const {users} = useSelector(state =>state.postSlice);
      const store = (e)=>{
           e.preventDefault(); 
           const RDI = e.target.id                       
          setUserId(RDI)
          open()  

      }
     const open = (e)=>{
//            console.log(e.target.name)                        
         if(props == "open"){
              setProps('close')                     
         }else if(props == "close"){
             setProps('open')                      
         }                           
     }
     return(
      <>
          {props == "open"?<SettingProps userId={userId} open={open}  />:""}
         <div className="">
              <div className="privacy p-1">
                  <table className="table table-hover " width="100%" >
                       <thead>
                           <tr>
                              <th><p>video Images</p></th>
                              <th><p>type</p></th>
                              <th><p>Lick</p></th>
                              <th><p>controls</p></th>
                              <th><p>Views</p></th>   
                           </tr>        
                       </thead>  
                       <tbody>
                         {users && users.map((items)=>(
                             <tr key={items._id}  >
                              <td>
                                   <div className="privacy-vi p-1"><SettingPostCheck type={items.postAvatar}  /> </div>
                              </td>
                              <td ><div className="alter"><p>{items.category}</p></div></td>  
                               <td><div className="alter"><p>1.k <small className="opacity-50">lick</small></p></div></td>
                               <td><div className="alter"><div className="d-flex align-items-center justify-content-center">{items.type === "privacy"?<div  className="d-flex align-items-center justify-content-center form-danger"><i className="fa fa-eye-slash" role="button" onClick={store} id={items._id}></i><p className="ms-1">{items.type}</p></div>
                               :<div  className="d-flex align-items-center justify-content-center"><i className="fa fa-eye p-2" role="button" onClick={store} id={items._id}  ></i><p>{items.type}</p></div>}</div></div></td>
                               <td><div className="alter"><p>100 <small className="opacity-50">view</small></p></div></td>
                           </tr>      
                         ))}

                       </tbody>          
                  </table>            
              </div>                     
         </div>
      </>                           
     )
}