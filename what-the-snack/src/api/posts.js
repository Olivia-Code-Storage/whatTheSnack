import axios from 'axios';

// * 조회
const getPosts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
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

// * 수정
const modifyPosts = async (data) => {
  const { id, ...updatedData } = data;
  await axios.put(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`, updatedData)
  .then(response => {
    console.log('modifyPosts response', response);
  })
  .catch(error => {
    console.error('modifyPosts error', error);
  });
}

export { getPosts, addPosts, removePosts, modifyPosts }