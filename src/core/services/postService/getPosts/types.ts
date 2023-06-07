import { ErrorDto } from '../../../models/dtos/error.dto';
import { PostsDto } from '../../../models/dtos/post.dto';
import {
  GET_POSTS_FAIL,
  GET_POSTS_RESET,
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
} from './constants';

export type GetPostsStartAction = {
  type: typeof GET_POSTS_START;
};
export type GetPostsSuccessAction = {
  type: typeof GET_POSTS_SUCCESS;
  payload: PostsDto[];
};
export type GetPostsFailAction = {
  type: typeof GET_POSTS_FAIL;
  error: ErrorDto;
};
export type GetPostsResetAction = {
  type: typeof GET_POSTS_RESET;
};

export type GetPostsActions = (
  GetPostsStartAction |
  GetPostsSuccessAction |
  GetPostsFailAction |
  GetPostsResetAction
);

export type GetPostsState = {
  loading: boolean;
  data: PostsDto[];
  error?: ErrorDto;
};
