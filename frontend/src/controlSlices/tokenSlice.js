import {createSlice} from '@reduxjs/toolkit';

const GETTKEN = createSlice({
     name:"token",
     initialState:{
        loading:false,
        isAuthenticated:false
     },
     reducers:{
         getTokenRequest(state,action){
             return{
                ...state,
                loading:true                   
             }
         },
         getTokenSuccess(state,action){
            return{
                loading:false,
                token:action.payload.message,
                isAuthenticated:true                   
            }
         },
         getTokenFaild(state,action){
             return{
                 loading:false,
                 isAuthenticated:false,
                 error:action.payload                  
             }
         }
     }
})
const {actions,reducer} = GETTKEN;

export const {getTokenFaild,getTokenRequest,getTokenSuccess}=actions;
export default reducer;