import { Dispatch } from 'redux';
import { PostsDto } from '../../../models/dtos/post.dto';
import { ErrorDto } from '../../../models/dtos/error.dto';
import { Errors } from '../../../utilities/errors';
import {
  GET_POSTS_FAIL,
  GET_POSTS_RESET,
  GET_POSTS_START,
  GET_POSTS_SUCCESS
} from './constants';
import { getPostsRequest } from './repository';
import {
  GetPostsFailAction,
  GetPostsResetAction,
  GetPostsStartAction,
  GetPostsSuccessAction
} from './types';

const getPostsStartAction = (): GetPostsStartAction => {
  return {
    type: GET_POSTS_START,
  };
};
const getPostsSuccessAction = (payload: PostsDto[]): GetPostsSuccessAction => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: payload,
  };
};
const getPostsFailAction = (error: ErrorDto): GetPostsFailAction => {
  return {
    type: GET_POSTS_FAIL,
    error: error,
  };
};
const getPostsResetAction = (): GetPostsResetAction => {
  return {
    type: GET_POSTS_RESET,
  };
};

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    dispatch(getPostsStartAction());
    const response = await getPostsRequest();
    dispatch(getPostsSuccessAction(response));
  } catch (error) {
    dispatch(getPostsFailAction(Errors.getErrorDtoFromApiError(error)));
  }
};

export const getPostsReset = () => (dispatch: Dispatch) => {
  dispatch(getPostsResetAction());
};
