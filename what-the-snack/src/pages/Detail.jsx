import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Button from '../components/common/Button'
import styled from 'styled-components';
import { getPosts } from '../api/posts'
import { useNavigate, useParams } from 'react-router';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { removePosts } from '../api/posts';

const Detail = () => {
  const { isLoading, isError, data } = useQuery('posts', getPosts);
  const [currentInfo, setCurrentInfo] = useState('')
  const navigate = useNavigate()

  const params = useParams()
  const foundData = data.find((item) => {
    return item.id === params.id
  })

  const queryClient = useQueryClient();
  const mutation = useMutation(removePosts, {
    onSuccess: () => {
      navigate('/snackRecos')
      queryClient.invalidateQueries('posts');
    }
  })


  return (
    <>
      <Header />
      <DetailContainer>

        <DetailContentImg src={foundData.url} alt="" />

        <DetailContentRight>

          <DetailContentTitle>{foundData.title}</DetailContentTitle>

          <DetailContentAuthor>{foundData.author}</DetailContentAuthor>

          <p>{foundData.body}</p>

          <DetailBottomContentWrap>
            <span>🧡 {foundData.like}</span>
            <DetailContentBtnWrap>
              <Button size={'small'} color={'white'} onClick={() => {
                navigate(`/snackRecos/post`, {
                  state: {
                    id: foundData.id,
                    author: foundData.author,
                    title: foundData.title,
                    body: foundData.body,
                    like: foundData.like,
                    url: foundData.url,
                  }
                })
              }}>수정</Button>
              <Button size={'small'} color={'white'} onClick={() => {
                mutation.mutate(foundData.id)
              }}>삭제</Button>
            </DetailContentBtnWrap>
          </DetailBottomContentWrap>

        </DetailContentRight>

      </DetailContainer >

    </>
  )
}


const DetailContainer = styled.div`
  height: 62vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media (max-width:1080px) {
    flex-direction: column;
    padding: 20px 0 20px 0;
  }
`

const DetailContentImg = styled.img`
  position: relative;
  left: -110px;
  width: 800px;
  height: 500px;
  border: 2px solid white;
  border-radius: 8px;
  @media (max-width:1080px) {
    width: 500px;
    height: 250px;
    top: 20px;
    left: 0px;
    transition: all 0.6s;
  }
`

const DetailContentRight = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  @media (max-width:1080px) {
    width: 500px;
    margin-top: 35px;
    gap: 30px;
  }
`

const DetailContentTitle = styled.h3`
  font-size: 37px;
  font-weight: 700;
  @media (max-width:1080px) {
    font-size: 28px;
  }
`

const DetailContentAuthor = styled.h4`
  font-size: 24px;
  font-weight: 700;
  @media (max-width:1080px) {
    font-size: 20px;
  }
`

const DetailBottomContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid #ccc;
  padding-top: 15px;

  @media (max-width:1080px) {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`

const DetailContentBtnWrap = styled.div`
  display: flex;
  gap: 15px;
`
export default Detail