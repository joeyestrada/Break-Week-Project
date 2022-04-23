const googleTrends = require("google-trends-api");

async function googleExp(word) {
  return await googleTrends
    .interestOverTime({ keyword: word })
    .then(function (results) {
      return JSON.parse(results).default.timelineData.map(
        (object) => object.value,
      );
    })
    .catch(function (err) {
      console.error(err);
    });
}

async function arrayOfValues(word) {
  let array = await googleExp(`${word}`);
  return array;
}

async function average(array) {
  const averages = await array;
  let total = averages.reduce((acc, number) => {
    acc += number[0];
    return acc;
  }, 0);
  return total / averages.length;
}

console.log(average(arrayOfValues("apple")));
