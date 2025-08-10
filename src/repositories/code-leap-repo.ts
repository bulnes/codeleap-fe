import axios from "axios";
import type { PostProps } from "../@types/post-props";

const codeleapRepo = axios.create({
  baseURL: 'https://dev.codeleap.co.uk/careers',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const listAllPosts = async () => {
  const response = await codeleapRepo.get('/');
  const results = response.data?.results || [];
  return results;
}

export const createPost = async ({ username, title, content }: Omit<PostProps, "id" | "created_datetime">) => {
  const response = await codeleapRepo.post('/', {
    username,
    title,
    content
  });

  return response.data as PostProps;
}

export const updatePost = async ({ id, title, content }: Omit<PostProps, "username" | "created_datetime">) => {
  const response = await codeleapRepo.patch(`/${id}`, {
    title,
    content
  });

  return response.status >= 200 && response.status < 300;
}

export const deletePost = async ({ id }: Pick<PostProps, "id">) => {
  const response = await codeleapRepo.delete(`/${id}`);
  return response.status >= 200 && response.status < 300;
}
