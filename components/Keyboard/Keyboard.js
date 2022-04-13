import styled from "styled-components";
import Key from "./Key";
import EnterButton from "./EnterButton";
import { useEffect, useState } from "react";

export default function Keyboard({
  submittedGuess,
  setSubmittedGuess,
  keyState,
  keyName,
  keyboardKeys,
  setkeyboardKeys,
  currentKey,
  setCurrentKey,
  enterKey,
  setEnterKey,
}) {
  const [currentStyle, setCurrentStyle] = useState({
    backgroundColor: "var(--fontColor)",
  });
  const [isDisabled, setIsDisabled] = useState(true);

  // useEffect triggers when valid letter was pressed on the physical keyboard
  // sets state of the key => inactive, active, correct, wrong
  useEffect(() => {
    if (currentKey !== "") {
      handleClick(currentKey, keyboardKeys, setkeyboardKeys, keyState, keyName);
    }
  }, [currentKey]);

  // useEffect triggers when the enter key was pressed on the physical keyboard
  //sets submittedGuess to the "active" key
  useEffect(() => {
    if (enterKey === true) {
      setSubmittedGuess(getActiveKey(keyboardKeys));
      setEnterKey(false);
      setCurrentKey("");
    } else {
      return;
    }
  }, [enterKey]);
  console.log(keyboardKeys);
  return (
    <>
      <StyledKeyboard>
        {keyboardKeys.map(({ name, state }) => {
          const [currentStyle, isDisabled] = checkState(state);
          {
            console.log(" => ", currentStyle);
            console.log(" => ", isDisabled);
          }
          return (
            <Key
              onClick={() => {
                handleClick(
                  name,
                  keyboardKeys,
                  setkeyboardKeys,
                  keyState,
                  keyName
                );
              }}
              key={name}
              name={name}
              currentStyle={currentStyle}
              isDisabled={isDisabled}
            />
          );
        })}
      </StyledKeyboard>
      <EnterButton
        //sets submittedGuess to the "active" key, when the EnterButton was pressed
        onSubmitGuess={() => setSubmittedGuess(getActiveKey(keyboardKeys))}
      />
    </>
  );
}
//checks keyboardkeys for the only "active" one and returns it
function getActiveKey(keys) {
  let activeKey = null;
  keys.filter((key) => {
    if (key.state === "active") {
      activeKey = key;
    }
  });
  if (activeKey !== null) {
    return activeKey;
  } else {
    activeKey = { name: "", state: "inactive" };
    return activeKey;
  }
}
// sets the coloring of the keyboard, when click / input is recognized
function handleClick(name, keyboardKeys, setkeyboardKeys, keyState, keyName) {
  setkeyboardKeys(
    keyboardKeys.map((key) => {
      if (key.state === "active") {
        key.state = "inactive";
      }
      if (keyState === "correct" && key.name === keyName) {
        return { ...key, state: "correct" };
      }
      if (keyState === "wrong" && key.name === keyName) {
        return { ...key, state: "wrong" };
      }
      if (key.name === name) {
        return { ...key, state: "active" };
      } else {
        return key;
      }
    })
  );
}
// returns the currentStyle and if the button is disabled
// Each Button has different states
// "inactive", "active", "correct", "wrong"
function checkState(state) {
  let currentStyle;
  let isDisabled;
  if (state === "inactive") {
    currentStyle = { backgroundColor: "var(--fontColor)" };
    isDisabled = false;
  } else if (state === "active") {
    currentStyle = { backgroundColor: "blue", color: "white" };
    isDisabled = false;
  }
  if (state === "correct") {
    currentStyle = { backgroundColor: "green", color: "white" };
    isDisabled = true;
  }
  if (state === "wrong") {
    currentStyle = { backgroundColor: "grey", color: "white" };
    isDisabled = true;
  }

  return [currentStyle, isDisabled];
}

const StyledKeyboard = styled.div`
  padding: 1rem;
  width: 100%;
  display: grid;
  justify-content: center;

  @media (min-width: 600px) {
    grid-template-columns: repeat(11, 50px);
    grid-template-rows: repeat(3, 60px);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(11, 30px);
    grid-template-rows: repeat(3, 36px);
  }
`;

export const initialState = [
  { name: "Q", state: "inactive" },
  { name: "W", state: "inactive" },
  { name: "E", state: "inactive" },
  { name: "R", state: "inactive" },
  { name: "T", state: "inactive" },
  { name: "Z", state: "inactive" },
  { name: "U", state: "inactive" },
  { name: "I", state: "inactive" },
  { name: "O", state: "inactive" },
  { name: "P", state: "inactive" },
  { name: "Ü", state: "inactive" },
  { name: "A", state: "inactive" },
  { name: "S", state: "inactive" },
  { name: "D", state: "inactive" },
  { name: "F", state: "inactive" },
  { name: "G", state: "inactive" },
  { name: "H", state: "inactive" },
  { name: "J", state: "inactive" },
  { name: "K", state: "inactive" },
  { name: "L", state: "inactive" },
  { name: "Ö", state: "inactive" },
  { name: "Ä", state: "inactive" },
  { name: "Y", state: "inactive" },
  { name: "X", state: "inactive" },
  { name: "C", state: "inactive" },
  { name: "V", state: "inactive" },
  { name: "B", state: "inactive" },
  { name: "N", state: "inactive" },
  { name: "M", state: "inactive" },
];
