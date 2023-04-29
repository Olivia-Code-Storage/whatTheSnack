import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Button from '../components/common/Button'

const List = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <MainContentTop>
          <Button size={'large'} color={'white'}>Go Recos!</Button>
        </MainContentTop>
        <MainContentBottom>
          <MainContentItem>
            <div>
              <img src="https://bit.ly/3AFBJqE" alt="" />
            </div>
            <ItemH3>칩스 아호이 오리지널</ItemH3>
            <ItemSpanDiv>
              <span>🤍</span>&nbsp;
              <span>35</span>
            </ItemSpanDiv>
          </MainContentItem>
          <MainContentItem>
            <div>
              <img src="https://bit.ly/428oRVP" alt="" />
            </div>
            <ItemH3>레이즈 라임맛 감자칩</ItemH3>
            <ItemSpanDiv>
              <span>🤍</span>&nbsp;
              <span>35</span>
            </ItemSpanDiv>
          </MainContentItem>
          <MainContentItem>
            <div>
              <img src="https://bit.ly/427dCgp" alt="" />
            </div>
            <ItemH3>몽쉘 너티프렌즈</ItemH3>
            <ItemSpanDiv>
              <span>🤍</span>&nbsp;
              <span>35</span>
            </ItemSpanDiv>
          </MainContentItem>
          <MainContentItem>
            <div>
              <img src="https://bit.ly/3Hjoos4" alt="" />
            </div>
            <ItemH3>이토 랑그리 초코 크림샌드</ItemH3>
            <ItemSpanDiv>
              <span>🤍</span>&nbsp;
              <span>35</span>
            </ItemSpanDiv>
          </MainContentItem>
          <MainContentItem>
            <div>
              <img src="https://bit.ly/3LkdVxL" alt="" />
            </div>
            <ItemH3>캐나다 데어 메이플 쿠키</ItemH3>
            <ItemSpanDiv>
              <span>🤍</span>&nbsp;
              <span>35</span>
            </ItemSpanDiv>
          </MainContentItem>
          <MainContentItem>
            <div>
              <img src="https://bit.ly/40IXtwp" alt="" />
            </div>
            <ItemH3>스모어오갓멜로 크리스피</ItemH3>
            <ItemSpanDiv>
              <span>🤍</span>&nbsp;
              <span>35</span>
            </ItemSpanDiv>
          </MainContentItem>
          <MainContentItem>
            <div>
              <img src="https://bit.ly/444GqI6" alt="" />
            </div>
            <ItemH3>코알라마치 초코과자</ItemH3>
            <ItemSpanDiv>
              <span>🤍</span>&nbsp;
              <span>35</span>
            </ItemSpanDiv>
          </MainContentItem>
          <MainContentItem>
            <div>
              <img src="https://bit.ly/3HoByEd" alt="" />
            </div>
            <ItemH3>로아커 헤이즐넛</ItemH3>
            <ItemSpanDiv>
              <span>🤍</span>&nbsp;
              <span>35</span>
            </ItemSpanDiv>
          </MainContentItem>
        </MainContentBottom>
      </MainContainer>
      <Footer />
    </>
  )
}

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