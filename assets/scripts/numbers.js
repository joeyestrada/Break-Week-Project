const axios = require("axios");
const BASE_URL = "http://numbersapi.com";

function triviaGet(number) {
  return axios.get(`${BASE_URL}/${number}`).then((response) => {
    return response.data
  });
}

triviaGet(5).then(console.log);