import React from "react";

const ProfilePostCon = ({postType,entry})=>{
    //   const check =(e)=>{
    //      console.log('source code ',e.target.src)
    //   }
     const postCheck = postType.split('.');
      if(postCheck[4] === "jpg"){
          return <div className="col col-xl-2 col-lg-3 col-md-5 col-xs-3 col-sm-5 p-1 shadow" ><img className="ofimg w-100" onClick={entry} src={postType} height={140}  alt="cinemaAll" /></div>                         
      }else if(postCheck[4] === 'mp4'){
          return <div className="col col-xl-3 col-lg-3 col-md-5 col-xs-3 col-sm-5 p-1 shadow"><video height={178} className="w-100 p-1" controls src={postType} ></video></div>                         
      }else{
         return null
      }                             
}
export default ProfilePostCon;