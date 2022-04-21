/* requirements */
const keyword_extractor = require("keyword-extractor");
const axios = require("axios");
/* URLs */
const NUM_URL = "http://numbersapi.com";
const GENIUS_URL = "https://api.genius.com/search?q=";
const token =
  "tCshVogsW6fQdh79KpVLchL_Btc4ikvZA64d7Ok3Uy7RGGIOvj3b-lpReBo9eNpt";

/* functions */  

//Get trivia based on number
function triviaGet(number) {
  return axios.get(`${NUM_URL}/${number}`).then((response) => {
    return response.data;
  });
}

const triviaInput = triviaGet(number);

//Extract keyword from trivia
const extraction_result = keyword_extractor.extract(triviaInput, {
  language: "english",
  remove_digits: true,
  return_changed_case: false,
  remove_duplicates: true,
});

const keyword = extraction_result[0];

//Find song from trivia
function searchGenius(keyword) {
  return axios
    .get(`${GENIUS_URL}${word}&access_token=${token}`)
    .then((response) => {
      console.log(response.data.response.hits[0].result.full_title);
    });
}

//Display connection between number and song
function displayExplainer(keyword, songName){
    return `Based on the word ${keyword}, we found you this song: ${songName}`
}