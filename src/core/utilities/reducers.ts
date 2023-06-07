import { CombinedState, combineReducers, Reducer } from 'redux';
import setApiErrorReducer from '../services/appService/setApiError/reducer';
import { SetApiErrorState } from '../services/appService/setApiError/types';
import setMeReducer from '../services/appService/setMe/reducer';
import { SetMeState } from '../services/appService/setMe/types';
import setPathnameReducer from '../services/appService/setPathname/reducer';
import { SetPathnameState } from '../services/appService/setPathname/types';
import {GetPostsState} from '../services/postService/getPosts/types';
import getPostsReducer from '../services/postService/getPosts/reducer';


export interface IStore {
  // APP
  setApiError: SetApiErrorState;
  setMe: SetMeState;
  setPathname: SetPathnameState;
  // POST
  getPosts: GetPostsState;

}

export const rootReducer: Reducer<CombinedState<IStore>> = combineReducers({
  // APP
  setApiError: setApiErrorReducer,
  setMe: setMeReducer,
  setPathname: setPathnameReducer,
  getPosts: getPostsReducer,

});
