import axios from 'axios';
import { getTokenFaild, getTokenRequest, getTokenSuccess } from '../controlSlices/tokenSlice';
import { ActoersLoginFaild, 
    ActoersLoginOutFaild,
     ActoersLoginOutRequest,
     ActoersLoginOutSuccess,
      ActoersLoginRequest,
       ActoersLoginSuccess,
        ActoersRegisterFaild, 
        ActoersRegisterRequest,
         ActoersRegisterSuccess } from '../controlSlices/actoersSlice';

export const getTokenToken = (email,password)=>async(dispatch)=>{
   
   try{
     dispatch(getTokenRequest());
     const {data} = await axios.post(`/api/cinema/ticketlogin`,{email,password});
     dispatch(getTokenSuccess(data));
   }catch(error){
       dispatch(getTokenFaild(error.response.data.message));
   }
}
// REGISTER
export const ActoerRegisterRoot = (formData)=>async (dispatch)=>{
    try{
       dispatch(ActoersRegisterRequest());
       const config = {
           headers:{
              "Content-type":"mutipart/form-data"
           }
       }
       const {data} = await axios.post(`/api/cinema/actoers/register`,formData,config);
       dispatch(ActoersRegisterSuccess(data))
    }catch(error){
        dispatch(ActoersRegisterFaild(error.response.data.message))
    }
   
}

// Actoers Login

export const ActoersLoginAction = (email,password)=> async (dispatch)=>{
    try{
       dispatch(ActoersLoginRequest());
       const {data} = await axios.post(`/api/cinema/actoers/login`,{email,password});
       console.log(data)
       dispatch(ActoersLoginSuccess(data))
    }catch(error){             
       dispatch(ActoersLoginFaild(error.response.data.message))
    }
}

// GET LOGOUT 

export const ActoersLogOut =  async (dispatch)=>{
    try{
       dispatch(ActoersLoginOutRequest());
       const {data} = await axios.get(`/api/cinema/actoers/logout`);
       console.log(data)
       dispatch(ActoersLoginOutSuccess(data))
    }catch(error){             
       dispatch(ActoersLoginOutFaild(error.response.data.message))
    }
}