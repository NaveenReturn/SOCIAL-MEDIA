import {createSlice} from '@reduxjs/toolkit';

const getSingleStorySlice = createSlice({
    name:'singleStory',
    initialState:{
       loading:false,
       isAuthenticated:false                            
    },
    reducers:{
        getSingleStoryRequest(state,action){
            return{
                 ...state,
                 loading:true                  
            }                       
        },
        getSingleStorySuccess(state,action){
            return{
                loading:false,
                isAuthenticated:true,
                singlestory:action.payload.story                   
            }                       
        },
        getSingleStoryFaild(state,action){
             return{
                  loading:false,
                  isAuthenticated:false,
                  error:action.payload                 
             }                        
        }                           
    }
})
export const {actions,reducer} = getSingleStorySlice;
export const {getSingleStoryRequest,getSingleStorySuccess,getSingleStoryFaild}=actions;
export default reducer
