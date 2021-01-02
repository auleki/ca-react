import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  QuizPage,
  AuthPage,
  QuizBox,
  questionList,
  FormTitle,
  Input,
  FButton,
  HyperLink,
  Form
} from "../StyledComponents";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

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

const AddUser = ({ setUser, user, setReturnUser }) => {
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

  const isOldUser = () => setReturnUser(true)

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
      <AuthPage>
        <div className="start-game">
          <h2 className="light">

          </h2>
          <form>
            <FormTitle>
              Fill the form to start the quiz
            </FormTitle>
            <Input
              autoFocus
              type="text"
              placeholder="First Name"
              onChange={onFirstName}
              required
              value={firstName}
            />

            <Input
              required
              autoFocus
              type="text"
              placeholder="Last Name"
              onChange={onLastName}
              value={lastName}
            />

            <Input
              autoFocus
              required
              type="text"
              placeholder="@"
              onChange={onUserInput}
              value={userInput}
            />

            <FButton
              primary
              onClick={saveUser}
              type="submit">
              <span>
                Start Quiz
              </span>
              <span>
                <PlayCircleFilledWhiteIcon />
              </span>
            </FButton>
            <HyperLink onClick={isOldUser}>
              Not your first time playing ?
          </HyperLink>
          </form>
        </div>
      </AuthPage>
    </QuizPage>
  );
};

const OldUser = ({ setReturnUser, user }) => {
  const [userInput, setUserInput] = useState("")

  const onUserInput = e => setUserInput(e.target.value)

  const isOldUser = () => setReturnUser(false)

  const startGame = (mode, user) => {
    if (mode === "login") {
      // run login method
    } else if (mode === 'register') {
      // run register method
    } else {
      return user
    }
  }

  return (
    <QuizPage>
      <AuthPage>
        <div className="start-game">
          {/* <h2 className="light">

          </h2> */}
          <form>
            <FormTitle>
              Welcome back, put in your email to start the quiz
            </FormTitle>
            <Input
              autoFocus
              required
              type="text"
              placeholder="@"
              onChange={onUserInput}
              value={userInput}
            />

            <FButton
              primary
              onClick={() => startGame("login", user)}
              type="submit">
              <span>
                Start Quiz
              </span>
              <span>
                <PlayCircleFilledWhiteIcon />
              </span>
            </FButton>
            <HyperLink onClick={isOldUser}>
              First time playing ?
          </HyperLink>
          </form>
        </div>
      </AuthPage>
    </QuizPage>
  )
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
  const [returnUser, setReturnUser] = useState(false)
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

  // useEffect(() => {
  //   setInterval(() => {
  //     setTimer(timer - 1)
  //     console.log("NOW", timer)
  //   }, 1000)
  // }, [timer])

  // console.log("Timer: ", timer)

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
      ) : !returnUser ? (
        <AddUser
          user={user}
          setUser={setUser}
          setReturnUser={setReturnUser} />
      ) : !oldUser
            ? (
              <OldUser
                user={user}
                setReturnUser={setReturnUser}
              />
            )
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
