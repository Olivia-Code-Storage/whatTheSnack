import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Post = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <MainContentForm>
            <label htmlFor="author">작성자</label>
            <input type="text" id="author"/>
            <label htmlFor="title">제목</label>
            <input type="text" id="title"/>
            <label htmlFor="body">내용</label>
            <textarea name="" id="body" cols="30" rows="10"></textarea>
          </MainContentForm>
        </div>
      </main>
      <Footer />
    </>
  )
}

const MainContentForm = styled.form`
  width: 60vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`

export default Post