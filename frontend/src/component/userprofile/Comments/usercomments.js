import React from "react";

export default function UserCommet({val}){
   return(
      <>

     <div className="main-comment" style={{display:val}} >
          <p className="p-1 com-btm-line">Comments</p>
          <div className="comt-row p-1 d-flex align-items-center">
            <div className="p-1 comt-profile"><img src="./sk1.jpg" height={40}  alt="cinema-ticket"/></div>
              <div className="ps-1">
                <p className="comt-id-name text-primary opacity-50">@sivakarthigeyan88</p>
                 <p className="comt-type">Nice songs...!</p>
                  <div className="d-flex">
                <div className="like-up px-1">
                         <i className="far fa-thumbs-up px-1"></i>
                    <span>11.1k</span>
                       </div>
                         <div className="like-down px-1">
                         <i className="far fa-thumbs-down px-1"></i>
                         <span>0</span>
                         </div>
                         <div className="com-heart">
                            <i className="far fa-heart"></i>       
                         </div>
                         <div className="like-up px-1">
                         <i className="fa fa-bug-slash px-1"></i>
                         <span>report</span>
                         </div>
                     </div>
                  </div>
              </div>
              <div className="comt-row p-1 d-flex align-items-center">
            <div className="p-1 comt-profile"><img src="./img/keerth.jpg"   alt="cinema-ticket"/></div>
              <div className="ps-1">
                <p className="comt-id-name text-primary opacity-50">@keerthana12</p>
                 <p className="comt-type">Vera laval line</p>
                  <div className="d-flex">
                <div className="like-up px-1">
                         <i className="far fa-thumbs-up px-1"></i>
                    <span>11.1k</span>
                       </div>
                         <div className="like-down px-1">
                         <i className="far fa-thumbs-down px-1"></i>
                         <span>0</span>
                         </div>
                         <div className="com-heart">
                            <i className="far fa-heart"></i>       
                         </div>
                         <div className="like-up px-1">
                         <i className="fa fa-bug-slash px-1"></i>
                         <span>report</span>
                         </div>
                     </div>
                  </div>
              </div>
           </div>
      </>                             
   )
}