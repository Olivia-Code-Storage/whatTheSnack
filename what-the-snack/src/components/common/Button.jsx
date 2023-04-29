import React from 'react'
import styled from 'styled-components'

function Button({ children }) {
  const Button = styled.button`
    width: 150px;
    height: 60px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    &:active {
      filter: brightness(70%);
    }
  `

  // const colorHandler = (color) => {
  //   switch (color) {
  //     case 'white':
  //       return `border: 2px solid #000; background-color: #fff`
  //   }
  // }

  return (
    <Button>{children}</Button>
  )
}


export default Button