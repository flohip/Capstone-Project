export default function checkTime(keyboardKeys) {
  // multiplier e.g. "2" gives twice as much seconds per "correct" word
  let multiplier = 1;

  const correct = keyboardKeys.filter((key) => {
    return key.state === "correct";
  });
  const wrong = keyboardKeys.filter((key) => {
    return key.state === "wrong";
  });

  let returnValue = multiplier * correct.length - wrong.length;
  return returnValue;
}
