import React from 'react'
import { SButton } from './StyledComponents'

const IconButton = ({ text, icon, isDisabled, btnFunction, funcParam }) => {
  return (
    <SButton disabled={isDisabled} onClick={() => btnFunction(funcParam)} >
      <span className="text">{text}</span>
      <span className="icon">{icon}</span>
    </SButton>
  )
}

export default IconButton