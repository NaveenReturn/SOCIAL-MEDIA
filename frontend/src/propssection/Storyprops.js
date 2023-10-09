import React,{useEffect, useState} from "react";
import {useForm} from 'react-hook-form';
import {useDispatch,useSelector} from 'react-redux';
import {StoryCreateAction} from '../actions/storyAction'
import {toast} from 'react-toastify'

export default  function StorysPropsContent({close}){
     const dispatch = useDispatch()
    const [prevesAvatar,setPrevesAvatar] = useState('./img/IN-en-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg')
    let HeadBg = {
       background:'#000000d5'
    }
    const {error} = useSelector((state)=> state.WriteStorySection)
     const {register,handleSubmit,formState:{errors}} = useForm();
     const [avatar,setAvatar] = useState('')
     const [storyData,setStoryData] = useState({
         subtitle:'',
         category:'',
         content:''

     })
    
     useEffect(()=>{
       if(error){
           toast(error,{
              position:toast.POSITION.BOTTOM_CENTER,
              type:'error'
           })
       }
     },[error])

   const onChange = (e)=>{
        if(e.target.name === "avatar"){
             const readFile = new FileReader();
             readFile.onload = ()=>{
                 if(readFile.readyState == 2){
                    setPrevesAvatar(readFile.result)
                    setAvatar(e.target.files[0])
                 }
             }
             readFile.readAsDataURL(e.target.files[0])
           
        }else{
         setStoryData({...storyData,[e.target.name]:e.target.value});

        }
   }

    const onSubmiting = (e)=>{
        const formData = new FormData();
        formData.append('subtitle',storyData.subtitle)
        formData.append('category',storyData.category)
        formData.append('content',storyData.content)
        formData.append('avatar',avatar);
        dispatch(StoryCreateAction(formData))
    }

   return(
       <div className="story-bg d-flex justify-content-center align-items-center">
    <div className="main-movies" style={HeadBg} >
         <form onSubmit={handleSubmit(onSubmiting)} className='p-2'>
            <div className='d-flex justify-content-center align-items-center p-2'>
               <p className='p-2 text-white'>WELCOME TO CINEMA TICKET LIFE</p>
               <button type='button' className='btn btn-danger' onClick={close}   >Cancel</button>
            </div>
            <table>
               <tbody>
           <tr>
              <td><label className='p-1 text-white fs-5'>Enter Subtitle</label></td>    
              <td><input
               placeholder='Enter Title.......'
                type="text" className='y-one-check'
                name='subtitle'
                {...register('subtitle',{
                   required:"please enter subtitle...."
                })}
                onChange={onChange}
                /></td>    
              <td><label className='ps-1 text-white fs-5'>Category</label></td> 
              <td>
                  <select className='form-control'
                    name='category'
                    {...register('category',{
                        required:'select category'
                    })}
                    onChange={onChange}
                  >
                       <option value={''}>--Select--</option>      
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
                 <td><img height={120} src={prevesAvatar} className='rounded' /></td>
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
                <td colSpan={4}>
                   <textarea placeholder='Write your story.... 😊' 
                   className='mx-1 p-2 text-auto' cols={96} rows={10}
                    name='content'
                    {...register('content',{
                      required:'please writed content'
                    })}
                    onChange={onChange}
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