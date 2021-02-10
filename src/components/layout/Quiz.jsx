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
  ParentContainer,
  AuthPage,
  FButton,
} from "../StyledComponents";
import { addSubscriber, saveQuizWinner, fetchUser, saveOrder, saveQuizUser } from "../../services/operations";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { CodeSharp } from "@material-ui/icons";


const ScoreView = ({ score, restart, user, resetTimer, setIsActive }) => {

  const saveScore = () => {
    // save score method  
    console.table("USER ON SCORE PAGE", user)
  }

  // console.log("USER DATA:", user)

  useEffect(() => {
    // saveQuizWinner(user)
    console.log('Score Page Loaded')
    saveScore()
    setIsActive(true)
    resetTimer()
  }, [])
  
  
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

const AddUser = ({ beginQuiz, setUser, user, loginOrRegister, setOldUser, setRegister }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [joinMailingList, setJoinMailingList] = useState(true);
  const [loading, setLoading] = useState(false);

  const onEmailInput = (e) => {
    setEmail(e.target.value);
  };
  
  const onUsernameInput = (e) => {
    setUsername(e.target.value)
  }

  const onLastName = (e) => {
    setLastName(e.target.value);
  };

  const onFirstName = (e) => {
    setFirstName(e.target.value);
  };

  // useEffect(() => {
  //   beginQuiz()
  // }, [])

  useEffect(() => {
    // console.log(ISODate())
  }, [])

  const saveUser = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      console.log(`User of email: ${email} saved 🎉`);
      const quizUser = {
        firstName,
        lastName,
        username,
        email,
        toSubscribe: joinMailingList,
        scores: [],
      };

      if (quizUser.toSubscribe) {

        console.log("Saving" + quizUser.email + " to subscriber's list")
      }

      //! Check if email exists
      // const emailExists = await fetchUser(email)
      // console.log("Value of emailExists:", emailExists)
      // if (emailExists) {
      //   throw new Error("Email already exists, try a new one")
      // }

      console.table(quizUser);
      const savedUser = await saveQuizUser(quizUser)
      console.table("SAVED USER:", savedUser)
      setUser(quizUser)
      beginQuiz()
      // setOldUser(false)
      // setRegister(false)
    } catch (error) {
      console.log(error)
    }
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

        <form onSubmit={saveUser}>
          <Input
            autoFocus
            type="text"
            placeholder="First Name"
            onChange={onFirstName}
            value={firstName}
            required
          />
          <Input
            type="text"
            placeholder="Last Name"
            onChange={onLastName}
            value={lastName}
            required
          />
          <Input
            type="text"
            placeholder="Username"
            onChange={onUsernameInput}
            value={username}
            required
          />
          <Input
            type="text"
            placeholder="@"
            onChange={onEmailInput}
            value={email}
            required
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

          <FButton primary type="submit">
            {loading ? <CircularProgress size={23} color="inherit" /> : "Start Quiz"}
          </FButton>

          {/* <FButton primary>
          Start Quiz
        </FButton> */}
        </form>
      </div>
    </AuthPage>
  );
};

const OldUser = ({ loginOrRegister, beginQuiz, setUser }) => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const onUserInput = (e) => setEmail(e.target.value)

  const loginUser = async (e) => {
    try {
      e.preventDefault()
      setLoading(true)
      const fetchedUser = await fetchUser(email)
      setUser(fetchedUser)
      beginQuiz()
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    // <QuizPage>
    //   <QuizBox>
    <AuthPage>
      <div className="start-game login">
        <form onSubmit={loginUser}>
          <h2 className="light">
            Welcome back, start the quiz with your email
        </h2>
          {/* padding added in css !styled-comp */}
          <div className="mobile_raise">
            <Input
              autoFocus
              type="text"
              placeholder="@"
              onChange={onUserInput}
              value={email}
              required
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

        </form>
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
  const [oldUser, setOldUser] = useState(false)
  const [register, setRegister] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const [seconds, setSeconds] = useState(30)
  const [questionIndex, setQuestionIndex] = useState(0)
  // let timer = 30;

  const shuffleQuestions = (arr) => {
    /* this array takes in another array
        shuffles it &       
        cuts out the first ten questions
     */
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

  const beginQuiz = () => {
    setOldUser(false)
    setRegister(false)
    // console.log('starting quiz...')
    let interval;
    // start timer here 
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000)
    } else if (!isActive) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }

  const transitQuiz = () => {
    setOldUser(false)
    setRegister(false)
  }

  useEffect(() => {
    shuffleQuestions(questionList);
    resetTimer()
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

  const toggle = () => {
    console.log('Back to timer')
    setIsActive(!isActive)
  }
  
  const resetTimer = () => {
    console.log('resetting timer...')
    setSeconds(30)
    setIsActive(false)
  }

  // console.log('Before Effect:', seconds)

  const isTimeUp = () => {
    toggle()
    if (seconds === -1) {
      optionHandler()
    }
  }
  
  useEffect(() => {
    isTimeUp()   
  }, [seconds])

  // useEffect(() => {
  //   beginQuiz()
  // }, [])

  // const canPlay = (date) => {
  //   let currentDate = new Date()
  //   let lastPlayed = date
  //   let differenceInTime = currentDate.getTime() - lastPlayed.getTime() 
  //   let differenceInDays = differenceInTime / ( 1000 * 3600 * 24)
  //   if (differenceInDays < 1) return false
  //   return true 
  // }  

  
  //! Effect for countdown timer
  // useEffect(() => {
  //   let interval = null;

  //   // console.log(canPlay(new Date()))
    
  //   if (isActive) {
  //     interval = setInterval(() => {
  //       setSeconds(seconds => seconds - 1);
  //     }, 1000);
  //   } else if (!isActive) {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval)
  // }, [isActive, seconds])

  const optionHandler = (isCorrect) => {    
    setQuestionIndex(questionIndex + 1)
    setSeconds(30)
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

  let canPlay = true

  if (!canPlay) {
    return (
      <AuthPage>
        <div>
          <h2>Too Soon</h2>
          <p>You need to rest for a few more hours before coming</p>
        </div>
      </AuthPage>
    )
  }

  return (
    <QuizPage>
      {showScore ? (
        <ScoreView
          resetTimer={resetTimer}
          user={user}
          score={score}
          setIsActive={setIsActive}
          restart={resetScore}
        />
      ) : oldUser
          ? (
            <OldUser
              setRegister={setRegister}
              // transitQuiz={transitQuiz}
              beginQuiz={beginQuiz}
              loginOrRegister={loginOrRegister}
              // setOldUser={setOldUser}
              setUser={setUser}
            />
          ) : register
            ? <AddUser
              // transitQuiz={transitQuiz}
              beginQuiz={beginQuiz}
              user={user}
              setUser={setUser}
              setOldUser={setOldUser}
              setRegister={setRegister}
              loginOrRegister={loginOrRegister}
            />
            : (
              <QuizBox>
                <div className="quiz-title">
                  <p>{user.firstName  || "Guest"}</p>
                  <p className="bold">
                    {attempt}/{limit} Questions
                  </p>
                </div>
                <div className="row">
                  <p>
                    SCORE: <span className="bold">{score}</span>
                  </p>
                  {/* <p>6 ANSWERS LEFT</p> */}
                  <p className="bold">{seconds}s Remaining</p>
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
