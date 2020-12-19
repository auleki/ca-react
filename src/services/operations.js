import axios from 'axios';

// const axios = require('axios');
const GOLDEN = process.env.REACT_APP_PS_SK

export const returnToken = token => `Bearer ${token}`

const currentToken = returnToken(GOLDEN)

// const baseUrl =  'https://afternoon-chamber-08446.herokuapp.com/api/orders';
const baseUrl =  process.env.REACT_APP_BASE_URL

const config = {
  headers: { Authorization: currentToken }
}

 export const saveOrder = async (order) => {
   try {
     const res = await axios.post(`${baseUrl}/api/orders`, order, config)
     return res.data 
   } catch (error) {
     console.log('Could not save order')
   }
 }
