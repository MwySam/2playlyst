import { combineReducers } from 'redux';
import spotify_reducer from './spotify_reducer'
//import youtube_reducer from './youtube_reducer'

const rootReducer = combineReducers({
  spotify_reducer,
  //youtube_reducer
});
  
export default rootReducer;