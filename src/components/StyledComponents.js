import React from 'react'
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';


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
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  margin: 3rem 0;
  height: 100%;
  text-align: center;
  padding: 0 1rem;
`

export const CardStyle = styled.div`
  /* height: 30rem; */
  height: 100%;
  padding: 3rem 0;
  width: 60%;
  text-align: center;
  margin: 1rem 0;
  border-radius: .4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F36B2B;
  box-shadow: 0px 2px 16px 6px rgba(243, 107, 43, .2);
  transition: transform 200ms ease-in, box-shadow 300ms ease-in;

  svg {
    height: 1.5rem;
    margin-left: .5rem;
    width: 1.5rem;
    transition: transform 300ms ease-in-out;
  }

  &:hover {
    box-shadow: none;
  }

  img {
    height: auto;
    width: 50%;
  }
`

export const LinkButton = styled.a`
  background-color: #fff;
  color: #000;
  text-transform: uppercase;
  padding: .5rem 1.5rem;
  border-radius: .3rem;
  display: flex; 
  align-items: center;
  border: 3px solid transparent;
  text-decoration: none;
  transition: color 300ms ease-out, background-color 150ms ease-out;
  margin: 1rem 0;

  &:hover {
    background-color: #000;
    color: #ddd;

    svg {
      transform: translateX(5px);
    }
    /* border: #fff 3px solid; */
  }

  svg {
    height: 1.5rem;
    margin-left: .5rem;
    width: 1.5rem;
    transition: transform 300ms ease-in-out;
  }

`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #400; */
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding: 1rem 0 1rem 0;

  .price {
    font-size: 2rem;
  }
`

// export const LinkStyled = styled(Link)`

// `

export const IconStyle = styled.div`
  display: inline;
  img {
    height: 1.5rem;
    width: 1.5rem;
  }
`