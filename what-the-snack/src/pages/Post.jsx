import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Button from '../components/common/Button'
import { v4 as uuidv4 } from 'uuid'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'
import { addPosts, modifyPosts } from '../api/posts'

const Post = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    author: '',
    title: '',
    body: '',
    url: '',
  })

  useEffect(() => {
    if (location.state !== null) {
      setForm({
        ...form,
        author: location.state.author,
        title: location.state.title,
        body: location.state.body,
        url: location.state.url,
      });
    }
  }, [])

  const onFormChangeHandler = useCallback((e) => setForm({
      ...form,
      [e.target.name]: e.target.value,
  }, []))


  const queryClient = useQueryClient();
  const addPostsMutation = useMutation(addPosts, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    }
  })

  const modifyPostsMutation = useMutation(modifyPosts, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    }
  })

  const onSubmitClickHandler = (e) => {
    e.preventDefault();
    if (form.author === '' || form.title === '' || form.body === '' || form.url === '') {
      alert('양식을 모두 입력해주세요.');
      return;
    };

    const newPost = {
      id: uuidv4(),
      author: form.author,
      title: form.title,
      body: form.body,
      like: 0,
      url: form.url,
    }
    addPostsMutation.mutate(newPost);
  }

  if(addPostsMutation.isSuccess) {
    alert(`게시글 등록이 완료되었습니다!`);
    navigate(-1);
  }

  if(addPostsMutation.isError) {
    alert(`게시글 등록 중 오류가 발생했습니다.`);
  }

  const onmodifyClickHandler = (e) => {
    e.preventDefault();
    modifyPostsMutation.mutate({
      id: location.state.id,
      author: form.author,
      title: form.title,
      body: form.body,
      url: form.url,
    });
  }

  if(modifyPostsMutation.isSuccess) {
    alert(`게시글 수정이 완료되었습니다!`);
    navigate(-1);
  }

  if(modifyPostsMutation.isError) {
    alert(`게시글 수정 중 오류가 발생했습니다.`);
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
              value={form.author}
              onChange={onFormChangeHandler}
              maxLength={10}
            />
            <Label htmlFor="title">제목</Label>
            <Input
              type="text"
              name="title"
              id="title"
              value={form.title}
              onChange={onFormChangeHandler}
              maxLength={12}
            />
            <Label htmlFor="body">내용</Label>
            <Textarea
              name="body"
              id="body"
              rows="10"
              value={form.body}
              onChange={onFormChangeHandler}
              maxLength={250}
            >
            </Textarea>
            <Label htmlFor="url">이미지 URL</Label>
            <Input
              type="url"
              name="url"
              id="url"
              value={form.url}
              onChange={onFormChangeHandler}
            />
            <MainContentBtnDiv>
              <Button type="button" size={'small'} color={'white'} onClick={onListLinkClickHandler}>
                뒤로가기
              </Button>
              {
                location.state !== null ?
                  <Button type="button" size={'small'} color={'red'} onClick={onmodifyClickHandler}>수정하기</Button>
                  : <Button type="button" size={'small'} color={'red'} onClick={onSubmitClickHandler}>작성하기</Button>
              }
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