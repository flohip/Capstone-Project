import styled from "styled-components";
import splitDataName from "./splitDataName.js";
import { useEffect, useState } from "react";

export default function RequestedWord({ data, num }) {
  const [requestedWord, setRequestedWord] = useState([]);
  const [isShown, setIsShown] = useState(true);

  //for test purposes
  function toggleClickHandler() {
    setIsShown(!isShown);
  }

  useEffect(() => {
    setRequestedWord(splitDataName(data, num));
  }, [data, num]);

  return (
    <>
      <StyledUl>
        {requestedWord.map((letter, index) => (
          <StyledLi key={index}>{isShown ? letter : null}</StyledLi>
        ))}
      </StyledUl>
      <ToggleButton onClick={toggleClickHandler}>
        hide / show requested word
      </ToggleButton>
    </>
  );
}

const ToggleButton = styled.button`
  height: 30px;
  width: 200px;
  border-radius: 5px;
`;

const StyledUl = styled.ul`
  width: fit-content;
  max-width: 95%;
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;
`;
const StyledLi = styled.li`
  font-size: inherit;
  @media (min-width: 600px) {
    min-height: 60px;
    min-width: 45px;
    border-radius: 6px;
  }
  @media (max-width: 600px) {
    min-height: 32px;
    min-width: 24px;
    border-radius: 4px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--fontColor);
  border: 3px solid var(--backgroundColor);

  box-shadow: 2px 2px 2px 0px black;
  list-style-type: none;
`;
