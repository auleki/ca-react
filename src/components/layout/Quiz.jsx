import React, { useState, useEffect } from 'react'
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
  const [questionsSet, setQuestionsSet] = useState([])
  // const randomNumber = Math.floor(Math.random() * questions.length)
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [showScore, setShowScore] = useState(false)
  const [limit, setLimit] = useState(10)
  const [attempt, setAttempt] = useState(1)
  let timer = 30
  
  const shuffleQuestions = (arr) => {
    // this array takes in another array
   // shuffles it and cuts out the first ten questions
    for(let i = arr.length - 1; i > 0; i--)  {
      let rand = Math.floor(Math.random() * (i + 1))
      let temp = arr[i]
      arr[i] = arr[rand]
      arr[rand] = temp
    }
    const currentQuestions = arr.splice(1, 11)
    setQuestions(currentQuestions)
    return currentQuestions
  }

  useEffect(() => {
    shuffleQuestions(questionList)
    console.log('loaded')
  }, [])

  const optionHandler = (isCorrect) => {
    if (isCorrect) setScore(score + 1)
    if (limit > attempt) {
      setCurrentQuestion(currentQuestion + 1)
      setAttempt(attempt + 1)
    } else {
      setShowScore(true)
    }
  }

  setInterval(() => {
    timer -= 1
  } ,1000)

  console.log("SECONDS: ", timer)
  
  // const timerWorker = () => {
  //   setInterval(() => {
  //     setTimer(timer - 1)
  //     // if (timer === 0) {
  //     //   console.log("Time up")
  //     //   setCurrentQuestion(currentQuestion + 1)
  //     // } else {
  //     //   setTimer(timer - 1)        
  //     // }
  //   },1000)
  // }

  const resetScore = () => {
    setShowScore(false)
    setScore(0)
    setAttempt(1)
    setCurrentQuestion(1)
    shuffleQuestions(questionList)
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
              <p className="bold">{timer}s Remaining</p>
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