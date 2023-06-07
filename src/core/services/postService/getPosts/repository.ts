import axios from '../../../utilities/axios';
import { PostsDto } from '../../../models/dtos/post.dto';

export const getPostsRequest = async (): Promise<PostsDto[]> => {
  try {
    const response = await axios.get<PostsDto[]>(
      `/json/post.json`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
