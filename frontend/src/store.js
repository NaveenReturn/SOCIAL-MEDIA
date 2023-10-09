import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import authReducer from './controlSlices/RegisterSlices';
import postReducer from './controlSlices/postSlices';
import UserGetAll from './controlSlices/authSlice';
import MoviesGetAll from './controlSlices/MoviesSlice';
import Clickuserpost from './controlSlices/postclickslice';
import GetSingleProfile from './controlSlices/getSingleSlice';
import gettoken from './controlSlices/tokenSlice';
import Actoers from './controlSlices/actoersSlice'
import UserSearch from './controlSlices/userSearch';
import StoryWrited from './controlSlices/storySlice';
import getSingleUserStory from './controlSlices/getSingleStorys';
import ActorPostSubmitPost from './controlSlices/actorpost'
import FunctionEventMain  from './controlSlices/FunctionSlice';

const reducer = combineReducers({
       authSlice:authReducer,
       postSlice:postReducer,
       GetAllUser:UserGetAll,
       movieGetAll:MoviesGetAll,
       clickuserpost:Clickuserpost,
       getSingleprofil:GetSingleProfile,
       getactorToken:gettoken,
       actoers:Actoers,
       actoersPost:ActorPostSubmitPost,
       userSearch:UserSearch,
       WriteStorySection:StoryWrited,
       getSingleStory:getSingleUserStory,
       FunctionSuccess:FunctionEventMain                            
})

const store = configureStore({
      reducer,
      middleware:[thunk]                             
})

export default store