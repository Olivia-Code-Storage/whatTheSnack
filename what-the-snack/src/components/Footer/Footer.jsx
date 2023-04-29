import React from 'react';
import styled from 'styled-components'
function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterLeftContent>
          <p>© Bucheon neighborhood 2023</p>
          <p>부천신중동역2번출구(유) 대표: Heeje, Hansol, 부천시 오정구 소사대로 382 (도당동) 항해99타워, 01499</p>
          <p>사업자등록번호: 131-41-41799</p>
          <p>사업자정보조회</p>
          <p>고객관리지원팀: (02) 8941-0234 lv4test@gmail.com</p>
        </FooterLeftContent>
        <Logo src={`${process.env.PUBLIC_URL}/images/logo-removebg-preview.png`} />
        <FooterRightContent>
          <FotterName>Shin Hee Je</FotterName>
          <FotterName>Kim Han Sol</FotterName>
        </FooterRightContent>
      </FooterContainer>
    </>
  )
}

const FooterContainer = styled.footer`
  height: 13vh;
  padding: 0 30px 0 30px;
  background-color: #ff4429;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  /* color: rgba(255, 255, 255, 0.9); */
  color: black;
  border-top: 2px solid black;

`

const FooterLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  @media (max-width:782px) {
    display:none;
    transition: all 0.5s;
  }
`
const Logo = styled.img`
  width: 150px;
  transform: translateX(-50%);
  @media (max-width:1080px) {
    width: 160px;
    transform: translateX(0);
    transition: all 0.5s;
  }
`

const FooterRightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width:1080px) {
    flex-direction: column;
  }
`

const FotterName = styled.p`
  font-size: 40px;
    font-family: 'Libre Barcode 39 Text', cursive;
`
export default Footer