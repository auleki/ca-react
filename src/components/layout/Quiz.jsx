import React from 'react'
import { QuizPage, QuizBox } from "../StyledComponents";

const Quiz = () => {
  return (
    <QuizPage>
      <QuizBox>
        <div className="quiz-title">
          <p>BLESSING SMITH</p>
          <p>1/5 Questions </p>
        </div>
        <div className="row">
          <p>6 ANSWERS LEFT</p>
          <p>20s Remaining</p>
        </div>
      </QuizBox>
    </QuizPage>
  )
}

export default Quiz