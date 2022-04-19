export default function checkTime(keyboardKeys) {
  const correct = keyboardKeys.filter((key) => {
    return key.state === "correct";
  });
  const wrong = keyboardKeys.filter((key) => {
    return key.state === "wrong";
  });

  let returnValue = correct.length - wrong.length;
  return returnValue;
}
