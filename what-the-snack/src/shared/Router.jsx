import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import List from '../pages/List';
import Post from '../pages/Post';
import Detail from '../pages/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/snackRecos" element={<List />} />
        <Route path="/snackRecos/post" element={<Post />} />
        <Route path="/snackRecos/:id" element={<Detail />} />
        {/* <Route path="/snackRecos/post:id" element={<Post />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
