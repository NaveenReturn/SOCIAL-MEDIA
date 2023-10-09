import axios from 'axios';
import { getAllStoryFaild,
     getAllStoryRequest,
     getAllStorySuccess,
     getLoginUserStoryFaild,
     getLoginUserStoryRequest,
     getLoginUserStorySuccess,
     getUpdateStoryFaild,
     getUpdateStoryRequest,
     getUpdateStorySuccess,
     storyCreateRequest,
     storyFaildRequest,
      storySuccessRequest } from '../controlSlices/storySlice';
import { getSingleStoryFaild, getSingleStoryRequest, getSingleStorySuccess } from '../controlSlices/getSingleStorys';

export const StoryCreateAction =  (formData)=> async(dispatch)=>{
    
    try{
        dispatch(storyCreateRequest());
        const {data} = await axios.post(`/api/cinema/story/create`,formData);
        dispatch(storySuccessRequest(data))
    }catch(error){
       dispatch(storyFaildRequest(error.response.data.message))
    }                                
}
export const GetAllStorys = async (dispatch)=>{

     try{
        dispatch(getAllStoryRequest())
        const {data} = await axios.get(`/api/cinema/story/getall`);
        dispatch(getAllStorySuccess(data))
     }catch(error){
         dispatch(getAllStoryFaild(error.response.data.message))
     }
}

export const LoginUserStory =  async (dispatch)=>{
      try{
        dispatch(getLoginUserStoryRequest());
        const {data} = await axios.get(`/api/cinema/story/getstorylogin/`);
        dispatch(getLoginUserStorySuccess(data))
      }catch(error){
         dispatch(getLoginUserStoryFaild(error.response.data.message))
      }
}

// GET SINGLE USERSTORY
export const GetSingleStory = id => async (dispatch)=>{
     try{
       dispatch(getSingleStoryRequest())
       const {data} = await axios.get(`/api/cinema/story/getsinglestory/${id}`);
       dispatch(getSingleStorySuccess(data))
     }catch(error){
        dispatch(getSingleStoryFaild(error.response.data.message))
     }
}
// GET STORY UPDATE

export const StoryUpdate = (id,formData)=>async (dispatch)=>{
    try{
       dispatch(getUpdateStoryRequest())
       const {data} = await axios.put(`/api/cinema/story/storyupdate/${id}`,formData);
       dispatch(getUpdateStorySuccess(data))
    }catch(error){
       dispatch(getUpdateStoryFaild(error.response.data.message))
    } 
}