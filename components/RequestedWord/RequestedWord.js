import styled from "styled-components";
import splitCityName from "../data/splitCityName";

export default function RequestedWord() {
  // splitCityName();
  return (
    <Container>
      {/* {listOfCities.map((letter) => (
        <StyledLi key={letter}>{letter}</StyledLi>
      ))} */}
    </Container>
  );
}

const Container = styled.div`
  width: fit-content;
  max-width: 80vw;
  padding: 0.3rem;
  background-color: red;
  color: white;
`;
const StyledLi = styled.li`
  width: fit-content;
  max-width: 80vw;
  padding: 1rem;
  gap: 0.3rem;
  background-color: green;
  color: white;
  list-style-type: none;

  :nth-child(2) {
    background-color: yellow;
    color: black;
  }
`;
