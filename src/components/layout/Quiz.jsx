import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  QuizPage,
  QuizBox,
  questionList,
  QuizInput,
  FButton,
} from "../StyledComponents";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

const ScoreView = ({ score, restart, user }) => {
  return (
    <QuizBox>
      <div className="score-title">
        <p>{user.firstName}</p>
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
  );
};

const AddUser = ({ setUser, user }) => {
  const [userInput, setUserInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const onLastName = (e) => {
    setLastName(e.target.value);
  };

  const onFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const saveUser = () => {
    console.log(`User of email: ${userInput} saved 🎉`);
    const quizUser = {
      firstName: firstName,
      lastName: lastName,
      email: userInput,
      scores: [],
    };
    // console.table(quizUser);
    setUser(quizUser);
  };
  return (
    <QuizPage>
      <QuizBox>
        <div className="start-game">
          <h2 className="light">
            We need to know you, share your email to start the quiz
          </h2>
          <QuizInput
            autoFocus
            type="text"
            placeholder="First Name"
            onChange={onFirstName}
            value={firstName}
          />
          <QuizInput
            autoFocus
            type="text"
            placeholder="Last Name"
            onChange={onLastName}
            value={lastName}
          />
          <QuizInput
            autoFocus
            type="text"
            placeholder="@"
            onChange={onUserInput}
            value={userInput}
          />
          <FButton primary onClick={saveUser}>
            Start Quiz
          </FButton>
        </div>
      </QuizBox>
    </QuizPage>
  );
};

const Quiz = () => {
  const [questions, setQuestions] = useState(questionList);
  const [questionsSet, setQuestionsSet] = useState([]);
  // const randomNumber = Math.floor(Math.random() * questions.length)
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showScore, setShowScore] = useState(false);
  const [limit, setLimit] = useState(10);
  const [attempt, setAttempt] = useState(1);
  const [user, setUser] = useState("");
  const [timer, setTimer] = useState(30)
  const [oldUser, setOldUser] = useState(false)
  // let timer = 30;

  const shuffleQuestions = (arr) => {
    // this array takes in another array
    // shuffles it and cuts out the first ten questions
    for (let i = arr.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[rand];
      arr[rand] = temp;
    }
    const currentQuestions = arr.splice(1, 11);
    setQuestions(currentQuestions);
    return currentQuestions;
  };

  useEffect(() => {
    shuffleQuestions(questionList);
    // console.log("loaded");
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTimer(timer - 1)
    }, 1000)
  }, [])
  console.log("Timer: ", timer)
  
  const optionHandler = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (limit > attempt) {
      setCurrentQuestion(currentQuestion + 1);
      setAttempt(attempt + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetScore = () => {
    setShowScore(false);
    setScore(0);
    setAttempt(1);
    setCurrentQuestion(1);
    shuffleQuestions(questionList);
  };
  // console.log("SHOW ME USER", user)
  return (
    <QuizPage>
      {showScore ? (
        <ScoreView user={user} score={score} restart={resetScore} />
      ) : !user ? (
        <AddUser user={user} setUser={setUser} />
      ) : oldUser 
        ? <h3>Put in email</h3>
        : (
          <QuizBox>
            <div className="quiz-title">
              <p>{user.firstName}</p>
              <p className="bold">
                {attempt}/{limit} Questions{" "}
              </p>
            </div>
            <div className="row">
              <p>
                SCORE: <span className="bold">{score}</span>
              </p>
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
                  onClick={() => optionHandler(option.isCorrect)}
                >
                  {option.answerText}
                  {option.isCorrect ? " R" : ""}
                </button>
              ))}
            </div>
          </QuizBox>
        )
      }
    </QuizPage>
  );
};

export default Quiz;
