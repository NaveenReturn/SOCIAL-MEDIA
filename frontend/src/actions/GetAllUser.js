import axios from 'axios';
import { getRequest, getRequestFaild, getSuccess } from '../controlSlices/authSlice';

export const getAllUser = async (dispatch)=>{
   try{
      dispatch(getRequest());
      const {data} = await axios.get(`/api/cinema/getall`)
       dispatch(getSuccess(data))
   }catch(error){
      dispatch(getRequestFaild(error.response.data.message))
   }
}