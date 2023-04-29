import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';

const Detail = () => {
  return (
    <>
      <Header />
      <DetailContainer>

        <DetailContentImg src={`${process.env.PUBLIC_URL}/images/haru.png`} alt="" />

        <div>

          <h3>제목</h3>

          <h4>작성자</h4>

          <p>What the Snack exists for those who cherish their daily routines and aspire to make each day perfect, <br />
            willingly embracing moments of rest and relaxation as a means of personal growth. <br />
            It's the joy of discovering someone else's favorite treat, <br /></p>
          <p />

          <p>

          </p>
          
        </div>

      </DetailContainer >
      <Footer />
    </>
  )
}


const DetailContainer = styled.div`
background-color: #002e80;
  height: 537px;
  display: flex;
`

const DetailContentImg = styled.img`
  width: 800px;
  height: 500px;
  border: 2px solid white;
`
export default Detail