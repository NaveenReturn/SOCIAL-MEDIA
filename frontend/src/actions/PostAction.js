import axios from "axios";
import { getAllPostFaild,
   getAllPostRequest,
    getAllPostSuccess,
     postFaild, 
     postRequest,
      postSuccess, 
      postUploadFaild, 
      postUploadRequest,
      postUploadSuccess} from "../controlSlices/postSlices";
import { getUserClickFaild, getUserClickRequest, getUserClickSuccess } from "../controlSlices/postclickslice";
import { SecureFaild, SecureRequest, SecureSuccess } from "../controlSlices/postSecure";

//post upload request

export const postupload = (postdata)=>async (dispatch)=>{
     
     try{
      dispatch(postUploadRequest())
      const config = {
           header:{
               'Content-type':'multipart/form-data'
           }
      }

       const {data} = await axios.post(`/api/cinema/new/filepost`,postdata,config)
      dispatch(postUploadSuccess(data))
     }catch(error){
        dispatch(postUploadFaild(error.response.data.message))
     }
}


//getSingle post request
export const postAction =  async (dispatch) => {
     
     try{
         
       dispatch(postRequest());
       
       const {data} = await axios.get(`/api/cinema/new/getpost`);
       dispatch(postSuccess(data));

     }catch(error){
       dispatch(postFaild(error.response.data.message))
     }                              
}

//GET ALL POST

export const getAllPost = async (dispatch) => {
     
  try{
      
    dispatch(getAllPostRequest());
    
    const {data} = await axios.get(`api/cinema/new/getall`);
    dispatch(getAllPostSuccess(data));

  }catch(error){
    dispatch(getAllPostFaild(error.response.data.message))
  }                              
}

// GET SINGLE USER ALL POST
export const getSingleUserAllPost = id =>async (dispatch)=>{
       
     try{
         dispatch(getUserClickRequest());

         const {data} = await axios.get(`/api/cinema/new/getsingleuser/${id}`);
         dispatch(getUserClickSuccess(data))
     }catch(error){
        dispatch(getUserClickFaild(error.response.data.message))
     }
}

// user Secure url PASS POST;
export const SecureURL = (id,type)=>async (dispatch)=>{
   const person = {
       "type":type
   }
    try{
       dispatch(SecureRequest());
       const {data} = await axios.post(`/api/cinema/new/namechack/${id}`,person);
       dispatch(SecureSuccess(data))
    }catch(error){
         dispatch(SecureFaild(error.response.data.message))
    }
}