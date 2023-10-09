import { createSlice } from "@reduxjs/toolkit";

const PostSlider = createSlice({
       name:'post',
       initialState:{
            loading:false,
            isAuthenticate:false ,
            postList:[]                      
       },
       reducers:{
           postRequest(state,action){
                return{
                   loading:true,
                   isAuthenticate:false                
                }                   
           },
           postSuccess(state,action){
                return{
                   loading:false,
                   users:action.payload.curren,
                   isAuthenticate:true                
                }                   
           },
           postFaild(state,action){
              return{
                  loading:false,
                  isAuthenticate:false,
                  error:action.payload                 
              }                     
           },
           getAllPostRequest(state,action){
               return{
                    loading:true,
                    isAuthenticate:false
               }
           },
           getAllPostSuccess(state,action){
               return{
                  loading:false,
                  isAuthenticate:true,
                  postList:action.payload.userPost
               }
           },
           getAllPostFaild(state,action){
               return{
                  loading:false,
                  isAuthenticate:false,
                  error:action.payload
               }
           },
           postUploadRequest(state,action){
              return{
                  loading:true,
                  isAuthenticate:false
              }
           },
           postUploadSuccess(state,action){
            return{
                loading:false,
                isAuthenticate:true,
                postsuc:action.payload.user
            }
          },
          postUploadFaild(state,action){
            return{
               loading:false,
               isAuthenticate:false,
               error:action.payload
            }
          }
                                   
       }                            
})

export const {actions,reducer}= PostSlider;

export const {postRequest,
   postSuccess,
   postFaild,
   getAllPostFaild,
   getAllPostRequest,
   getAllPostSuccess,
   postUploadRequest,
   postUploadFaild,
   postUploadSuccess,

}=actions
export  default reducer