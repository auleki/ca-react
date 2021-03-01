import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import {
	QuizPage,
	QuizBox,
	// Form,
	questionList,
	Input,
	// QuizInput,
	// AuthForm,
	// ParentContainer,
	SubTitle,
	Title,
	AuthPage,
	FButton
} from '../StyledComponents';
import {
	// addSubscriber,
	saveQuizWinner,
	fetchUser,
	// saveOrder,
	updateUser,
	saveQuizUser
} from '../../services/operations';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { addSubscriber } from "../../services/operations";
// import { CodeSharp } from "@material-ui/icons";

const ScoreView = ({ score, restart, user, resetTimer, setIsActive }) => {
	useEffect(() => {
		console.log('Loaded User: ', user);

		const saveScore = async () => {
			if (score === 10) {
				const winnerResponse = await saveQuizWinner(user);
				console.log(`${user.username} is a champion!`, winnerResponse);
			}
			// console.table(`User is being updated with ${score}...`)
			const scoreData = {
				updateData: { scores: score },
				action: 'UPDATE_SCORE'
			};
			const response = await updateUser(scoreData, user.username);
			console.table('Response', response);
		};

		saveScore();

		// setIsActive(false)

		// resetTimer();
	}, []);

	return (
		<QuizBox>
			<div className="score-title">
				{/* <Link to="/"> */}
				<FButton className="rotate-180">
					<HelpIcon />
				</FButton>
				{/* </Link> */}
				<p>
					{user.firstName || 'Guest'} {user.lastName}
				</p>
			</div>
			<div className="score-display">
				<h2>Score</h2>
				<h3>{score || 9}</h3>
				<Link to="/">
					<FButton>
						<span className="span_icon rotate-180">
							<ExitToAppIcon />
						</span>
						<span className="span_text">Exit Quiz</span>
					</FButton>
				</Link>
			</div>
		</QuizBox>
	);
};

/* 
SIGN UP PAGE 
*/

const AddUser = ({ beginQuiz, setUser, user, loginOrRegister, setOldUser, setRegister }) => {
	const [ email, setEmail ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ joinMailingList, setJoinMailingList ] = useState(true);
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const onEmailInput = (e) => {
		setEmail(e.target.value);
	};

	const onUsernameInput = (e) => {
		setUsername(e.target.value);
	};

	const onLastName = (e) => {
		setLastName(e.target.value);
	};

	const onFirstName = (e) => {
		setFirstName(e.target.value);
	};

	const errorAlert = (msg, type) => {
		switch (type) {
			case 'info':
				return toast.info(msg);
			case 'error':
				return toast.error(msg);
			default:
				return toast.done(msg);
		}
	};

	const saveUser = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			console.log(`User of email: ${email} saved 🎉`);
			const quizUser = {
				firstName,
				lastName,
				username,
				email,
				toSubscribe: joinMailingList,
				scores: []
			};

			if (quizUser.toSubscribe) {
				// console.log('Saving' + quizUser.email + " to subscriber's list");
				const subscriber = { firstName, lastName, email }
				const savedSubscriber = await addSubscriber(subscriber)
				console.log("IS SAVING SUBSCRIBER:", savedSubscriber)
				
			}

			//! Check if email exists
			// const emailExists = await fetchUser(email)
			// console.log("Value of emailExists:", emailExists)
			// if (emailExists) {
			//   throw new Error("Email already exists, try a new one")
			// }

			console.table(quizUser);
			const savedUser = await saveQuizUser(quizUser);
			console.table('SAVED USER:', savedUser);
			if (savedUser.name === "MongoError" && savedUser.code === 11000) {
				throw new Error('Email or Username already exists, try to login')
			}
				
			setUser(quizUser);
			setOldUser(false);
			setRegister(false);

			// beginQuiz();
			// setOldUser(false)
			// setRegister(false)
		} catch (error) {
			// console.info('thrown into error block', error)

			// figure out why toast is not working			
			// errorAlert(error, "error")
			alert(error)
			setOldUser(true);
			setRegister(false);
		}
	};

	const handleMailingList = (e) => setJoinMailingList(!joinMailingList);

	return (
		// <QuizPage>
		//   <QuizBox>
		<AuthPage>
			<ToastContainer position="bottom-center" />
			<div className="start-game register">
				<div className="form_header">
					<SubTitle size={2} bold>
						We need to know you,
					</SubTitle>
					<SubTitle fontColor="#999999">
						Fill the form to start the quiz
					</SubTitle>
				</div>
				<form onSubmit={saveUser}>
					<Input
						autoFocus
						type="text"
						placeholder="First Name"
						onChange={onFirstName}
						value={firstName}
						autoComplete
						required
					/>
					<Input type="text" autoComplete placeholder="Last Name" onChange={onLastName} value={lastName} required />
					<Input type="text" autoComplete placeholder="Username" onChange={onUsernameInput} value={username} required />
					<Input type="text" autoComplete placeholder="@" onChange={onEmailInput} value={email} required />
					<div className="quiz_actions">
						<FormControlLabel
							control={
								<Checkbox checked={joinMailingList} name="mailingList" onChange={handleMailingList} />
							}
							label="Join Our Mailing List"
						/>
						<Link className="link" onClick={() => loginOrRegister('login')}>
							You played before? Login
						</Link>
					</div>

					<FButton primary type="submit">
						{loading ? <CircularProgress size={23} color="inherit" /> : 'Start Quiz'}
					</FButton>

					{/* <FButton primary>
          Start Quiz
        </FButton> */}
				</form>
			</div>
		</AuthPage>
	);
};

/* 
LOGIN PAGE 
*/
const OldUser = ({ loginOrRegister, setUser, setOldUser, setRegister, user, setCanPlay, canPlay }) => {
	const [ email, setEmail ] = useState('');
	const [ loading, setLoading ] = useState(false);
	const onUserInput = (e) => setEmail(e.target.value);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const errorAlert = (msg, type) => {
		switch (type) {
			case 'info':
				return toast.info(msg);
			case 'error':
				return toast.error(msg);
			default:
				return toast.done(msg);
		}
	};

	const findDayDifference = (date) => {
		let currentDate = new Date();
		console.log('Current Date: ', typeof currentDate.getTime(), currentDate);
		// let lastPlayed = Number(date);
		// let lastPlayed = Number(date);
		let lastPlayed = new Date(date);
		console.log('Last Date: ', typeof lastPlayed, lastPlayed);
		let differenceInTime = currentDate.getTime() - lastPlayed;
		let differenceInDays = differenceInTime / (1000 * 3600 * 24);
		console.log('DAY DIFFERENCE: ', differenceInDays);
		if (differenceInDays < 1) {
			return false;
		}
		return true;
	};

	const loginUser = async (e) => {
		console.log('Tapping Login');
		try {
			e.preventDefault();
			setLoading(true);
			const fetchedUser = await fetchUser(email);
			console.log('FETCHED USER:', fetchedUser);
			setUser(fetchedUser);
			const userCanPlay = findDayDifference(fetchedUser.lastPlayed);
			// ? update lastPlayed
			// setOldUser(false)
			// setRegister(false)
			if (userCanPlay) {
				setCanPlay(true);
				const lastPlayedUpdate = {
					updateData: { lastPlayed: new Date() },
					action: 'UPDATE_LASTPLAYED'
				};
				const lastPlayedResponse = await updateUser(lastPlayedUpdate, fetchedUser.username);
				console.log('LAST PLAYED RESPONSE', lastPlayedResponse);
				setOldUser(false);
				setRegister(false);
			} else {
				setCanPlay(false);
			}

			// userCanPlay ? setCanPlay(true) : setCanPlay(false)
			//! CAUSED A MEMORY LEAK
			// setLoading(false);
		} catch (error) {
			// console.error("Source_one:", error)
			errorAlert(`${email} is not registered with us`, 'error');
			setLoading(false);
		}
	};

	// const toastOptions = {
	// 	position:
	// }

	return (
		// <QuizPage>
		//   <QuizBox>
		<AuthPage>
			<div className="start-game login">
				<ToastContainer position="bottom-center" />
				<form onSubmit={loginUser}>
					<div className="form_header">
						<SubTitle size={2} >
							Welcome back,
						</SubTitle>
						<SubTitle fontColor="#999999">Enter your username to start the quiz</SubTitle>
					</div>

					{/* padding added in css !styled-comp */}
					<div className="mobile_raise">
						<Input autoFocus type="text" placeholder="@" onChange={onUserInput} value={email} required />
						<div className="quiz_actions">
							<Link className="link" onClick={() => loginOrRegister('register')}>
								First time playing? Register
							</Link>
						</div>
						<FButton primary>
							{loading ? <CircularProgress size={23} color="inherit" /> : 'Start Quiz'}
						</FButton>
					</div>
				</form>
			</div>
		</AuthPage>
		//   </QuizBox>
		// </QuizPage>
	);
};

const Quiz = () => {
	const [ questions, setQuestions ] = useState(questionList);
	// const [ questionsSet, setQuestionsSet ] = useState([]);
	// const randomNumber = Math.floor(Math.random() * questions.length)
	const [ score, setScore ] = useState(0);
	const [ currentQuestion, setCurrentQuestion ] = useState(1);
	const [ showScore, setShowScore ] = useState(false);
	const [ limit, setLimit ] = useState(10);
	const [ attempt, setAttempt ] = useState(1);
	const [ user, setUser ] = useState('');
	const [ oldUser, setOldUser ] = useState(false);
	const [ register, setRegister ] = useState(true);
	const [ isActive, setIsActive ] = useState(false);
	const [ seconds, setSeconds ] = useState(30);
	const [ canPlay, setCanPlay ] = useState(true);
	const [ questionIndex, setQuestionIndex ] = useState(0);
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
		// setOldUser(false);
		// setRegister(false);
		// console.log('starting quiz...')
		let interval;
		// start timer here
		if (isActive) {
			interval = setInterval(() => {
				setSeconds((seconds) => seconds - 1);
			}, 1000);
		} else if (!isActive) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	};

	useEffect(() => {
		beginQuiz();
	}, []);

	// const transitQuiz = () => {
	// 	setOldUser(false);
	// 	setRegister(false);
	// };

	useEffect(() => {
		shuffleQuestions(questionList);
		resetTimer();
	}, []);

	const loginOrRegister = (mode) => {
		if (mode === 'login') {
			setOldUser(true);
			setRegister(false);
		} else if (mode === 'register') {
			setOldUser(false);
			setRegister(true);
		}
	};

	const toggle = () => {
		console.log('Back to timer');
		setIsActive(true);
	};

	const resetTimer = () => {
		console.log('resetting timer...');
		setSeconds(30);
		setIsActive(!isActive);
	};

	// console.log('Before Effect:', seconds)

	useEffect(() => {
		const isTimeUp = () => {
			toggle();
			if (seconds === -1) {
				optionHandler();
			}
		};
		isTimeUp();
	}, []);
	// console.log("Function for Last Played")
	// canPlay(user.lastPlayed)

	// useEffect(() => {
	//   console.log("Function for Last Played")
	//   canPlay(user.lastPlayed)
	// }, [])

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
		setQuestionIndex(questionIndex + 1);
		setSeconds(30);
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

	// let canPlay = true

	if (!canPlay) {
		return (
			<QuizPage>
			<QuizBox>
				<div className="score-title center">
					{/* <Link to="/"> */}
					{/* <FButton className="rotate-180">
						<HelpIcon />
					</FButton> */}
					{/* </Link> */}
					<SubTitle  center>
						{user.firstName || 'Guest'} {user.lastName}{' '}
					</SubTitle>
				</div>
				<div className="score-display">
					<div className="text_box">
						<SubTitle size={1.5}>You have exhausted your tries for the day</SubTitle>
						<SubTitle bold={500}>Come back in 24 hours</SubTitle>
					</div>
					{/* <h3>{score || 9}</h3> */}
					<Link to="/">
						<FButton>
							<span className="span_icon rotate-180">
								<ExitToAppIcon />
							</span>{' '}
							<span className="span_text">Exit Quiz</span>
						</FButton>
					</Link>
				</div>
			</QuizBox>
			</QuizPage>
		);
	}

	return (
		<QuizPage>
			{showScore ? (
				<ScoreView
					resetTimer={resetTimer}
					user={user}
					beginQuiz={beginQuiz}
					score={score}
					setIsActive={setIsActive}
					restart={resetScore}
				/>
			) : oldUser ? (
				<OldUser
					setRegister={setRegister}
					user={user}
					canPlay={canPlay}
					setCanPlay={setCanPlay}
					beginQuiz={beginQuiz}
					loginOrRegister={loginOrRegister}
					setOldUser={setOldUser}
					setUser={setUser}
				/>
			) : register ? (
				<AddUser
					// transitQuiz={transitQuiz}
					beginQuiz={beginQuiz}
					user={user}
					setUser={setUser}
					setOldUser={setOldUser}
					setRegister={setRegister}
					loginOrRegister={loginOrRegister}
				/>
			) : (
				<QuizBox>
					<div className="quiz-title">
						<p>{user.firstName || 'Guest'}</p>
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
							<button key={i} className="button" onClick={() => optionHandler(option.isCorrect)}>
								{option.answerText}
								{option.isCorrect ? ' R' : ''}
							</button>
						))}
					</div>
				</QuizBox>
			)}
		</QuizPage>
	);
};

export default Quiz;
