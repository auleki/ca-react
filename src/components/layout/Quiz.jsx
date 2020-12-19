import { current } from 'immer';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { QuizPage, QuizBox, questionList, FButton } from "../StyledComponents";


const ScoreView = ({ score }) => {
  return (
    <QuizBox>
      <div className="quiz-title">
        <h3>Quiz Score</h3>
        <p>JEAN CLAUDE</p>
      </div>
      <div>
        <h3>{score || 9}</h3>        
      </div>

    </QuizBox>
  )
}

const Quiz = () => {
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(3)
  const [showScore, setShowScore] = useState(true)
  const [questions, setQuestions] = useState(questionList)
  const [limit, setLimit] = useState(5)
  const [attempt, setAttempt] = useState(1)

  const optionHandler = (isCorrect) => {
    if (isCorrect) setScore(score + 1)
    const nextQuestion = currentQuestion + 1
    if (questions.length > nextQuestion && limit !== attempt) {
      setCurrentQuestion(nextQuestion)
      setAttempt(attempt + 1)
    } else {
      setShowScore(true)
    }
  }

  return (
    <QuizPage>
      {showScore
        ? <ScoreView score={score} />
        : (
          <QuizBox>
            <div className="quiz-title">
              <p>BLESSING SMITH</p>
              <p className="bold">{attempt}/{limit} Questions </p>
            </div>
            <div className="row">
              <p>SCORE: <span className="bold">{score}</span></p>
              {/* <p>6 ANSWERS LEFT</p> */}
              <p className="bold">20s Remaining</p>
            </div>
            <div className="question">
              <p>{questions[currentQuestion].questionText}</p>
            </div>
            <div className="options">
              {questions[currentQuestion].answerOptions.map((option, i) => (
                <button onClick={() => optionHandler(option.isCorrect)}>
                  {option.answerText}
                  {option.isCorrect ? " R" : ""}
                </button>))}
            </div>
          </QuizBox>
        )
      }

    </QuizPage>
  )
}

export default Quiz