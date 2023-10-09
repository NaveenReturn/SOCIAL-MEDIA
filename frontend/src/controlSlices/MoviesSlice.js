import {createSlice} from '@reduxjs/toolkit';


const MoviesSlice = createSlice({
   name:'movies',
   initialState:{
       loading:false,
       isAuthenticated:false                            
   },
   reducers:{
     MoviesRequest(state,action){
         return{
            ...state,
            loading:true                       
         }
     },
     MoviesSuccessRequest(state,action){
        return{
            loading:false,
            movie:action.payload.movie,
            isAuthenticated:true                       
        }
     },
     MoviesFaildRequest(state,action){
         return{
             loading:false,
             isAuthenticated:false,
             error:action.payload                      
         }
     },
     getallMoviesRequest(state,action){
        return{
            loading:true,
            isAuthenticated:false
        }
     },
     getallMoviesSuccess(state,action){
        return{
            loading:false,
            movies:action.payload.movie,
            isAuthenticated:true
        }
     },
     getallMoviesFaild(state,action){
        return{
            loading:false,
            error:action.payload,
            isAuthenticated:false
        }
     },                              
   }
})

const {actions,reducer} = MoviesSlice;

export const {MoviesFaildRequest,
    MoviesRequest,
    MoviesSuccessRequest,
    getallMoviesFaild,
    getallMoviesRequest,
    getallMoviesSuccess
} = actions;

export default reducer