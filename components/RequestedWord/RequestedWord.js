import styled from "styled-components";
import splitDataName from "./splitDataName.js";
import { useEffect, useState } from "react";

export default function RequestedWord({ data, num }) {
  const [requestedWord, setRequestedWord] = useState([]);
  const [isShown, setIsShown] = useState(true);

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
    </>
  );
}

const StyledUl = styled.ul`
  width: fit-content;
  max-width: 80vw;
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;
`;
const StyledLi = styled.li`
  font-size: inherit;
  width: fit-content;
  min-height: 60px;
  min-width: 50px;
  padding: 1rem;
  gap: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--fontColor);
  border: 3px solid var(--backgroundColor);
  box-shadow: 2px 2px 2px 0px black;
  list-style-type: none;
`;
