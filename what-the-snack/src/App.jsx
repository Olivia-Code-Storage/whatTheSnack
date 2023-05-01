import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../src/pages/Main'
import List from '../src/pages/List';
import Post from '../src/pages/Post';
import Detail from '../src/pages/Detail';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/snackRecos" element={<List />} />
          <Route path="/snackRecos/post" element={<Post />} />
          <Route path="/snackRecos/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App