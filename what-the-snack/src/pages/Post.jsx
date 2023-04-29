import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Button from '../components/common/Button'
import useInput from '../hooks/useInput'
import { v4 as uuidv4 } from 'uuid'

const Post = () => {
  const [author, onChangeAuthorhandler] = useInput();
  const [title, onChangeTitlehandler] = useInput();
  const [body, onChangeBodyhandler] = useInput();
  const [url, onChangeUrlhandler] = useInput();

  const onSubmitClickHandler = (e) => {
    e.preventDefault();
    // 나중에 입력값 검증 정규식 걸기
    const newPost = {
      id: uuidv4(),
      author,
      title,
      body,
      like: 0,
      url,
    }
  }

  return (
    <>
      <Header />
      <main>
        <div>
          <MainContentForm>
            <Label htmlFor="author">작성자</Label>
            <Input
              type="text"
              name="author"
              id="author"
              value={author}
              onChange={onChangeAuthorhandler}
            />
            <Label htmlFor="title">제목</Label>
            <Input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={onChangeTitlehandler}
            />
            <Label htmlFor="body">내용</Label>
            <Textarea
              name="body"
              id="body"
              rows="10"
              value={body}
              onChange={onChangeBodyhandler}
            >
            </Textarea>
            <Label htmlFor="url">이미지 URL</Label>
            <Input
              type="url"
              name="url"
              id="url"
              value={url}
              onChange={onChangeUrlhandler}
            />
            <MainContentBtnDiv>
              <Button size={'small'} color={'white'} onClick={onSubmitClickHandler}>작성하기</Button>
            </MainContentBtnDiv>
          </MainContentForm>
        </div>
      </main>
      <Footer />
    </>
  )
}

const MainContentForm = styled.form`
  width: 60vh;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
`

const Input = styled.input`
  height: 20px;
  border: none;
  border-bottom: 1px solid #000;
  `

const Textarea = styled.textarea`
  border: none;
  border-bottom: 1px solid #000;
  resize: none;
`

const MainContentBtnDiv = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`

export default Post