import React, { Fragment, useEffect,useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { getAllPost } from "../../actions/PostAction";
import PostControll from "./PostControl";
import PostHeader from "./PostProfileHeader";
import FooterInputLogo from "./userFooterLogo";
import Loading from "../layout/Loading"; 
import $ from 'jquery';
export default function Home(){
      const dispatch = useDispatch();
      const [commet,setComment] = useState();
    //   const Comments =(e)=>{
    //        setComment(e.target.value)
    //   }
         $('.jp').on('click',function(){
             $(this).next().slideToggle('slow')
         })

      const {postList,loading} = useSelector(state =>state.postSlice);
      
    useEffect(()=>{
        dispatch(getAllPost);
    },[dispatch])

     return(
          <Fragment>

         <div className="home-item" >
            {loading?<Loading/>:
             <Fragment>
            <h4 className="p-2 opacity">தமிழ் திரையரகம் சினிமா பாமிலி</h4> 
           
           {postList && postList.map((items,index) =>(
               
            <section   className="post-header row" key={index}>
              <div   className="card user-post col mb-2 col-xl-9 col-sm-12">
                 <div className="title p-2 row" >
                   <div className="left-site d-flex align-items-center col col-sm-9">
                    {/* POST HEADER SECTION */}
                       <PostHeader postId={items.user} key={items._id} />
                      {/* <div className="user-profile post-images">
                           <img className="img p-1" src="../img/user.jpg" alt="cinema" />
                      </div>
                      <div  className="header-title ps-2">
                           <h6>DEEPA</h6>
                           <p className="content" >Appa Ponnu,Erode</p>
                      </div> */}
                  </div>
                  <div className="right-site d-flex justify-content-end  align-items-center col">
                      <i className="fa fa-ellipsis-h pe-3" ></i>
                      {/* <div className="user-profile post-images">
                           <img className="img p-1" src="../img/default_avatar-1.jpg" alt="cinema" />
                      </div> */}

                  </div>
               </div>
               <div className="center-post">
                   {/* <img src="../img/deepa-3.jpg"  alt="cinema"/> */}
                   <PostControll postType={items.postAvatar} />
                   <footer  className="row px-1">
                       <div  className="icon row">
                            <div className="col col-xl-6 col-lg-5 col-md-4 p-1">
                               <i className="far fa-heart px-2"></i>
                               <i className="fab fa-facebook-messenger pe-2"></i>
                               <i className="fab fa-telegram pe-2"></i>
                            </div>
                            <div className="d-flex align-items-center justify-content-end col col-xl-6 col-lg-7 col-md-8 ">
                                   <i className="far fa-bookmark"></i>
                            </div>
                       </div>
                       <div className="col px-3">
                       <p className="opacity py-1">18 hours ago</p>
                             <div className="d-flex align-items-center">
                              <div className="footer-like-folw ">
                               <div className="fot-like-one p-1">
                            <img src="sk1.jpg" height="50" alt="cinema-ticket"/>
                         </div>
                        <div className="fot-like-secount p-1">
                           <img src="sk1.jpg" height="50" alt="cinema-ticket"/>
                           </div>
                            </div>
                            <p className="ps-3">Liked by Amirthe</p>
                             </div>
                            <p><span className="span p-1"></span>{items.description}</p>
                            <div className="d-flex justify-content-between"  >
                              <p className="pe-1"><span className="span pe-1">subtitle</span>{items.subtitle}</p>
                              <div>
                                 <li className="fab fa-instagram px-1" style={{color:'#b40173'}} ></li>
                                 <li className="fab fa-facebook px-1 " style={{color:'#0a82ed'}} ></li>
                                 <li className="fab fa-youtube px-1" style={{color:'red'}} ></li>
                              </div>
                            </div>
                            <div className="input-field row">
                                 <div className="col-2">
                                  <div className="user-icon">
                                    {/* <img src="../img/deepa-3.jpg"  alt="cinema" /> */}
                                     <FooterInputLogo InputLogo={items.user} />
                                  </div>
                                 </div>
                                 <div className="col-10 d-flex align-items-center">
                                  <div  className="input-group">
                                     <input id="input-groups"
                                      type="text" width="100"
                                      placeholder="Add a comment..."
                                      onChange={(e)=>setComment(e.target.value)}
                                      />
                                  </div>
                                  {commet?<p>post</p>:""}
                                 </div>
                            </div>
                       </div>
                   </footer>
               </div>
               <p role="button" className="jp">comments</p>

               <div className="main-comment lap"  >
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
          </div>
          {/* <p role="button" className="jp">views___</p> */}

           {/* COMMENT SECTION DIV */}
            {/* <UserCommet val={open} /> */}
       {/* <div className="main-comment lap"  >
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
           </div> */}
         </section> 

           ))}
          </Fragment>
           }
         </div> 
         </Fragment>                         
     )                              
}