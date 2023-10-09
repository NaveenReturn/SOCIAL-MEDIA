
const PostControll = ({postType})=>{
     const postCheck = postType.split('.')

      if(postCheck[4] === "jpg"){
          return <div className="img-cont d-flex align-items-center justify-content-center"><img loading="lazy" src={postType} height={360}  alt="cinemaAll" /></div>                        
      }else if(postCheck[4] === 'mp4'){
          return <div className="video-cont"><video  height={460} className="w-100 p-1" controls src={postType} ></video></div>                        
      }else{
         return null
      }                             
}
export default PostControll;