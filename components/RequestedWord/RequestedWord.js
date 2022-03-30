import styled from "styled-components";
import splitDataName from "../data/splitDataName.js";
import data from "../data/cityData.json";
import { useEffect, useState } from "react";

export default function RequestedWord() {
  const [requestedWord, setRequestedWord] = useState([]);
  useEffect(() => {
    setRequestedWord(splitDataName(data));
  }, []);
  console.log(requestedWord);
  return (
    <Container>
      {requestedWord.map((letter, index) => (
        <StyledLi key={index}>{letter}</StyledLi>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  width: fit-content;
  max-width: 80vw;
  padding: 0.3rem;
  color: white;
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
`;
const StyledLi = styled.li`
  font-size: inherit;
  font-size: calc(inherit * 2);
  width: fit-content;
  padding: 0.3rem;
  gap: 0.3rem;
  color: var(--fontColor);
  list-style-type: none;
  > li:hover {
    border: 0.3rem solid green;
  }
`;
