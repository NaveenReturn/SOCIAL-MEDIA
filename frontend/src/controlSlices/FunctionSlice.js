import {createSlice} from '@reduxjs/toolkit';

const FunctionPost = createSlice({
    name:'eventpost',
    initialState:{
        loading:false,
        isAuthenticated:false                           
    },
    reducers:{
        FunctionPostRequest(state,action){
            return{
                ...state,
                loading:true                   
            }                       
        },
        FunctionPostSuccess(state,action){
            return{
                 loading:false,
                 isAuthenticated:true,
                 FuncFunc:action.payload.Func                  
            }                       
        },
        FunctionPostFaild(state,action){
            return{
               loading:false,
               isAuthenticated:false,
               error:action.payload                    
            }                       
        },

        FunctionGetGetRequest(state,action){
            return{
                ...state,
                loading:true                   
            }                       
        },
        FunctionGetGetSuccess(state,action){
            return{
                 loading:false,
                 isAuthenticated:true,
                 FuncFunc:action.payload.Func                  
            }                       
        },
        FunctionGetGetFaild(state,action){
            return{
               loading:false,
               isAuthenticated:false,
               error:action.payload                    
            }                       
        },       

        
    }
})
export const {actions,reducer} = FunctionPost;
export const {FunctionPostRequest,
    FunctionPostSuccess,
    FunctionPostFaild,
    FunctionGetGetRequest,
    FunctionGetGetSuccess,
    FunctionGetGetFaild
}=actions;

export default reducer