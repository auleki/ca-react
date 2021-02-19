import axios from 'axios';

const GOLDEN = process.env.REACT_APP_PS_SK

export const returnToken = token => `Bearer ${token}`

const currentToken = returnToken(GOLDEN)
const baseUrl = `${process.env.REACT_APP_BASE_URL}/api`
const localUrl = `http://localhost:6500/api`

const config = {
  headers: { Authorization: currentToken }
}

export const saveOrder = async (order) => {
  try {
    const res = await axios.post(`${baseUrl}/orders`, order, config)
    return res.data
  } catch (error) {
    console.log('Could not save order')
  }
}

export const saveQuizUser = async (user) => {
  try {
    const res = await axios.post(`${baseUrl}/users`, user, config)
    // const 
    return res.data
  } catch (e) {
    console.error('Could not save quiz user')
  }
}

export const addSubcriber = async (subscriber) => {
  try {
    const res = await axios.post(`${baseUrl}/subscribers`, subscriber, config)
    return res.data
  } catch (e) {
    throw new Error('Subscriber not saved', e)
  }
}

export const saveQuizWinner = async (winner) => {
  try {
    const savedWinner = await axios.post(`${baseUrl}/winners`, winner, config)
    return savedWinner.data
  } catch (error) {
    throw new Error('Winner not saved', error)
  }
}

export const fetchUser = async (email) => {
  try {
    // const { data } = await axios.get(`${baseUrl}/${email}`)
    console.log(email)
    const { data } = await axios.get(`${baseUrl}/users/${email}`)
    return data
  } catch (error) {
    throw new Error('User not found', error)
  }
}

export const saveUserScore = async (score, username) => {
  try {
    console.log("SCORE IN OPS:", score)
    const { data } = await axios.patch(`${localUrl}/users/${username}`, { scores: score }, config)
    return data   
  } catch (error) {
    console.error(error)
  }
}