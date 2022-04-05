export function checkGuess(word, key) {
  console.log("word:", word, "key:", key);
  if (key === null || key === undefined) {
    return;
  } else {
    const guess = key.name;
    let returnValue = [];
    for (let i = 0; i < word.length; i++) {
      if (guess === word[i]) {
        returnValue.push(true);
      } else {
        returnValue.push(false);
      }
    }
    return returnValue;
  }
  return;
}
