import {createSlice} from '@reduxjs/toolkit';

const userSearch = createSlice({
      name:"usersearch",
      initialState:{
          loading:false,
          isAuthenticated:false                         
      },
      reducers:{
          userSearchRequest(state,action){
               return{
                   ...state,
                   loading:true                
               }                    
          },
          userSearchSuccess(state,action){
              return{
                  loading:false,
                  isAuthenticated:true,
                  search:action.payload.user                 
              }                     
          },
          userSearchFaild(state,action){
               return{
                   loading:false,
                   isAuthenticated:false,
                   error:action.payload                
               }                    
          }                         
      }
})

export const {actions,reducer} = userSearch;

export const {userSearchRequest,userSearchSuccess,userSearchFaild}=actions;

export default reducer