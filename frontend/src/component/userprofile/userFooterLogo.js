import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getAllUser } from '../../actions/GetAllUser';

const FooterInputLogo = ({InputLogo})=>{

        const dispatch = useDispatch();
             
     useEffect(()=>{
         dispatch(getAllUser)                          
     },[dispatch])   
     const {users} = useSelector((state) =>state.GetAllUser) 
     return(
         <>
           {users && users.map((fotitem,index)=>{
               if(fotitem._id == InputLogo){              
                   return <img key={index} className="wid-img" src={fotitem.avatar} height="50" alt="cinema"/>                
               }else{
                 return null
               }                    
           })}
         
         </>                          
     )                              
}
export default FooterInputLogo;