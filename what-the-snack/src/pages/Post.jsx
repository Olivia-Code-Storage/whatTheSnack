import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Button from '../components/common/Button'
import useInput from '../hooks/useInput'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { addPosts } from '../api/posts'

const Post = () => {
  const navigate = useNavigate();
  
  const [author, onChangeAuthorhandler] = useInput();
  const [title, onChangeTitlehandler] = useInput();
  const [body, onChangeBodyhandler] = useInput();
  const [url, onChangeUrlhandler] = useInput();

  // ! 리액트 쿼리
  const queryClient = useQueryClient();
  const mutation = useMutation(addPosts, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      console.log('성공');
    }
  })

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

    // ! 리액트 쿼리
    mutation.mutate(newPost);
  }
  
  if(mutation.isSuccess) {
    console.log('성공', mutation.data);
    alert(`등록이 완료되었습니다!`);
    navigate(-1);
  }

  if(mutation.isError) {
    console.log('에러', mutation.error);
    alert(`게시글 등록 중 오류가 발생했습니다.`);
  }

  const onListLinkClickHandler = (e) => {
    e.preventDefault();
    navigate(-1);
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
              required
            />
            <Label htmlFor="title">제목</Label>
            <Input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={onChangeTitlehandler}
              maxLength={12}
              required
            />
            <Label htmlFor="body">내용</Label>
            <Textarea
              name="body"
              id="body"
              rows="10"
              value={body}
              onChange={onChangeBodyhandler}
              required
            >
            </Textarea>
            <Label htmlFor="url">이미지 URL</Label>
            <Input
              type="url"
              name="url"
              id="url"
              value={url}
              onChange={onChangeUrlhandler}
              required
            />
            <MainContentBtnDiv>
              <Button type="button" size={'small'} color={'white'} onClick={onListLinkClickHandler}>
                뒤로가기
              </Button>
              <Button type="button" size={'small'} color={'red'} onClick={onSubmitClickHandler}>
                작성하기
              </Button>
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
  gap: 10px;
`

export default Post