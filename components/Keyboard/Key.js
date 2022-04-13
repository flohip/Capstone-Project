import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Key({ onClick, name, state }) {
  const [currentStyle, setCurrentStyle] = useState({
    backgroundColor: "var(--fontColor)",
  });
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const [style, disabled] = checkState(state);
    setCurrentStyle(style);
    setIsDisabled(disabled);
  }, [state]);

  return (
    <StyledButtons onClick={onClick} style={currentStyle} disabled={isDisabled}>
      {name}
    </StyledButtons>
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

const StyledButtons = styled.button`
  @media (min-width: 600px) {
    width: 45px;
    border-radius: 10px;
    margin: 4px;
  }
  @media (max-width: 600px) {
    width: 27px;
    border-radius: 6px;
    margin: 2px;
  }

  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
