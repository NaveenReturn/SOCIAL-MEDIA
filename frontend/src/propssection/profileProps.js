import React from "react";
import './props.css';

export default function ProfileProps({close,image,profil,name}){

  return(
       <>
        <div className="mainprops d-flex justify-content-center rounded">
               <div className="prop mt-5">
                 <div className="top-props d-flex justify-content-between px-1 align-items-center">
                    <div className="left-props hw mt-1">
                     <img height="55" className="wid-img " src={profil} />             
                   </div> 
                   <p>{name}</p> 
                   <div className="right-site " >
                       <i onClick={close} className="fa fa-circle-xmark prop-fs "></i>              
                   </div>                
               </div> 
               <div className="prop-center py-1 d-flex justify-content-center">
                     <img src={image} className="rounded" height="330" alt="cinema"/>              
               </div>                
               </div>                
            </div> 
       </>
  )
}