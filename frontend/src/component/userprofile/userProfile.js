import React, { Fragment, useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link} from "react-router-dom";
// import { postAction } from "../../actions/PostAction";
// import ProfilePostCon from "./profilePostControl";
// import LoginStorySplit from "./other/loginUserStory";
import { RouterDisport } from "./other/RoterToRouter";


export default function Profile(){
      const dispatch = useDispatch();
      const {user} = useSelector((state)=>state.authSlice)
       
      const {users} = useSelector(state =>state.postSlice)

   const [control,setControl] = useState('videos')

// javascript
const container = document.querySelector(".containers")

const courses=[
  {course:'profile support',percent:90,color:"#fc466b"},
  {course:'public support',percent:65,color:"#731CAE"},
  {course:'story write support',percent:53,color:"#1DB840"},
]


const progressGroups = document.querySelectorAll('.progress-group');


progressGroups.forEach((progress,index)=>{
   let prograssStartValue =0;
   let prograssStartEnd = courses[index].percent;
   let speed=100;
   let progressTimer=setInterval(()=>{
       prograssStartValue++;
       if(prograssStartValue == prograssStartEnd){
             clearInterval(progressTimer)                      
       }
       progress.querySelector('.circle-prograss')
       .style.background=`conic-gradient(${courses[index].color} ${3.6 * prograssStartValue}deg, #fff 0deg)`;
       progress.querySelector('.course-value').innerHTML = prograssStartValue + "%";
   },speed)
});

  const Videos = ()=>{
      setControl('videos')
  }
  const Storys = ()=>{
     setControl('story')
  }

      return(
 
       <Fragment>
          <div className="navbars mt-3" >
                  <div className="row">
                       <div className="col col-xl-6 d-flex ps-5 align-items-center p-1">
                            <div className="profile-img" role="button" >
                                  <Link to={`/update/${user._id}`} ><img className="wid-img" src={user.avatar} height="105" alt="cinema"/></Link>                       
                            </div>
                          <div className="col ps-2">
                               <h6>{user.name}</h6>
                               <p className="opacity ps-xl-2">{user.lifeTitle}</p>
                               <p className="opacity ps-xl-2">Followers +<small> 2473</small></p>
                               <p className="opacity ps-xl-2">private active</p>
                               <p className="opacity ps-xl-2">moment <small>{user.topmoment}</small></p>
                               <Link to={'/usersetting'} className="uline p-1" ><i className="fa fa-bars ps-xl-2 p-2"></i>setting</Link>
                          </div>
                       </div>
                       <div className="col col-xl-6 d-flex align-items-center">
                            <div className="profile-img">
                                   <img className="wid-img" src="../img/suriya_1.jpg" height="105" alt="cinema"/>                      
                            </div>  
                           <div className="col ps-2">
                            <h6>suriya</h6>
                            <p className="opacity ps-xl-2">life enjoy</p>
                             <p className="opacity ps-xl-2">Family Account</p>
                             <p className="opacity ps-xl-2">moment <small>vera leval</small></p>
                           
                           </div>
                       </div>            
                  </div>
                  {/* <div className="row ">
                      <div className="col mt-5 d-flex justify-content-center">
                          <img src="../img/cinema-ticket.png" height="40" alt="cinema"/>  
                          <img src="../img/cinema-tiket.png" height="40" alt="cinema"/>      
                      </div>            
                  </div> */}
                 {/* <div className="col  mt-2 col-xl-12 containers" >
                        {courses.map((course,index)=>(        
                         <div key={index} className="progress-group">
                         <div className="circle-prograss" >
                             <span className="course-value">0%</span>
                         </div>       
                         <label htmlFor="course_lable" className="text" >{course.course}</label>                
                         </div>
                    
                        ))}
                     </div>  */}
                  {/* menu list */}
                   <div  className="w-100">
                      <ul className="d-flex">
                         <li className="list-style p-2 mouse" onClick={Videos} >videos</li>
                         <li className="list-style p-2 mouse" onClick={Storys} >storys</li>
                      </ul>
                   </div>

                  {/* menu list */}
                       {/* <LoginStorySplit user_id={users._id && users._id}/> */}
                  
                  {/* v s */}
                     <RouterDisport menulist={control} />
                  
                  {/* v e */}

                {/* <div className="row mt-5 px-4">
                  {users && users.map((post,index) =>
                     <ProfilePostCon key={index}  postType={post.postAvatar} />
                      )}
                </div> */}

                {/* {users && users.map(post => <video height={140} src={post.postAvatar} ></video>)} */}
               </div> 
          </Fragment>                         
      )                             
}