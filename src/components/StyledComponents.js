import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  font-family: Helvetica;
  border-radius: .5rem;
  background-color: #4a0072;
  transition: background-color 150ms ease-in;
  border: none;
  color: ${props => props.primary ? 'purple' : '#fff'};
  &:hover {
    cursor: pointer;
    background-color: #ab47bc;
  }
`

export const Title = styled.h1`
  color: #ff1744;
  font-size: 2.5rem;
`

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ffeb3b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Button = ({ primary, children }) => {
  return <StyledButton primary={primary}>{ children }</StyledButton>
}