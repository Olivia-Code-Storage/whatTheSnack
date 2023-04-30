import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Button from '../components/common/Button'
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query'
import { getPosts } from '../api/posts'

const List = () => {
  const navigate = useNavigate();

  // ! 리액트 쿼리 조회 로직
  const { isLoading, isError, data } = useQuery('posts', getPosts);
  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <h1>Error</h1>;

  // ! 페이지 이동
  const onPostLinkClickHandler = () => navigate(`/snackRecos/post`);

  return (
    <>
      <Header />
      <MainContainer>
        <MainContentTop>
          <Button size={'large'} color={'white'} onClick={onPostLinkClickHandler}>
            Go Recos!
          </Button>
        </MainContentTop>
        <MainContentBottom>
          {
            data.map((item) => {
              return (
                <ListLink to={`/snackRecos/${item.id}`}  style={{ textDecoration: "none" }} key={item.id}>
                  <MainContentItem key={item.id}>
                    <div>
                      <ListImg src={item.url} alt="" />
                    </div>
                    <ItemH3>{item.title}</ItemH3>
                    <ItemSpanDiv>
                      <span>
                        {item.like === 0 ? '🤍' : '❤️'}
                      </span>&nbsp;
                      <span>{item.like}</span>
                    </ItemSpanDiv>
                  </MainContentItem>
                </ListLink>
              )
            })
          }
        </MainContentBottom>
      </MainContainer>
      <Footer />
    </>
  )
}

const ListLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const ListImg = styled.img`
  width: 230px;
  height: 230px;
`

const MainContainer = styled.main`
  background-color: #F7F5EB;
`

const MainContentTop = styled.section`
  height: 50px;
  display: flex;
  padding: 20px 23px 45px 0;
  justify-content: end;
`

const MainContentBottom = styled.section`
  padding: 30px 15px 30px 25px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(0, auto);
  grid-gap: 40px 20px;
`

const MainContentItem = styled.div`
  width: 350px;
  height: 400px;
  display: flex;
  padding: 25px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 7px 7px 7px grey;
  border-radius: 8px;
  cursor: pointer;
  &:hover{
    transform: scale(1.03);
    transition: all 0.3s;
  }
`

const ItemH3 = styled.h3`
  width: 100%;
  padding: 35px 0px 20px 0;
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  border-bottom: 3px solid lightgrey;
  letter-spacing: 2px;
`
const ItemSpanDiv = styled.div`
  margin-top: 20px;
  float: left;
  align-self: flex-start;
  font-size: 20px;
`

export default List