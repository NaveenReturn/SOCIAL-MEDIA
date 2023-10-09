import React,{useEffect, useState} from "react";
import {useForm} from 'react-hook-form';
import {useDispatch,useSelector} from 'react-redux';
import {GetSingleStory, StoryUpdate,} from '../actions/storyAction'
import {toast} from 'react-toastify';
import {useParams} from 'react-router-dom';


export default  function StoryUpdateSection(){
     const {id} = useParams();
//      console.log('story id',id)                              
     const dispatch = useDispatch()
    let HeadBg = {
       background:'#000000d5'
    }

     const {register,handleSubmit,formState:{errors}} = useForm();
     const [avatar,setAvatar] = useState('')

     const [subtitle,setSubtitle] = useState('');
     const [category,setCategory] = useState('');
     const [content,setContent] = useState('');
     const [prevesAvatar,setPrevesAvatar] = useState('');
     const {singlestory,error} = useSelector((state)=> state.getSingleStory);

     useEffect(()=>{
       if(error){
           toast(error,{
              position:toast.POSITION.BOTTOM_CENTER,
              type:'error'
           })
       }
         dispatch(GetSingleStory(id))
 
     },[error,dispatch])
     
     useEffect(()=>{
      if(singlestory){
         setSubtitle(singlestory.subtitle)
         setCategory(singlestory.category);
         setContent(singlestory.content);
         setPrevesAvatar(singlestory.avatar);

    } 
     },[singlestory])

   const onChange = (e)=>{
        if(e.target.name === "avatar"){
             const readFile = new FileReader();
             readFile.onload = ()=>{
                 if(readFile.readyState == 2){
                    setPrevesAvatar(readFile.result)
                    setAvatar(e.target.files[0]);
                    console.log()
                 }
             }
             readFile.readAsDataURL(e.target.files[0])
           
        }
   }

    const onSubmiting = (e)=>{
        const formData = new FormData();
        formData.append('subtitle',subtitle)
        formData.append('category',category)
        formData.append('content',content)
        formData.append('avatar',avatar);
        dispatch(StoryUpdate(id,formData))
    }

   return(
       <div className="">
    <div className="main-movieses" style={HeadBg} >
         <form onSubmit={handleSubmit(onSubmiting)} className='p-2'>
            <div className='d-flex justify-content-center align-items-center p-2'>
               <p className='p-2 text-white'>WELCOME TO CINEMA TICKET LIFE</p>
               <button type='button' className='btn btn-danger'   >Cancel</button>
            </div>
            <table >
               <tbody >
           <tr>
              <td><label className='p-1 text-white fs-5'>Enter Subtitle</label></td>    
              <td><input
               placeholder='Enter Title.......'
                type="text" className='y-one-check'
                name='subtitle'
                {...register('subtitle',{
                   required:"please enter subtitle...."
                })}
                onChange={(e)=>setSubtitle(e.target.value)}
                value={subtitle}
                /></td>    
              <td><label className='ps-1 text-white fs-5'>Category</label></td> 
              <td>
                  <select className='form-control'
                    name='category'
                    {...register('category',{
                        required:'select category'
                    })}
                    onChange={(e)=>setCategory(e.target.value)}
                    value={category}
                  >
                       <option value={singlestory && singlestory.category}>{singlestory && singlestory.category}</option>      
                       <option value={'entertaiment 😊'}>Entertaiment 😊</option>
                       <option value={'movies 🎬'}>Movies 🎬</option>  
                       <option value={'comedy 😄'}>Comedy 😄</option> 
                       <option value={'importent ❤️'}>Importent ❤️</option>   
                   </select>                 
               </td>  
           </tr>
             <tr>
                <td colSpan={2}><p className='text-danger fs-5'>{errors.subtitle && errors.subtitle.message}</p></td>
                <td colSpan={2}><p className='text-danger fs-5'>{errors.category && errors.category.message}</p></td>
             </tr>
              <tr>
                 <td><img height={130} src={prevesAvatar} className='rounded' /></td>
                 <td colSpan={3}><div className='d-flex justify-content-center'><input  
                 type='file' 
                 name='avatar' 
                  onChange={onChange}
                 /></div></td>
              </tr>

              <tr>
                  <td colSpan={4}><p className='text-center py-2 text-white' >Write Content ✒️</p></td>
              </tr>
             <tr>
                <td colSpan={4}  >
                   <textarea placeholder='Write your story.... 😊' 
                   className='mx-1 p-2 text-auto' cols={96} rows={14}
                    name='content'
                    {...register('content',{
                      required:'please writed content'
                    })}
                    onChange={(e)=>setContent(e.target.value)}
                    value={content}
                   >
                   </textarea>                
                </td>                   
            </tr> 
            <tr>
               <td><p className='text-danger fs-5'>{errors.content && errors.content.message}</p></td>
            </tr>     
            <tr>
               <td colSpan={4}><div className='d-flex justify-content-center'><input type='submit'
                className='btn btn-info px-3' 

                /></div></td>
            </tr>     
                </tbody>              
        </table>   

         </form>
    </div>
       </div>                            
   )
}