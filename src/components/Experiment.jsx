import React, { useState, useEffect } from 'react'
import { ParentContainer, FButton } from './StyledComponents'

const Experiment = () => { 
  
  const dateOne = new Date("02/07/2021")
  const dateTwo = new Date()

  const differenceInTime = dateTwo.getTime() - dateOne.getTime()
  const differenceInDays = differenceInTime / (1000 * 3600 * 24)

  console.log(differenceInDays)

  if (differenceInDays < 1) {
    return (
      <ParentContainer>
        <h2>Wait Longer...</h2>
        <p>You need to wait another 24 hours before you can play again</p>
      </ParentContainer>
    )
  }
  
    return (
      <ParentContainer>
       <h2>Begin Game...</h2>
       <p>Now we start the game</p>
      </ParentContainer>
  )
}

export default Experiment