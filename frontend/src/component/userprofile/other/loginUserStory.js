import { Fragment, useEffect, useState } from "react"
import {useDispatch,useSelector} from 'react-redux'
import { LoginUserStory } from "../../../actions/storyAction";
import StorysPropsUpdate from "../../../propssection/StoryUpdate";
import { Link } from "react-router-dom";
 
const LoginStorySplit = ()=>{
   const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(LoginUserStory)
    },[dispatch])
     const [update,setUpdate] = useState('');
     const [idUser,setIdUser] = useState(''); 

     const checkOne = ()=>{
      setUpdate('open');
      console.log(update)
    }
    const Open = (event)=>{
        setIdUser(event);
        checkOne()
    }

    const Close = ()=>{
        setUpdate('')
    }
    const {loginstory} = useSelector((state)=> state.WriteStorySection)

    return(
       <>
           {update == "open"?<StorysPropsUpdate close={Close} userID={idUser} />:''}
         <Fragment>
             {loginstory && loginstory.map((items)=>(
      <div className="userView mb-1" key={items._id}>
        <div className=' mb-2  p-3 rounded mx-5'>

             <div className="jumbotron  mt-5">
               <div className="d-flex justify-content-between align-items-center">
                  <img className="rounded p-1" src={items.avatar} height="200" alt="cinema-ticket"/>
                     <div>
                     <div className='d-flex align-items-center'>
                    <i className="far fa-thumbs-up px-1 top-icons ps-4  mouse"><span className='px-1 '>1k</span></i>
                    <i className="far fa-thumbs-down px-1 top-icons  mouse"><span className='px-1 '>4</span></i>
                    <i className="far fa-heart px-1 top-icons  mouse"><span className='p-1'>500k</span></i>
                    <li className='fa fa-bug text-success top-icons mouse'><span className='p-1'>no issus</span></li>
                    </div>
                     </div>
                  <div>
                    <Link to={`/storyupdate/${items._id}`}  ><li className="fa fa-pen fs-5 px-2 mouse"  ></li></Link> 
                    <li className="fa fa-trash fs-5 px-2 mouse text-danger"></li>
                  </div> 
               </div>               
                 <p className="fs-4 text-center subtitle-align py-2">{items.subtitle}</p>
                 <div className='text-align p-1'>
                <p className='py-1 content-write wraps'>{items.content}</p>
               </div>   
              </div>
       </div>
            </div>
            ))}
         </Fragment>
       
       </>
    )
} 

export default LoginStorySplit;