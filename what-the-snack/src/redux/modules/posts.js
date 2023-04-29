import { createSlice } from '@reduxjs/toolkit';

// * initial State
const initialState = [];

// * redux toolkit
const postsSlice = createSlice({
  // 모듈의 이름
  name: 'posts',
  // 모듈의 초기 설정
  initialState,
  // 모듈의 reducer 로직
  reducers: {},
});

// action creator export
export const {} = postsSlice.actions;
// configStore에 등록하기 위해 reducer export default
export default postsSlice.reducer;