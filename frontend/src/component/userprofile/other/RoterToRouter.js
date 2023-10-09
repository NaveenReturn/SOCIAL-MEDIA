import LoginStorySplit from "./loginUserStory"
import LoginVideos from "./loginUserVideo"
import './style.css'

export const RouterDisport = ({menulist})=>{

   if(menulist == "videos"){
       return <LoginVideos/>                          
   }
   else if(menulist == "story"){
      return <LoginStorySplit/>
   }
}