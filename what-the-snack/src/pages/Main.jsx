import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Main = () => {

  const navigate = useNavigate();
  return (
    <>
      <Header />
      <MainContainer>
        <MainContentTop>
          <MainContentImg src={`${process.env.PUBLIC_URL}/images/haru.png`} alt="" onClick={() => {
            navigate('/snackRecos')
          }}/>
          <MainContentImgText>Go Snack Rocos!</MainContentImgText>
        </MainContentTop>

        <MainContentRight>
          <MainContentRightTitle>
            Why do we eat snacks like cookies?<br />
            With so many delicious treats in the world,<br />
            what is it about snacks, particularly cookies,<br />
            that makes them so special?
          </MainContentRightTitle>

          <MainContentRightItem>
            Here's how What the Snack sees it:
          </MainContentRightItem>

          <MainContentRightItem>
            From the sweet aroma that emanates from a freshly baked batch, <br />
            to the sense of tranquility one feels while enjoying them in a cozy space, <br />
            and the brief respite they provide from the daily grind,<br />
            cookies offer a chance to escape the mundane and experience happiness and sweetness.
          </MainContentRightItem>

          <MainContentRightItem>
            What the Snack exists for those who cherish their daily routines and aspire to make each day perfect, <br />
            willingly embracing moments of rest and relaxation as a means of personal growth. <br />
            It's the joy of discovering someone else's favorite treat, <br />
            the pride of sharing one's own happiness with others,<br />
            and the satisfaction of spreading a little bit of joy to the world.
          </MainContentRightItem>

          <MainContentRightItem>
          What the Snack is a place where everyone's happiness is shared,<br />
          and where dreams are made a reality. <br />
          </MainContentRightItem>
        </MainContentRight>
      </MainContainer>
      <Footer />
    </>
  )
}

const MainContainer = styled.main`
	/* overflow: hidden; */
  height: 62vh;
  background-color: #fffc63;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const MainContentImgText = styled.span`
  position: absolute;
  left: 65px;
  top: 150px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 50px;
  opacity: 0;
`

const MainContentImg = styled.img`
  width: 700px;
  height: 350px;
  background-color: #b3b3f1;
  position: relative;
  left: -110px;
  border: 2px solid black;
  cursor: pointer;
  &:hover + ${MainContentImgText} {
    opacity: 1;
    transition: opacity 0.5s;
  }

  &:hover {
    filter: brightness(40%);
    transition: all 0.3s;
  }
  @media (max-width:1080px) {
    display:none;
  }
`

const MainContentTop = styled.div`
  position: relative;
`


const MainContentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const MainContentRightTitle = styled.h4`
  line-height: 26px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
`

const MainContentRightItem = styled.p`
  line-height: 22px;
  font-size: 16px;
`
export default Main