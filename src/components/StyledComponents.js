import React from 'react'
import styled, { css, keyframes } from 'styled-components';



const FadeIn = keyframes`
  0% {
    box-shadow: 0 0 .5rem .4rem rgba(0, 0, 0, .3);
  }

  100% {
      box-shadow: none;
  }
`

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  font-family: Helvetica;
  border-radius: .2rem; 
  transition: background-color 150ms ease-in;
  border: none;
  margin: 1.5rem 0;
  &:hover {
    cursor: pointer;
    background-color: #43a047;
    color: #fff;
  }
  ${({ primary }) => 
      primary && 
      css`
        color: #fff;
        /* background-color: ${({ bgColor }) => bgColor}; */
        background-color: palevioletred;
        transition: box-shadow 250ms ease-out;

        &:hover {
          box-shadow: none;
          animation: 500ms ${FadeIn} ease-in infinite;
          background-color: #333;
          // use the shadow to add a pulse animation.
          /* box-shadow: 0 0 .5rem .4rem rgba(0, 0, 0, .3); */
        }
      `
    }  
`

export const Title = styled.h1`
  color: cadetblue;
  font-size: 2.5rem;
`

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Button = ({ primary, children, bgColor }) => {
  return (
    <StyledButton 
      primary={primary}
      bgColor={bgColor}
      >
      { children }
    </StyledButton>
    )
}

export const CardContainer = styled.div`
  /* background-color: #f00; */
  /* heig */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const CardStyle = styled.div`
  height: 100%;
  width: 50%;
  text-align: center;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #909;
`