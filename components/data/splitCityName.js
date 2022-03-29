import { cityData } from "./cityData.json";

console.log(cityData);

//one random number (index) is chosen
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(3));
//the chosen item is mapped, so all letters are split up and saved in an array
export default function splitCityName() {
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
