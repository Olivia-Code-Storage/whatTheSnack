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
  border: 2px solid black;
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