import {createSlice} from '@reduxjs/toolkit';

const SecureSection = createSlice({
   name:"secure",
   initialState:{
       loading:false,
       isAuthenticate:false                            
   },
   reducers:{
        SecureRequest(state,action){
             return{
                 ...state,
                 loading:true                  
             }                      
        },
        SecureSuccess(state,action){
             return{
                  loading:false,
                  isAuthenticate:true,
                  result:action.payload.storw                 
             }                      
        },
        SecureFaild(state,action){
            return{
               loading:false,
               isAuthenticate:false,
               error:action.payload                    
            }                       
        }                           
   }
})
export const {actions,reducer} = SecureSection;
export const {SecureRequest,SecureSuccess,SecureFaild}=actions;

export default reducer