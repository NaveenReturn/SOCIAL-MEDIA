import React, { Fragment,useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {Link,useNavigate} from "react-router-dom";
import { logOut } from "../../actions/RegisterAction";
// import {AiOutlineVideoCameraAdd} from 'react-icons/ai';
// import $ from 'jquery';
export default function Header(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user,isAuthenticated,logout} = useSelector((state)=>state.authSlice);
    // console.log('data entry ',user && user.name)
    
    const [open,setOpen] = useState('close');
    const StoryChange = ()=>{
         if(open === "open"){
            setOpen("close")
         }else if(open === "close"){
            setOpen('open')
         }
    }
    const privacyAccount =()=>{
          navigate('/cinemalogin')
    }
    const logoutUser =(e)=>{
        e.preventDefault();
         dispatch(logOut);
         navigate('/')
         setTimeout(function(){
            window.location.reload();
        },100);
    }
    useEffect(()=>{
     if(isAuthenticated){
        navigate('/')
     }

    },[isAuthenticated])
    return(
        <Fragment>
       <div style={{background:'#ccc'}}  >
            <nav className="navbar row px-5">
                   <div className="col-12 col-md-3">
                      <div className="navebar-brand">
                            <img src="./img/cinema-logo-logo.png" onClick={privacyAccount} height="51" alt="Instagram"/>          
                      </div>          
                   </div>  
                   {/* <div className="col-12 col-md-3 ">
                       <div className="input-group">
                           <input type="search"
                           id="search_field"
                           className="form-control"
                           placeholder="search...."
                           /> 
                           <div className="input-group-append">
                               <button id="search_btn" className="btn" >
                                   <i className="fa fa-search" aria-hidden="true"></i>
                               </button>
                           </div>      
                       </div>            
                   </div> */}
                   <div className="d-flex align-items-center col-12 col-md-3">
                      <div className="top-top-stor d-flex me-1">
                          <div className="top-stores me-xl-2" >
                              <img src="./img/vijay-home.jpg"  alt="cinema" />
                          </div>
                          <div className="top-stores me-xl-2">
                          <img src="./img/Ajith-1.jpg" alt="cinema" />
                          </div>
                          <div className="top-stores">
                          <img src="./img/sk-1.jpeg" alt="cinema" />
                          </div>
                      </div>
                      <div className="profile">
                        {isAuthenticated ? <img src={user.avatar}  className="wid-img rounded-circle" alt="Cinema"/>
                    :<img src="./img/user.jpg" width='100%' className="rounded-circle" alt="Cinema"/>}       
                      </div>
                   </div> 
                    {/* manu bars */}
                    <div className="drap-down" >
                   <div>
                    <Link className="btn opacity" style={{color:'#4169e1'}} to={'/'} ><i className="fa fa-home p-1"></i>Home</Link>
                     {isAuthenticated?<>
                     <button className="btn" type="button" onClick={logoutUser} >
                        <i className="fa fa-user p-1"></i>LogOut</button>
                        <Link to={'/login'} className="btn opacity" ><i className="fa fa-user p-1"></i>prifile</Link>
                        </>:
                     <Link to={'/login'} className="btn opacity" ><i className="fa fa-user p-1"></i>Login</Link>}
                    <Link to={'/latesmovies'} className="btn opacity" ><i className="fa fa-clapperboard p-1"></i>Movie's Update</Link>
                    <Link to={'#'} className="btn opacity" onClick={StoryChange} ><i className="fa fa-photo-film"></i> Story</Link>
                    <Link className="btn opacity"><i className="fa fa-lock"></i> Personal Accout</Link>
                    <Link to={"/writeuserstory"} className="btn opacity"><i className="fa fa-solid fa-pen-to-square"></i> Story Write</Link>
                    <Link to={'/postupload'} className="btn opacity"><i className="fa fa-camera p-1"></i>Post</Link>
                    <Link to={'/event'} className="btn opacity"><i className="fa fa-folder-open p-1"></i>Function</Link>
                        </div>
                    </div>
              </nav> 
              <div className="follw-story" >
                      {/* stoty section */}
                {open ==="open"?
                <div className="folw-story rounded p-1 d-flex">
                     <div className="story-position p-1 rounded-circle">
                        <img  src="./img/sk1.jpg" className="rounded-circle" alt="cinema-ticket" />
                        </div>
                        {/*secount  */}
                        <div className="story-position p-1 rounded-circle">
                            <img src="./img/suriya_1.jpg" alt="cinema-ticket" className="rounded-circle" />
                        {/* <video className="rounded-circle" src="./videos/harini.mp4"></video> */}
                        </div>
                    {/* three */}
                    <div className="story-position p-1 rounded-circle">
                        <img src="./img/keerth.jpg" alt="cinema-ticket" className="rounded-circle" />
                        </div>
                </div>:""
                  }
                  </div>
            </div>                       
        </Fragment>                           
    )
}