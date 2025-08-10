import axios from "axios";

interface PostProps {
  postId: number,
  username: string,
  title: string,
  content: string,
}

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

export const createPost = async ({ username, title, content }: Omit<PostProps, 'postId'>) => {
  const response = await codeleapRepo.post('/', {
    username,
    title,
    content
  });

  return response.status >= 200 && response.status < 300;
}

export const updatePost = async ({ postId, title, content }: Omit<PostProps, 'username'>) => {
  const response = await codeleapRepo.patch(`/${postId}`, {
    title,
    content
  });

  return response.status >= 200 && response.status < 300;
}

export const deletePost = async ({ postId }: Pick<PostProps, "postId">) => {
  const response = await codeleapRepo.delete(`/${postId}`);
  return response.status >= 200 && response.status < 300;
}
