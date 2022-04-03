import { useState } from "react";
import styled from "styled-components";

function handleClick(name, keyboardKeys, setkeyboardKeys) {
  console.log(keyboardKeys);
  setkeyboardKeys(
    keyboardKeys.map((key) => {
      if (key.name === name) {
        return { ...key, state: "active" };
      } else {
        return key;
      }
    })
  );
}
function checkState(state) {
  console.log(state);
  const returnState = state;
  if (state === "inactive") {
    returnState = { backgroundColor: "white" };
  } else if (state === "active") {
    returnState = { backgroundColor: "blue" };
  } else if (state === "correct") {
    returnState = { backgroundColor: "green" };
  } else if (state === "wrong") {
    returnState = { backgroundColor: "grey" };
  }
  return returnState;
}
//Each Button has different states
// "inactive", "active", "correct", "wrong"
export const InputFields = () => {
  const [keyboardKeys, setkeyboardKeys] = useState(initialState);
  return (
    <StyledKeyboard>
      {keyboardKeys.map(({ name, state }) => {
        let currentState;
        if (state === "inactive") {
          currentState = true;
        } else if (state === "active") {
          currentState = false;
        }

        return (
          <StyledButtons
            onClick={(e) => handleClick(name, keyboardKeys, setkeyboardKeys)}
            key={name}
            // style={() => checkState(state)}
            style={
              currentState
                ? { backgroundColor: "white" }
                : { backgroundColor: "blue", color: "white" }
            }
          >
            {name}
          </StyledButtons>
        );
      })}
    </StyledKeyboard>
  );
};

const StyledKeyboard = styled.div`
  padding: 1rem;
  width: 100%;
  display: grid;
  justify-content: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(11, 90px);
    grid-template-rows: repeat(3, 99px);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(11, 50px);
    grid-template-rows: repeat(3, 59px);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(11, 30px);
    grid-template-rows: repeat(3, 39px);
  }
`;

const StyledButtons = styled.button`
  @media (min-width: 1024px) {
    width: 90px;
    margin: 6px;
  }

  @media (max-width: 1024px) {
    width: 50px;
    margin: 4px;
  }
  @media (max-width: 600px) {
    width: 25px;
    margin: 2px;
  }

  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
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
