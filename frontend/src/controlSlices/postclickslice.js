import {createSlice} from '@reduxjs/toolkit';


const getSingleuserPost = createSlice({
      name:'post',
      initialState:{
           loading:false,
           isAuthenticate:false
      },
      reducers:{
               getUserClickRequest(state,action){
             return{
                 loading:true,
                 isAuthenticate:false
             }
          },
          getUserClickSuccess(state,action){
            return{
               loading:false,
               isAuthenticate:true,
               postList:action.payload.curren
            }
          },
          getUserClickFaild(state,action){
             return{
               loading:false,
               isAuthenticate:false,
               error:action.payload
             }
          }
      }
})

const {actions,reducer} = getSingleuserPost;

export const{getUserClickFaild,getUserClickRequest,getUserClickSuccess} = actions;
export default reducer
