export function checkGuess(word, key, oldGuess) {
  if (key === null || key === undefined) {
    return;
  } else {
    const guess = key.name;
    let returnValue = [];
    let keyState = "active";

    for (let i = 0; i < word.length; i++) {
      if (guess === word[i] || oldGuess[i]) {
        returnValue.push(true);
        keyState = "correct";
      } else {
        returnValue.push(false);
        keyState = "wrong";
      }
    }
    return returnValue;
  }
}
