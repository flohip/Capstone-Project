import data from "./cityData";
const cityData = data.Cities;
//one random number is chosen to render a new word
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const num = getRandomInt(cityData.length);
console.log(num);
//the chosen word is mapped, so all letters are split up and saved in an array
export default function splitCityName() {
  const num = getRandomInt(cityData.length);
  const splitFunction = (cityData) => {
    console.log(cityData);
    // let listOfCities = cityData.map(({ cityName }) => {
    //   let letters = [];
    //   for (var i = 0; i < cityName.length; i++) {
    //     letters.push(cityName[i]);
    //   }
    //   return letters;
    // });
  };
}
