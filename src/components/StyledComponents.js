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
        background-color: #F36B2B;
        transition: box-shadow 250ms ease-out, background-color 200ms ease-in;

        &:hover {
          box-shadow: none;
          animation: 500ms ${FadeIn} ease-in infinite;
          ${'' /* background-color: #333; */}
          background-color: #fff;
          color: #000;
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
  width: 40%;
  /* width: 100%; */
  text-align: center;
  margin: 1rem 0;
  border-radius: .4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F36B2B;
  box-shadow: 0px 2px 16px 6px rgba(243, 107, 43, .2);
  transition: transform 200ms ease-in, box-shadow 300ms ease-in;

  @media (min-width: 318px) and (max-width: 707px) {
    width: 100%;
  }

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
    width: 60%;
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

export const ShopCartContainer = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: #ff0; */
  /* text-align: center; */
  display: flex;
  justify-content: center;
  color: #fff;
  min-height: 100vh;
`

export const CartItemStyle = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1.5fr .7fr;
  grid-gap: 2.5rem;
  width: 85%;
  justify-content: space-between;
  padding: 3rem;
  /* background: #333; */

  .shopping-list {
    /* background-color: #fff; */
    width: 100%;
    /* color: #000; */

    margin-right: 1rem;
  }
  
  .checkout {
    width: 100%;
    border-radius: .2rem;
    /* background-color: #212121; */
    text-align: center;
    /* background-color: #000; */
    color: #fff;
    /* padding: 1rem; */

    
  }
`

export const CartCard = styled.div`
  background-color: #212121;
  color: #fff;
  margin-bottom: 2rem;
  /* display: grid; */
  /* grid-template-columns: 2fr 1fr 1fr; */
  display: flex;
  justify-content: space-between;
  border-radius: .2rem;
  align-items: center;
  padding: 1rem;

  .card-info {
    display: flex;
    /* background: #fff; */
    align-items: center;
    justify-content: space-between;
    padding: 1em;

    p {
      margin: 0 1em;
    }
  }

  input {
    padding: .8em .5rem;
    width: 30%;
    color: #fff;
    border-radius: .5em;
    background-color: #444;
  }

  img {
    height: auto;
    width: 15%;
    border: 2px solid #fff;
    border-radius: 100%;
    padding: .5em;
  }

  @media (min-width: 318px) and (max-width: 480px) {
    .card-info {
      display: flex; 
      flex-direction: column;
    }
  }
`

export const CheckoutCard = styled.div`
  background-color: #212121;
  color: #fff;
  text-align: left;
  /* justify-content: center; */
  display: flex;
  width: 100%;
  flex-direction: column;

  /* height: %; */
  padding: 1em 3rem;
  h2 {
    font-weight: 400;
  }

  div {
    margin: 1rem 0;
    /* background: #000; */
    display: flex;
    justify-content: space-between;
    color: #ddd;
    text-align: center;


    p {
      /* display: block; */
      font-size: 1.3rem;
      padding: .5rem 0;
    }

    p:nth-child(2) {
      /* margin-left: 1rem; */
      /* color: black; */
      font-weight: 800;
    }
  }
`

export const RowLayout = styled.div`
  align-items: center;
  display: flex;
  /* background: #ff0; */
  padding: 3rem;
`