import React from 'react'
import styled from 'styled-components'

function Button({ size, color, children }) {
  const Button = styled.button`
    ${() => sizeHandler(size)};
    ${() => colorHandler(color)};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      filter: brightness(90%);
    }
  `

  const sizeHandler = (size) => {
    switch (size) {
      case 'large':
        return `width: 145px; height: 55px; font-size: 20px;`;
      case 'small':
        return `width: 100px; height: 45px; font-size: 15px;`;
      default:
        return;
    }
  }

  const colorHandler = (color) => {
    switch (color) {
      case 'white':
        return `border: 2px solid #000; background-color: #fff`;
      case 'red':
        return `border: 2px solid #000; background-color: #ff4429; color: white`;
      default:
        return;
    }
  }

  return (
    <Button>{children}</Button>
  )
}


export default Button