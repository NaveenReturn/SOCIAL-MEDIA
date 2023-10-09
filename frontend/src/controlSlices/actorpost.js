import {createSlice} from '@reduxjs/toolkit';

const ActorPost = createSlice({
    name:'actorpost',
    initialState:{
        loading:false,
        isAuthenticated:false                           
    },
    reducers:{
        ActorPostRequest(state,action){
            return{
                ...state,
                loading:true                   
            }                       
        },
        ActorPostSuccess(state,action){
            return{
                 loading:false,
                 isAuthenticated:true,
                 postactor:action.payload.Apost                  
            }                       
        },
        ActorPostFaild(state,action){
            return{
               loading:false,
               isAuthenticated:false,
               error:action.payload                    
            }                       
        },
        
        ActorPostGetInRequest(state,action){
            return{
                ...state,
                loading:true                   
            }                       
        },
        ActorPostGetInSuccess(state,action){
            return{
                 loading:false,
                 isAuthenticated:true,
                 actorPost:action.payload.Apost                  
            }                       
        },
        ActorPostGetInFaild(state,action){
            return{
               loading:false,
               isAuthenticated:false,
               error:action.payload                    
            }                       
        },


        
    }
})
export const {actions,reducer} = ActorPost;
export const {ActorPostRequest,
    ActorPostSuccess,
    ActorPostFaild,
    ActorPostGetInRequest,
    ActorPostGetInSuccess,
    ActorPostGetInFaild
}=actions;

export default reducer