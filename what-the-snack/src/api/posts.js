import axios from 'axios';
import { async } from 'q';

// * 조회
const getPosts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  console.log(response.data);
  return response.data;
}

// * 추가
const addPosts = async (newPost) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, newPost);
}

// * 삭제
const removePosts = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`);
}

export { getPosts, addPosts, removePosts }