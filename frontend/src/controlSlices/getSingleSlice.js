import {createSlice} from '@reduxjs/toolkit';

const GetSingle = createSlice({
    name:'getsingleuser',
    initialState:{
       loading:false,
       isAuthenticated:false
    },
    reducers:{
      getSingleUserRequset(state,action){
            return{
                isAuthenticated:false,
                loading:true
            }
        },
        getSingleUserSuccess(state,action){
            return{
                loading:false,
                isAuthenticated:true,
                user:action.payload.user
            }
        },
        getSingleUserFaild(state,action){
            return{
                loading:false,
                isAuthenticated:false,
                error:action.payload
            }
        },
    }
})
export const {actions,reducer}= GetSingle;
export const {getSingleUserRequset,getSingleUserSuccess,getSingleUserFaild}=actions;

export default reducer;