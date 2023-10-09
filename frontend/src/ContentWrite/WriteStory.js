import React, { Fragment, useEffect, useState } from 'react';
import './story.css';
import StorysPropsContent from '../propssection/Storyprops';
import  StoryHeadSplit  from './storycontroll';
import {useSelector,useDispatch} from 'react-redux';
import { GetAllStorys } from '../actions/storyAction';
import Loading from '../component/layout/Loading';

function WriteStoryContent(){
     const dispatch = useDispatch()
     useEffect(()=>{
         dispatch(GetAllStorys)
     },[dispatch])
    const {getAll,loading} = useSelector((state)=> state.WriteStorySection)

    const [open,setOpen] = useState('close');

   const OpenSet = ()=>{
       setOpen('open')
   }

   let HeadBg = {
      background:'#00000049'
   }
   let Close = ()=>{
       setOpen('close');
   }
   return(
  <>
        {open == 'open'? <StorysPropsContent close={Close}  />:''}
    <Fragment>    
    {loading?<Loading/> :<div className='writestory px-2'>
   <div className='scroll-port '>
   <div style={HeadBg} className='top-stick d-flex justify-content-between align-items-center px-5'>
    <div>
             <h4 className='text-white py-3 '>DIRECTOR VIEWS THE STORY</h4>
            </div>
            <div className='px-2 d-flex align-items-center'>
               <button type='button' className='btn text-white fs-4' onClick={OpenSet}>Writing</button>
               <i className='fa fa-feather text-white'></i>
            </div>
          </div>
        <div>

        {getAll && getAll.map((items)=>(
             <div className=' mb-2  p-3 rounded mx-5' key={items._id}>

             <StoryHeadSplit user_id={items.user} catType={items.category} />
          <div className="jumbotron  mt-5">
           <img className="rounded p-1" src={items.avatar} height="200" alt="cinema-ticket"/>
              
                 <p className="fs-4 text-center text-white py-2">{items.subtitle}</p>
              <div className='text-align p-1'>
              <pre className='py-1 text-white content-write wraps'>{items.content}</pre>
               </div>   
          </div>
       </div>
        ))}

       {/* end */}
   </div>

<div>

   </div>
</div>
       
</div>  
}    
</Fragment>      
        </>

                            
   )
}
export default WriteStoryContent;