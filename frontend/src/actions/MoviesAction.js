import axios from 'axios';
import { MoviesFaildRequest, 
    MoviesRequest,
    MoviesSuccessRequest,
    getallMoviesFaild,
    getallMoviesRequest,
    getallMoviesSuccess
 } from '../controlSlices/MoviesSlice';

export const moviesUpdate = (formData)=>async(dispatch)=>{
    
    try{
       dispatch(MoviesRequest())
       const config = {
           header:{
              "Content-type":"multipart/form-date"                     
           }                        
       }                            
      const {date} = await axios.post(`/api/cinema/moviesupload`,formData,config);
      dispatch(MoviesSuccessRequest(date))
    }catch(error){
     dispatch(MoviesFaildRequest(error.response.data.message))
    }                               
}
// get all movies
export const getAllMovies = async (dispatch) => {

    try{
      dispatch(getallMoviesRequest())
      const  {data}  = await axios.get(`/api/cinema/getallmovies`);
      dispatch(getallMoviesSuccess(data))
    }catch(error){
      dispatch(getallMoviesFaild(`Error ${error.message}`))
    }
}