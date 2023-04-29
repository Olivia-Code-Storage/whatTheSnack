import axios from 'axios';

// * 조회
const getPosts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  console.log(response.data);
  return response.data;
}

export { getPosts }