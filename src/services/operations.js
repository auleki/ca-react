import axios from 'axios';

// const axios = require('axios');
const GOLDEN = process.env.REACT_APP_PS_SK

export const returnToken = token => `Bearer ${token}`

const currentToken = returnToken(GOLDEN)


const baseUrl =  process.env.REACT_APP_BASE_URL
const localUrl = "http://localhost:6500/api/quiz/start"

const config = {
  headers: { Authorization: currentToken }
}

 export const saveOrder = async (order) => {
   try {
     const res = await axios.post(`${baseUrl}/api/orders`, order, config)
     return res.data 
   } catch (error) {
     throw new Error('Could not save order', error)
    //  console.log('Could not save order')
   }
 }

//  export const saveQuizUser = async (userData) => {
 export const saveQuizUser = async () => {
   try {
      // const res = await axios.post(`${baseUrl}/api/quiz/start`, userData, config)
      const userData = {
        firstName: "Barrack",
        lastName: "Obama",
        username: "barracks@eod.com"
      }

      const res = await axios.post(`${localUrl}/api/quiz/start`, userData, config)
      return res.data
   } catch (e) {
      throw new Error("Error saving user", e)
      // console.error('Could not save quiz user')
   }
 }

 export const searchForUser = async (username) => {
   try {
     const foundUser = await axios.get(`${localUrl}/${username}`)
    //  const foundUser = await axios.get(`${baseUrl}/api/quiz/start/${username}`)
    //  const foundUser = await axios.get(`${localUrl}/users`, username, config)
     return foundUser
   } catch (error) {
     throw new Error(error)
   }
 }