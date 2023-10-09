import React, { useEffect, useState } from "react";
import Header from "./component/layout/Header";
import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom'
import Register from "./component/layout/Register";
import PostProfile from "./component/layout/PostProfile";
import Profile from "./component/userprofile/userProfile";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./component/layout/Login";
import Update from "./component/layout/Update";
import Home from "./component/userprofile/Home";
import PostUpload from "./component/layout/postUpload";
import {MoviesUpdate} from "./UpdateMovies/latestMovies";
import WriteStoryContent from "./ContentWrite/WriteStory";
import ActersProfile from "./ActoresSection/ActersProfile";
import store from './store';
import { loadUser } from "./actions/RegisterAction";
import UserViewProfile from "./component/userprofile/userviewProfile";
// import MoviesUpload from "./propssection/moviesprops";
import ActoresLogin from "./ActoresSection/Actorlogin";
import TokenSuccessed from "./ActoresSection/TokenSuccess";
import ActoresRegister from "./ActoresSection/actoresRegister";
import UserSetting from "./component/userprofile/Comments/userSetting";
import Search from "./component/layout/searchly";
import StoryUpdateSection from "./ContentWrite/StoryUpdate";
import {useSelector} from 'react-redux';
import ActorsPost from "./ActoresSection/propsSection/ActorPostToPost";
import FunctionEvent from "./functionEvent/EventFunction";
import NewFunction from "./propssection/Function";


function App(){
   const [left,setLeft] = useState('hide')
   useEffect(()=>{
       store.dispatch(loadUser)
   },[])

   const {user} = useSelector((state)=>state.authSlice);

    let sd = {
        height:"560px",
        width:"360px",
        border:"1px solid #ccc",
        position:"fixed",
        // right:"10px",
        top:"16%"
    }

    const check = ()=>{
        if(left === "hide"){
             setLeft("show")
        }else if(left == "show"){
            setLeft("hide")
        }
    }
    // let btnLeft = document.getElementById('btnup');
    // let btnRight = document.getElementById('btndown');
    // let statusScroll = document.querySelector('.status-section-img-video');
      
    // let currentValue = 0;
    // let moveDuration = 100;
    // function statuscheck(val){
    //     console.log(val)
    //     currentValue += (val * moveDuration);

    //     statusScroll.style.top = currentValue +'px'
     
    // }
     return(
        <Router>
        <div className="overflow-x-hidden">
            <div className="story-status-s">
                             {/* story section start */}
            {/* <div className="story-status">
            <div className="home-page-status">
                <div className="status-btn-group">
                    <button type="button" id="btnup"><i className="fa fa-chevron-up"></i></button>
                    <button type="button" id="btndown" ><i className="fa fa-chevron-down"></i></button>
                </div>
                <div className="status-section-img-video">
                   <div className="image-on"><img src="./img/5611e0ff6e63ca5b985c1042c94d5c1b.jpg" alt="cinema-ticket"/></div>
                   <div className="image-on"><img src="./img/a22f1ae66980eec900f3df8c0f0db0d9.jpg" alt="cinema-ticket"/></div>
                   <div className="image-on"><img src="./img/d778e998223d0cd079f13eb367dd7717.jpg" alt="cinema-ticket"/></div>
                   <div className="image-on"><img src="./img/instagram_1663681179444.jpg" alt="cinema-ticket"/></div>  
                   <div className="image-on"><img src="./img/instagram_1663681347931.jpg" alt="cinema-ticket"/></div> 
                   <div className="image-on"><img src="./img/keerth.jpg" alt="cinema-ticket"/></div>  
                   <div className="image-on"><img src="./img/keerth.jpg" alt="cinema-ticket"/></div> 
                   <div className="image-on"><img src="./img/keerth.jpg" alt="cinema-ticket"/></div> 
                   <div className="image-on"><img src="./img/keerth.jpg" alt="cinema-ticket"/></div> 
                   <div className="image-on"><img src="./img/keerth.jpg" alt="cinema-ticket"/></div> 
                   <div className="image-on"><img src="./img/keerth.jpg" alt="cinema-ticket"/></div> 
                   <div className="image-on"><img src="./img/keerth.jpg" alt="cinema-ticket"/></div> 
                   <div className="image-on"><img src="./img/290419337da751a8c19f5dc951a65426.jpg" alt="cinema-ticket"/></div> 
                </div>
         </div>
         </div> */}
            {/* story section end */}
            </div>
              <div className={`search overflow-auto ${left}`} style={sd}>
                  <Search  check={check} />
              </div>
            <Header/>
            <ToastContainer theme="dark" />
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/postupload" element={<PostUpload/>} />
               <Route path="/register" element={<Register/>} />
               <Route path="/post" element={<PostProfile/>} />
               <Route path="/profile" element={<Profile/>} />
               <Route path="/login" element={<Login/>} />
               <Route path="/update/:id" element={<Update/>} />
               <Route path="/usersetting" element={<UserSetting/>} />
               {/* movies update */}
               <Route path="/latesmovies" element={<MoviesUpdate/>} />
               {/* write story */}
               <Route path="/writeuserstory" element={<WriteStoryContent/>} />
               <Route path="/storyupdate/:id" element={<StoryUpdateSection/>} />

               {/* privacy Account */}
               <Route path="/actersroot"  element={<ActersProfile/>}/>
                <Route path="/actorpost"  element={<ActorsPost/>} />
               {/* userprofile views */}
               <Route path="/viewprofile/:id" element={<UserViewProfile/>} />
               {/* ACTORESSECTIN  AUTHENTICATED ROOT*/}
               <Route path="/cinemalogin" element={<ActoresLogin/>} />
               <Route path="/gettoken"  element={<TokenSuccessed/>}/>
               <Route path="/actoreregister" element={<ActoresRegister/>} />

               {/* EVENT FUNCTION */}
               <Route path="/celebration" element={<NewFunction/>}  />
               <Route path="/event" element={<FunctionEvent/>}  />
            </Routes>
           
        </div>
        
       </Router>
     )
}

export default App;