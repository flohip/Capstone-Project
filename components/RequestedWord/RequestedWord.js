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
  background-color: rgb(222, 222, 222);
  color: white;
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
`;
const StyledLi = styled.li`
  width: fit-content;
  max-width: 80vw;
  padding: 1rem;
  gap: 0.3rem;
  background-color: steelblue;
  color: white;
  list-style-type: none;
`;
