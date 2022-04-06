import { useState } from "react";
import styled from "styled-components";
import Key from "./Key";
import EnterButton from "../Button/EnterButton";

export default function Keyboard({ setSubmittedGuess, keyState, keyName }) {
  const [keyboardKeys, setkeyboardKeys] = useState(initialState);
  return (
    <>
      <StyledKeyboard>
        {keyboardKeys.map(({ name, state }) => {
          const currentStyle = checkState(state);
          return (
            <Key
              onClick={() =>
                handleClick(
                  name,
                  keyboardKeys,
                  setkeyboardKeys,
                  keyState,
                  keyName
                )
              }
              key={name}
              name={name}
              style={currentStyle}
            />
          );
        })}
      </StyledKeyboard>
      <EnterButton
        onSubmitGuess={(e) => setSubmittedGuess(getActiveKey(keyboardKeys))}
      />
    </>
  );
}

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

//Each Button has different states
// "inactive", "active", "correct", "wrong"
function checkState(state) {
  let returnState;
  if (state === "inactive") {
    returnState = { backgroundColor: "var(--fontColor)" };
  } else if (state === "active") {
    returnState = { backgroundColor: "blue", color: "white" };
  }
  if (state === "correct") {
    returnState = { backgroundColor: "green", color: "white" };
  }
  if (state === "wrong") {
    returnState = { backgroundColor: "grey" };
  }

  return returnState;
}

const StyledKeyboard = styled.div`
  padding: 1rem;
  width: 95%;
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

const initialState = [
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
