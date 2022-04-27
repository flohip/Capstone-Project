export function checkGuess(word, key, oldGuesses) {
  const guess = key.name;
  let returnValue = [];
  let keyStateCorrect = "";
  let keyStateWrong = "";

  for (let i = 0; i < word.length; i++) {
    if (guess === word[i]) {
      returnValue.push(true);
      keyStateCorrect = "correct";
    } else if (" " === word[i]) {
      returnValue.push(true);
    } else if (oldGuesses[i]) {
      returnValue.push(true);
    } else {
      returnValue.push(false);
      keyStateWrong = "wrong";
    }
  }

  if (keyStateCorrect === "correct") {
    const correctArray = [];
    correctArray.push(returnValue);
    correctArray.push(keyStateCorrect);
    correctArray.push(guess);
    return correctArray;
  } else if (keyStateWrong === "wrong") {
    const wrongArray = [];
    wrongArray.push(returnValue);
    wrongArray.push(keyStateWrong);
    wrongArray.push(guess);
    return wrongArray;
  } else {
    console.error("wtf happend here? ...");
  }
}
