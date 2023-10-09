import React, { Fragment ,useEffect, useState} from "react";
import {useDispatch,useSelector} from 'react-redux';
import {useParams,Link} from 'react-router-dom';
import ProfilePostCon from "./profilePostControl";
import { getSingleUserAllPost} from "../../actions/PostAction";
import { getSingleUser } from "../../actions/RegisterAction";
import ProfileProps from "../../propssection/profileProps";

export default function UserViewProfile(){
     const [athe,setAthe] = useState()

     const focus = (e)=>{
          setAthe(e.target.src)
     }
     const focusclose = ()=>{
           setAthe('')
     }
     const {id:userID} = useParams(); 
     const dispatch = useDispatch();
     const {user} = useSelector((state)=>state.getSingleprofil)
     const {postList} = useSelector(state =>state.clickuserpost)
     useEffect(()=>{
          dispatch(getSingleUser(userID)) 
          dispatch(getSingleUserAllPost(userID))
     },[dispatch]) 
// const courses=[
//   {course:'profile support',percent:90,color:"#fc466b"},
//   {course:'public support',percent:65,color:"#731CAE"},
//   {course:'story write support',percent:53,color:"#1DB840"},
// ]

// const progressGroups = document.querySelectorAll('.progress-group');


// progressGroups.forEach((progress,index)=>{
//    let prograssStartValue =0;
//    let prograssStartEnd = courses[index].percent;
//    let speed=100;
//    let progressTimer=setInterval(()=>{
//        prograssStartValue++;
//        if(prograssStartValue == prograssStartEnd){
//              clearInterval(progressTimer)                      
//        }
//        progress.querySelector('.circle-prograss')
//        .style.background=`conic-gradient(${courses[index].color} ${3.6 * prograssStartValue}deg, #fff 0deg)`;
//        progress.querySelector('.course-value').innerHTML = prograssStartValue + "%";
//    },speed)
// });                            
   return(

    <Fragment>
                 <div className="navbars mt-3" >
                    <Link to={'/'} className="user-earo"><i className="fas fa-circle-chevron-left p-1"></i>Back</Link>
                    {athe?<ProfileProps name={user && user.name} profil={user && user.avatar} close={focusclose} image={athe} />:""}
                  <div className="row">
                       <div className="col col-xl-6 d-flex align-items-center ps-5">
                            <div className="profile-img"  >
                                  <img className="wid-img" src={user && user.avatar} height="105" alt="cinema"/>                       
                            </div>
                          <div className="col ps-2">
                               <h6>{user && user.name}</h6>
                               <p className="opacity ps-xl-2">{user && user.lifeTitle}</p>
                               <p className="opacity ps-xl-2">Followers +<small> 2473</small></p>
                               <p className="opacity ps-xl-2">private active</p>
                               <p className="opacity ps-xl-2">moment <small>{user && user.topmoment}</small></p>
                          </div>
                       </div>
                      {user && user.follower <= 500? 
                      <div className="col col-xl-6 d-flex align-items-center">
                         <div className="profile-img">
                                <img className="wid-img" src="../img/follower-500.jpg" height="105" alt="cinema"/>                      
                         </div>
                         <div className="col ps-2">
                             <p>WAITING 😊</p>
                             <p>Privacy Account Family</p>
                         </div>
                      </div>
                         :<div className="col col-xl-6 d-flex align-items-center">
                         <div className="profile-img">
                                <img className="wid-img" src="../img/suriya_1.jpg" height="105" alt="cinema"/>                      
                         </div>  
                        <div className="col ps-2">
                         <h6>suriya</h6>
                         <p className="opacity ps-xl-2">life enjoy</p>
                          <p className="opacity ps-xl-2">Family Account</p>
                          <p className="opacity ps-xl-2">moment <small>vera leval</small></p>
                        </div>
                    </div>}
                  </div>
                  <div className="row ">
                      <div className="col mt-5 d-flex justify-content-center">
                          <img src="../img/cinema-ticket.png" height="40" alt="cinema"/>  
                          <img src="../img/cinema-tiket.png" height="40" alt="cinema"/>      
                      </div>            
                  </div>
                 {/* <div className="col  mt-2 col-xl-12 containers" >
                        {courses.map((course)=>(        
                         <div class="progress-group">
                         <div class="circle-prograss" >
                             <span class="course-value">0%</span>
                         </div>       
                         <label for="" class="text" >{course.course}</label>                
                         </div>
                    
                        ))}
                     </div>  */}
                <div className="row mt-5 px-4">
                  {postList && postList.map((post,index) =>
                     <ProfilePostCon entry={focus} key={index}  postType={post.postAvatar} />
                      )}
                </div>
               </div>
    </Fragment>
   )
}