import axios from 'axios';
import { ActorPostFaild, ActorPostGetInFaild, ActorPostGetInRequest, ActorPostGetInSuccess, ActorPostRequest, ActorPostSuccess } from '../controlSlices/actorpost';

export const ActorPostCreate = (formData)=>async (dispatch)=>{

    try{
        dispatch(ActorPostRequest());
        const {data} = await axios.post(`/api/cinema/actor/post/actorpost`,formData);
        dispatch(ActorPostSuccess(data))
    }catch(error){
       dispatch(ActorPostFaild(error.respose.data.message))
    }

}

export const ActorPostGetIn= async (dispatch)=>{

    try{
        dispatch(ActorPostGetInRequest());
        const {data} = await axios.get(`/api/cinema/actor/post/getactorpost`);
        console.log(data)
        dispatch(ActorPostGetInSuccess(data))
    }catch(error){
       dispatch(ActorPostGetInFaild(error.respose.data.message))
    }

}