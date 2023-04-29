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
const modifyPosts = async (id, updatedData) => {
  console.log('여기는 axios의 id값', id);
  console.log('여기는 axios 부분', updatedData);
  return await axios?.put(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`, updatedData)
  .then(response => {
    console.log('response', response);
  })
  .catch(error => {
    console.error('error', error);
  });
}

export { getPosts, addPosts, removePosts, modifyPosts }