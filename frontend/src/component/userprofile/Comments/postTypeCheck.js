

const SettingPostCheck = ({type})=>{
      const postCheck = type.split('.')

      if(postCheck[4] === "jpg" || postCheck[4] == "png"){
          return <img loading="lazy" src={type} height={130}  alt="cinemaAll" />                        
      }else if(postCheck[4] === 'mp4'){
          return <video  height={130} className="w-100 p-1" controls src={type} ></video>                       
      }else{
         return null
      }                              
}

export default SettingPostCheck;