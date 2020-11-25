import axios from 'axios';

// const axios = require('axios');
const GOLDEN = 'sk_test_a3150b31e7a217d2488132a436e6df8d28dec651'

const returnToken = token => `Bearer ${token}`

const currentToken = returnToken(GOLDEN)

const baseUrl =  'https://afternoon-chamber-08446.herokuapp.com/api/clothing';
const config = {
  headers: { Authorization: currentToken }
}

 export const saveOrder = async (order) => {
   try {
     const res = await axios.post(baseUrl, order, config)
     return res.data 
   } catch (error) {
     console.log('Could not save order')
   }
 }
