import React from "react";

export  default function PostProfile(){
      return(
          <div>
        <div class="row active p-1 d-flex justify-content-center">
                 <div class="col-12">
                    <button class="btn btn-success">lgout</button>
                    <button class="btn btn-primary" >status</button> 
                 </div>
             </div>                               
          <section   className="post-header  ">
             <div style={{border:"1px solid red"}}  className="card user-post col mb-2  col-sm-12">
               <div className="title p-2 row" >
                  <div className="left-site d-flex align-items-center col col-sm-9">
                      <div className="user-profile post-images">
                           <img className="img p-1" src="../img/user.jpg" alt="cinema" />
                      </div>
                      <div  className="header-title ps-2">
                           <h6>DEEPA</h6>
                           <p className="content" >Appa Ponnu,Erode</p>
                      </div>
                  </div>
                  <div className="right-site d-flex justify-content-end  align-items-center col">
                      <i className="fa fa-ellipsis-h pe-3" ></i>
                  </div>
               </div>
               <div className="center-post">
                   <img src="../img/deepa-3.jpg"  alt="cinema"/>
                   
                   <footer  className="row p-4">
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
                            <p>Liked by Amirthe</p>
                            <p><span className="span">deepa</span> ___Happy Moment Life</p>
                            <p><span className="span pe-1">subtitle</span>My All derams come true</p>
                            <p className="opacity">View all <span>430</span> Comments</p>
                            <p className="opacity py-1">18 hours ago</p>
                            <div className="input-field row">
                                 <div className="col-2">
                                  <div className="user-icon">
                                     <img className="wid-img" src="../img/walk.jpg" height="50" alt="cinema"/>
                                  </div>
                                 </div>
                                 <div className="col-10 d-flex align-items-center">
                                  <div className="input-group">
                                     <input id="input-groups"
                                      type="text" width="100"
                                      placeholder="Add a comment..."
                                      />
                                  </div>
                                 </div>
                            </div>
                       </div>
                   </footer>
               </div>
          </div>
         </section> 
         </div>                                
      )                             
}