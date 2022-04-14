import styled from "styled-components";
import Key from "./Key";
import EnterButton from "./EnterButton";
import { useEffect, useState } from "react";

export default function Keyboard({
  submittedGuess,
  setSubmittedGuess,
  keyState,
  setKeystate,
  keyName,
  setKeyName,
  keyboardKeys,
  setkeyboardKeys,
  currentKey,
  setCurrentKey,
  enterKey,
  setEnterKey,
}) {
  // useEffect triggers when valid letter was pressed on the physical keyboard
  // sets state of the key => inactive, active, correct, wrong
  useEffect(() => {
    if (currentKey !== "") {
      keyboardKeys.map((key) => {
        if (key.name === currentKey) {
          clickHandler(currentKey);
        }
      });
    }
  }, [currentKey]);

  // useEffect triggers when the enter key was pressed on the physical keyboard
  //sets submittedGuess to the "active" key
  useEffect(() => {
    if (enterKey === true) {
      submitHandler();
    } else {
      return;
    }
  }, [enterKey]);

  //checks the submitted guess to be "correct" or "wrong"
  //and colors it, depending on the state
  useEffect(() => {
    handleSubmit(keyboardKeys, setkeyboardKeys, keyState, keyName);
  }, [keyState]);

  function clickHandler(name) {
    handleClick(name, keyboardKeys, setkeyboardKeys, keyState, keyName);
  }
  function submitHandler() {
    setSubmittedGuess(getActiveKey(keyboardKeys));
    setEnterKey(false);
    setCurrentKey("");
    setKeystate("");
    setKeyName("");
  }
  return (
    <>
      <StyledKeyboard>
        {keyboardKeys.map(({ name, state }) => {
          return (
            <Key
              onClick={() => {
                clickHandler(name);
              }}
              key={name}
              name={name}
              state={state}
            />
          );
        })}
      </StyledKeyboard>
      <EnterButton
        //sets submittedGuess to the "active" key, when the EnterButton was pressed
        onSubmitGuess={submitHandler}
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
      if (key.name === name) {
        return { ...key, state: "active" };
      } else {
        return key;
      }
    })
  );
}
function handleSubmit(keyboardKeys, setkeyboardKeys, keyState, keyName) {
  setkeyboardKeys(
    keyboardKeys.map((key) => {
      if (keyState === "correct" && key.name === keyName) {
        return { ...key, state: "correct" };
      } else if (keyState === "wrong" && key.name === keyName) {
        return { ...key, state: "wrong" };
      } else {
        return key;
      }
    })
  );
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
