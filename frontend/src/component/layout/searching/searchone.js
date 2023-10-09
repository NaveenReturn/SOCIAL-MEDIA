import React from "react";
import {useSelector} from 'react-redux'

export default function SearchToSearch(){
       const profile={
        width:"50px",
        height:"50px",
        border:"1px solid #ccc"                           
    }
      const {search} = useSelector((state) =>state.userSearch)
    return(
     <div className="p-2">
            {search && search.map((items,index)=>(
            <div key={index} className="d-flex justify-content-between px-3 mb-2">
               <div>
                 <h6>{items.name}</h6>
                 <p>{items.lifeTitle}</p>
              </div>
            <div style={profile} className="rounded-circle overflow-hidden">
               <img src={items.avatar} className="overflow-hidded wid-img" height={47} />  
            </div>
         </div>
            ))}                       


        </div>                           
    )
}