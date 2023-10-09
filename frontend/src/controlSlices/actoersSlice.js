import {createSlice} from "@reduxjs/toolkit";

const ActoersSlice = createSlice({
     name:'actoer',
     initialState:{
         loading:false,
         isAuthenticated:false                          
     },
     reducers:{
         ActoersRegisterRequest(state,action){
              return{
                 ...state,
                 loading:true                  
              }                     
         },
         ActoersRegisterSuccess(state,action){
             return{
                loading:false,
                isAuthenticated:true,
                actoer:action.payload.actor                   
             }
         },
         ActoersRegisterFaild(state,action){
               return{
                  loading:false,
                  isAuthenticated:false,
                  error:action.payload
               }                    
          },
          ActoersLoginRequest(state,action){
             return{
                loading:true,
                isAuthenticated:false
             }
          },
          ActoersLoginSuccess(state,action){
             return{
                loading:false,
                isAuthenticated:true,
                actoer:action.payload.actor
             }
          },
          ActoersLoginFaild(state,action){
              return{
                loading:false,
                isAuthenticated:false,
                error:action.payload
              }
          },
          
          ActoersLoginOutRequest(state,action){
            return{
               loading:true,
               isAuthenticated:false
            }
         },
         ActoersLoginOutSuccess(state,action){
            return{
               loading:false,
               isAuthenticated:true,
               actoer:action.payload.message
            }
         },
         ActoersLoginOutFaild(state,action){
             return{
               loading:false,
               isAuthenticated:false,
               error:action.payload
             }
         },          

     }
});

const {actions,reducer}=ActoersSlice;
export const {ActoersRegisterFaild,ActoersRegisterSuccess,
ActoersRegisterRequest,
ActoersLoginFaild,ActoersLoginRequest,ActoersLoginSuccess,
ActoersLoginOutRequest,
ActoersLoginOutSuccess,ActoersLoginOutFaild
} = actions;

export default reducer
