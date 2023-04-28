import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const Main = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <div>
            <MainContentImg src={`${process.env.PUBLIC_URL}/images/haru.png`} alt="" />
        </div>

        <MainContentRight>
          <MainContentRightTitle>
            What The Snack은<br />
            국내외 다양한 과자들로<br />
            추천하고 소개하는<br />
            자유로운 공간입니다.
          </MainContentRightTitle>

          <MainContentRightItem>
            어쩌고 저쩌고어쩌고 저쩌고 <br />
            어쩌고 저쩌고어쩌고 저쩌고 저쩌고어쩌고 저쩌고 저쩌고어쩌고 저쩌고 <br />
            어쩌고 저쩌고
          </MainContentRightItem>

          <MainContentRightItem>
            어쩌고 저쩌고어쩌고 저쩌고 <br />
          </MainContentRightItem>

          <MainContentRightItem>
            어쩌고 저쩌고어쩌고 저쩌고 <br />
            어쩌고 저쩌고어쩌고 저쩌고 저쩌고어쩌고 저쩌고 저쩌고어쩌고 저쩌고 <br />
            어쩌고 저쩌고
          </MainContentRightItem>

          <MainContentRightItem>
            어쩌고 저쩌고어쩌고 저쩌고 저쩌고 저쩌고어쩌고 저쩌고  저쩌고 저쩌고어쩌고 저쩌고 <br />
            어쩌고 저쩌고어쩌고 저쩌고 저쩌고어쩌고 저쩌고 저쩌고어쩌고 저쩌고 <br />
            어쩌고 저쩌고 저쩌고 저쩌고어쩌고 저쩌고
          </MainContentRightItem>

          <MainContentRightItem>
            어쩌고 저쩌고어쩌고 저쩌고 저쩌고 저쩌고어쩌고 저쩌고  저쩌고 저쩌고어쩌고 저쩌고 <br />
          </MainContentRightItem>
        </MainContentRight>
      </MainContainer>
      <Footer />
    </>
  )
}

const MainContainer = styled.main`
  height: 450px;
  background-color: #fffc63;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const MainContentImg = styled.img`
  width: 650px;
  height: 300px;
  background-color: #b3b3f1;
  position: relative;
  left: -110px;
  @media (max-width:1080px) {
    display:none;
  }
`

const MainContentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const MainContentRightTitle = styled.h4`
  line-height: 20px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
`

const MainContentRightItem = styled.p`
  line-height: 18px;
  font-size: 12px;
`
export default Main