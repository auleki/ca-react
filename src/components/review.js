const { getClothes } = require("../api/operationsAPI")

const baseUrl =  'https://afternoon-chamber-08446.herokuapp.com/api/clothing';

console.log(getClothes(baseUrl))