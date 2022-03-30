export default function splitDataName(data) {
  const cityData = data;

  //one random number is chosen to render a new word
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const num = getRandomInt(cityData.length);

  //the chosen word is mapped, so all letters are split up and saved in an array
  function splitFunction(num) {
    const city = cityData[num].name.toUpperCase();
    let letters = [];
    for (var i = 0; i < city.length; i++) {
      letters.push(city[i]);
    }
    return letters;
  }
  const wordLetters = splitFunction(num);

  return wordLetters;
}
