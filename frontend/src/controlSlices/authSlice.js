import {createSlice} from '@reduxjs/toolkit';


const UserGetAll = createSlice({
    name:'userget',
    initialState:{
        loading:false,
        isAuthenticate:false                           
    },
    reducers:{
         getRequest(state,action){
             return{
                ...state,
                loading:true                   
             }
         },
         getSuccess(state,action){
            return{
               loading:false,
               isAuthenticate:true,
               users:action.payload.user                    
            }
         },
         getRequestFaild(state,action){
             return{
                 loading:false,
                 isAuthenticate:false,
                 error:action.payload                  
             }                      
         },                           
    }
})

const {actions,reducer} = UserGetAll;

export const {getRequest,
    getRequestFaild,
    getSuccess,
}
     = actions;

export default reducer