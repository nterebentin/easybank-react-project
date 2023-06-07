import {
  GET_POSTS_FAIL,
  GET_POSTS_RESET,
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
} from './constants';
import { GetPostsActions, GetPostsState } from './types';

const initialState: GetPostsState = {
  loading: false,
  data: [],
  error: undefined,
};

const reducer = (
  state = initialState,
  action: GetPostsActions,
): GetPostsState => {
  switch (action.type) {
    case GET_POSTS_START:
      return {
        ...initialState,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case GET_POSTS_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
