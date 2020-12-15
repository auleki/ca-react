import React, { useState } from 'react'
import { QuizPage, QuizBox } from "../StyledComponents";

const Quiz = () => {
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const questions = [
    {
      questionText: "__________ is a general term referring to actual objects related to the human body?",
      answerOptions: [
        { answerText: 'costume', isCorrect: false },
        { answerText: 'wardrobe', isCorrect: false },
        { answerText: 'clothing', isCorrect: true },
        { answerText: 'wear ability', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there? But then there were no books from Hitler',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];


  return (
    <QuizPage>
      <QuizBox>
        <div className="quiz-title">
          <p>BLESSING SMITH</p>
          <p className="bold">1/5 Questions </p>
        </div>
        <div className="row">
          <p>6 ANSWERS LEFT</p>
          <p className="bold">20s Remaining</p>
        </div>
        <div className="question">
          <p>{questions[currentQuestion].questionText}</p>
        </div>
        <div className="options">
          {questions[currentQuestion].answerOptions.map((option, i) => (
            <button>{option.answerText}</button>))}
        </div>
      </QuizBox>
    </QuizPage>
  )
}

export default Quiz