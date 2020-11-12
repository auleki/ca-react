import axios from 'axios';

// const axios = require('axios');

const baseUrl =  'https://afternoon-chamber-08446.herokuapp.com/api/clothing';

const fetchClothes = async () => {
  try {
    const res = await axios.get(baseUrl)
    return res.data
  } catch (error) {
    console.log("error fetching...",error)
  }
}

// fetchClothes().then(data => console.log(data))

export default { fetchClothes }