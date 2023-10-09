import React, { useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { GetUserSearch } from "../../actions/searchAction";
import SearchToSearch from "./searching/searchone";
import SearchNotAvailable from "./searching/searchsecount";

export default function Search({check}){
    const {isAuthenticated} = useSelector(state =>state.userSearch)
    const dispatch = useDispatch();
   const [keyword,setKeyword] = useState('');

  const onSubmit = (e)=>{
        e.preventDefault();                           
      dispatch(GetUserSearch(keyword))
  }

  
   return(
       <>
        <div className="plus"><i className="fa fa-plus bg-primary rounded" onClick={check} role="button" ></i></div>
        <form onSubmit={onSubmit} className="p-2 search" >
            <div className="d-flex align-items-center p-1">
               <p className="p-1">CINEMA TICKET</p>
               <img src="./img/film-reel-reel.png" height={50} />
            </div>
   <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Search User Name ..."
            value={keyword}
            onChange={(e)=>setKeyword(e.target.value)}
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
            
        </div>                     
        </form>
          {isAuthenticated ?<SearchToSearch/>:<SearchNotAvailable/>}
       </>                            
   )
}