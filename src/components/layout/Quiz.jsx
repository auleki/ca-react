import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { QuizPage, QuizBox, questionList, FButton } from "../StyledComponents";
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

const ScoreView = ({ score, restart }) => {
  return (
    <QuizBox>
      <div className="score-title">
        <p>JEAN CLAUDE</p>
        {/* <h3>Quiz Score</h3> */}
        <FButton onClick={restart}>
          <RotateLeftIcon />
        </FButton>
      </div>
      <div className="score-display">
        <h2>Score</h2>
        <h3>{score || 9}</h3>
        <Link to="/">
          <FButton primary>Back to shop</FButton>
        </Link>
      </div>
      
        
      
    </QuizBox>
  )
}

const Quiz = () => {
  const [questions, setQuestions] = useState(questionList)
  const randomNumber = Math.floor(Math.random() * questions.length)
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(randomNumber)
  const [showScore, setShowScore] = useState(true)
  const [limit, setLimit] = useState(10)
  const [attempt, setAttempt] = useState(1)


  const optionHandler = (isCorrect) => {
    if (isCorrect) setScore(score + 1)
    // const nextQuestion = currentQuestion + 1
    // if (questions.length > nextQuestion && limit >= attempt) {
      setCurrentQuestion(randomNumber)
      if (limit > attempt) {
      setAttempt(attempt + 1)
      // console.log(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const resetScore = () => {
    setShowScore(false)
    setScore(0)
    setAttempt(1)
  }

  return (
    <QuizPage>
      {showScore
        ? <ScoreView 
            score={score}
            restart={resetScore}/>
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
                <button 
                  key={i}
                  className="button" 
                  onClick={() => optionHandler(option.isCorrect)}>
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