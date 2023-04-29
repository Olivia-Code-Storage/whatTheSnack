import React, { useState, useRef, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Button from '../components/common/Button'
import useInput from '../hooks/useInput'
import { v4 as uuidv4 } from 'uuid'
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { addPosts, modifyPosts } from '../api/posts'

const Post = () => {
  const navigate = useNavigate();
  const location = useLocation()


  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [url, setUrl] = useState('');

  const authorRef = useRef(null);
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const urlRef = useRef(null);

  useEffect(() => {
    if (location.state !== null) {
      setAuthor(location.state.author);
      setTitle(location.state.title);
      setBody(location.state.body);
      setUrl(location.state.url);
      return () => {
        setAuthor('');
        setTitle('');
        setBody('');
        setUrl('');
      }
    }
  }, []);

  const onChangeAuthorhandler = useCallback((e) => {
    setAuthor(e.target.value);
  }, [])

  const onChangeTitlehandler = useCallback((e) => {
    setTitle(e.target.value);
  }, [])

  const onChangeBodyhandler = useCallback((e) => {
    setBody(e.target.value);
  }, [])

  const onChangeUrlhandler = useCallback((e) => {
    setUrl(e.target.value);
  }, [])


  const queryClient = useQueryClient();
  const mutation = useMutation(addPosts, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      console.log('성공');
    }
  })

  const mutation2 = useMutation(modifyPosts, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      console.log('성공');
    }
  })

  const onSubmitClickHandler = (e) => {
    e.preventDefault();
    if (author === '') {
      alert('이름을 입력해주세요!');
      return;
    }

    const newPost = {
      id: uuidv4(),
      author,
      title,
      body,
      like: 0,
      url,
    }

    mutation.mutate(newPost);
  }

  const onmodifyClickHandler = (e) => {
    e.preventDefault();

    const modifyPost = {
      id: location.state.id,
      author: author,
      title: title,
      body: body,
      like: location.state.like,
      url: url,
    }

    console.log('여기는 post.jsx', modifyPost);
    console.log('location.state.id', location.state.id);

    mutation2.mutate(location.state.id, modifyPost);
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
              ref={authorRef}
            />
            <Label htmlFor="title">제목</Label>
            <Input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={onChangeTitlehandler}
              maxLength={12}
              ref={titleRef}
            />
            <Label htmlFor="body">내용</Label>
            <Textarea
              name="body"
              id="body"
              rows="10"
              value={body}
              onChange={onChangeBodyhandler}
              ref={bodyRef}
            >
            </Textarea>
            <Label htmlFor="url">이미지 URL</Label>
            <Input
              type="url"
              name="url"
              id="url"
              value={url}
              onChange={onChangeUrlhandler}
              ref={urlRef}
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