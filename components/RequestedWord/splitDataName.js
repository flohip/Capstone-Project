export default function splitDataName(data, num) {
  //the chosen word is mapped, so all letters are split up and saved in an array
  function splitFunction() {
    const dataName = data[num].name.toUpperCase();
    let letters = [];
    for (var i = 0; i < dataName.length; i++) {
      letters.push(dataName[i]);
    }
    return letters;
  }
  const wordLetters = splitFunction();

  return wordLetters;
}
