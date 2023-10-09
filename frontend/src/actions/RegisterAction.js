import axios from 'axios';
import { RegisterFaild,
    RegisterRequest,
     RegisterSuccess, 

     getSingleSUserFaild,
     getSingleUSserSuccess,
     getSingleUSserRequset, 

     loaduserRequest, 
     loaduserRequestFaild, 
     loaduserSuccess, 
     loginFaild, 
     loginRequest, 
     loginSuccess,
     logoutFaild,
     logoutRequest,
     logoutSuccess,
     updateFaild,
     updateRequest,
     updateSuccess} from '../controlSlices/RegisterSlices';
import { getSingleUserFaild, getSingleUserRequset, getSingleUserSuccess } from '../controlSlices/getSingleSlice';

//GET SINGLE USER API

export const getSingleUser = id =>async(dispatch)=>{
      try{
         dispatch(getSingleUserRequset())

         const {data} = await axios.get(`/api/cinema/getsingle/${id}`);
         
         dispatch(getSingleUserSuccess(data))
      }catch(error){
         dispatch(getSingleUserFaild(error.response.data.message))
      }
}


//REGISTER API
export const register = (formData)=> async (dispatch)=>{
      console.log(formData)                             
    try{
      dispatch(RegisterRequest());
      const config = {
              header:{
               'Content-type':'multipart/form-data'             
              }                     
      }
       const {data} = await axios.post(`/api/cinema/register`,formData,config);
       dispatch(RegisterSuccess(data))
    }catch(error){
       dispatch(RegisterFaild(error.response.data.message))
    }                               
}

//LOADUSER API
export const loadUser =  async (dispatch)=>{
                            
 try{
   dispatch(loaduserRequest());
    const {data} = await axios.get(`/api/cinema/userprofile`);
    console.log(data)
    dispatch(loaduserSuccess(data))
 }catch(error){
    dispatch(loaduserRequestFaild(error.response.data.message))
 }                               
}

//Login API 
export const login = (email,password)=> async(dispatch)=>{
      try{
        
         dispatch(loginRequest());
       const {data} = await axios.post(`/api/cinema/login`,{email,password});
        dispatch(loginSuccess(data))
      }catch(error){
          dispatch(loginFaild(error.response.data.message))
      }
}

// LOG OUT USER

export const logOut = async (dispatch)=>{
     try{
       dispatch(logoutRequest())

       const {data} = await axios.get(`/api/cinema/logout`);
       dispatch(logoutSuccess(data))
     }catch(error){
        dispatch(logoutFaild(error.response.data.message))
     }
}

//UPDATE API
export  const userUpdate = (id,userData) =>async (dispatch)=>{
        
     try{
      dispatch(updateRequest());
      console.log("move id value : ",userData);

      const config = {
            header:{
                "Content-type":"multipart/form-data"
              // 'Content-type':'multipart/form-data'                 
            }
      }
     const {data} = await axios.put(`/api/cinema/update/${id}`,userData,config);
        dispatch(updateSuccess(data))
        console.log('update finish ',data)

     }catch(error){
        dispatch(updateFaild(error.response.data.message))
     }
}

