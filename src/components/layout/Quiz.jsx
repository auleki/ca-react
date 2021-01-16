import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  QuizPage,
  QuizBox,
  // Form,
  questionList,
  Input,
  // QuizInput,
  AuthForm,
  AuthPage,
  FButton,
} from "../StyledComponents";
import { addSubscriber } from "../../services/operations";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';


const ScoreView = ({ score, restart, user }) => {
  return (
    <QuizBox>
      <div className="score-title">
        <p>{user.firstName}</p>
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

const AddUser = ({ setUser, user, loginOrRegister }) => {
  const [userInput, setUserInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [joinMailingList, setJoinMailingList] = useState(true);
  const [loading, setLoading] = useState(false);

  const onUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const onLastName = (e) => {
    setLastName(e.target.value);
  };

  const onFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const saveUser = (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      console.log(`User of email: ${userInput} saved 🎉`);
      const quizUser = {
        firstName: firstName,
        lastName: lastName,
        email: userInput,
        toSubscribe: joinMailingList,
        scores: [],
      };
      console.table(quizUser);
      setUser(quizUser)
    } catch (error) {

    }
    // console.table(quizUser);
    // setUser(quizUser);
  };

  const handleMailingList = (e) => setJoinMailingList(!joinMailingList)

  return (
    // <QuizPage> 
    //   <QuizBox>
    <AuthPage>
      <div className="start-game register">
        <h2 className="light">
          We need to know you, fill the form to start the quiz
      </h2>

        <AuthForm onSubmit={saveUser}>
          <Input
            autoFocus
            type="text"
            placeholder="First Name"
            onChange={onFirstName}
            value={firstName}
          />
          <Input
            type="text"
            placeholder="Last Name"
            onChange={onLastName}
            value={lastName}
          />
          <Input
            type="text"
            placeholder="@"
            onChange={onUserInput}
            value={userInput}
          />
          <div className="quiz_actions">
            <FormControlLabel
              control={<Checkbox
                checked={joinMailingList}
                name="mailingList"
                onChange={handleMailingList} />}
              label="Join Our Mailing List"
            />
            <a
              className="link"
              onClick={() => loginOrRegister("login")}>
              You played before? Login
          </a>
          </div>

          <FButton primary>
            {loading ? <CircularProgress size={23} color="inherit" /> : "Start Quiz"}
          </FButton>

          {/* <FButton primary>
          Start Quiz
        </FButton> */}
        </AuthForm>
      </div>
    </AuthPage>
  );
};


const OldUser = ({ loginOrRegister }) => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const onUserInput = (e) => setEmail(e.target.value)

  const checkUser = (e) => {
    e.preventDefault()
    setLoading(!loading)
    // setRegister()
  }

  return (
    // <QuizPage>
    //   <QuizBox>
    <AuthPage>
      <div className="start-game login">
        <AuthForm onSubmit={checkUser}>
          <h2 className="light">
            Welcome back, start the quiz with your email
        </h2>
          <div className="mobile_raise">
            <Input
              autoFocus
              type="text"
              placeholder="@"
              onChange={onUserInput}
              value={email}
            />
            <div className="quiz_actions">
              <a
                className="link"
                onClick={() => loginOrRegister("register")}>
                First time playing? Register
              </a>
            </div>
            <FButton primary>
              {loading ? <CircularProgress size={23} color="inherit" /> : "Start Quiz"}
            </FButton>
          </div>

        </AuthForm>
      </div>
    </AuthPage>
    //   </QuizBox>
    // </QuizPage>
  )
}

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
  const [register, setRegister] = useState(true)
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

  const loginOrRegister = (mode) => {
    if (mode === "login") {
      setOldUser(true)
      setRegister(false)
    } else if (mode === "register") {
      setOldUser(false)
      setRegister(true)
    }
  }

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
        <ScoreView
          user={user}
          score={score}
          restart={resetScore}
        />
      ) : oldUser
          ? (
            <OldUser
              setRegister={setRegister}
              loginOrRegister={loginOrRegister}
            />
          ) : register
            ? <AddUser
              user={user}
              setUser={setUser}
              setOldUser={setOldUser}
              loginOrRegister={loginOrRegister}
            />
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
