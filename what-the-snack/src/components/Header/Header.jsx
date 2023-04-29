import React from 'react';
import styled from 'styled-components'
function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderTopContent>
          <HeaderTopContentItem>
            <HeaderItem>Home</HeaderItem>
            <HeaderItem>Snack Recos?</HeaderItem>
          </HeaderTopContentItem>
          <HeaderTopContentItem>
            <HeaderItem>Login</HeaderItem>
          </HeaderTopContentItem>
        </HeaderTopContent>

        <HeaderBottomContent>
          <h1>WHAT<HighLightSpan>THE</HighLightSpan>SNACK</h1>
        </HeaderBottomContent>
      </HeaderContainer>
    </>
  )
}

const HeaderContainer = styled.header`
  height: 25vh;
  padding: 10px 10px 20px 10px;
  border-bottom: 2px solid black;
`
const HeaderTopContent = styled.div`
  display: flex;
  justify-content: space-between;
`
const HeaderTopContentItem = styled.div`
  display: flex;
  gap: 20px;
  font-size: 34px;
`

const HeaderItem = styled.p`
  cursor: pointer;
  &:hover {
    color: #ff4429;
  }
`

const HeaderBottomContent = styled.div`
  font-size: 200px;
  text-align: center; 
  letter-spacing: 18px;
  position: absolute;
  z-index: -1;
  top: 50px;
  font-weight: 900;
`
const HighLightSpan = styled.span`
  color: #ff4429;
`

const remove = styled.div`
  
`
export default Header