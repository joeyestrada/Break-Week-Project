const axios = require("axios");
const BASE_URL = "https://api.genius.com/search?q=";
const token =
  "tCshVogsW6fQdh79KpVLchL_Btc4ikvZA64d7Ok3Uy7RGGIOvj3b-lpReBo9eNpt";

function searchGenius(keyword) {
  return axios.get(`${BASE_URL}${word}&access_token=${token}`).then((response) => {
    console.log(response.data.response.hits[0].result.full_title);
  });
}