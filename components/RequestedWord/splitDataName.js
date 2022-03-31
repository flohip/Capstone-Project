export default function splitDataName(data, num) {
  const cityData = data;

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
