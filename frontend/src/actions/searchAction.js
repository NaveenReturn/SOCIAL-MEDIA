import axios from 'axios';
import { userSearchFaild, userSearchRequest, userSearchSuccess } from '../controlSlices/userSearch';

export const GetUserSearch = (keyword) =>async (dispatch)=>{
   try{
      dispatch(userSearchRequest())
      const {data} = await axios.get(`/api/cinema/getall?keyword=${keyword}`);
      console.log('search data show :',data)
      dispatch(userSearchSuccess(data))
   }catch(error){
      dispatch(userSearchFaild(error.response.data.message))
   }
}