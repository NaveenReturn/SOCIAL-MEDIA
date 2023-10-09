import axios from 'axios';
import { FunctionGetGetFaild, FunctionGetGetRequest, FunctionGetGetSuccess, FunctionPostFaild, FunctionPostRequest, FunctionPostSuccess } from '../controlSlices/FunctionSlice';

export const FunctionAction = (formData)=>async (dispatch)=>{
    try{
       dispatch(FunctionPostRequest());
       const {data} = await axios.post(`/api/cinema/event/functioncreate`,formData);
       console.log(data)
       dispatch(FunctionPostSuccess(data))
    }catch(error){
       dispatch(FunctionPostFaild(error.response.data.message))
    }
}

// GET ALL FUNCTION
export const FunctionGetAll = async (dispatch)=>{
   try{
      dispatch(FunctionGetGetRequest());
      const {data} = await axios.get(`/api/cinema/event/getallfunction`);
      dispatch(FunctionGetGetSuccess(data))
   }catch(error){
      dispatch(FunctionGetGetFaild(error.response.data.message))
   }
}