import React,{Fragment, useState} from 'react';

import MainRootMovies from '../propssection/MainMovieProps';

export function MoviesUpdate(){
    let LeftSite = {
        width:"65%",
        background:"transparent",
        // border:"1px solid red",
    }
    let RighttSite = {
      width:"35%",
    //   border:"1px solid red",
      background:"transparent"
  }
  let RihgtStyle = {
    heihgt:"200px",
  }
  let LeftStyle={
    heihgt:"200px",
  }
  let Header ={
      width:"100%",
  }
  let Center ={
      width:"100%",
      height:"540px",
  }


    return(
        <>
    <div className='p-1 movi-bg-paner d-flex'>
         <div className="" style={LeftSite}>
            <div className='LeftStyle' style={LeftStyle} >
               <header style={Header} className='d-flex justify-content-center'>
                  <div className='d-flex justify-content-between align-items-center'> 
                     <div className='d-flex justify-content-between'>
                   <input type='search'className='form-control' placeholder='Movies Search...' />
                    <button className='btn bg-info'>
                       <i className='fa fa-search'></i>
                    </button>
                     </div>
               </div>
                </header> 
                <div style={Center} className='d-flex justify-content-center align-items-center'>
                    <div>
                     <div className='m-2'>
                        {/* <input type='submit'  value={'Update Movies'} className='btn btn-info'  /> */}
                     </div>
                     <div className='d-flex align-items-center'>
                      <input type='text' placeholder='Enter Subscrib' className='form-control'/>
                        <button type='button' className='btn btn-warning'>Send</button>
                  </div>
                    </div>
                </div>
                </div>  
            </div>
            <div  style={RighttSite}>
               <div className='MovieScroll' style={RihgtStyle} >
                 <MainRootMovies  />
               </div>

            </div>
        </div>         
        
        </>                         
    )
}