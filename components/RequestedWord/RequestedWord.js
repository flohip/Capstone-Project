import styled from "styled-components";
import { cityData } from "../data/cityData";

export default function RequestedWord() {
  let listOfCities = cityData.map(({ cityName, cityCategory }) => {
    let letters = [];
    for (var i = 0; i < cityName.length; i++) {
      letters.push(cityName[i]);
    }
    return letters;
  });
  console.log(listOfCities);
  return (
    <Container>
      {listOfCities.map((letter) => (
        <StyledLi key={letter}>{letter}</StyledLi>
      ))}
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

  :nth-child(2) {
    background-color: yellow;
    color: black;
  }
`;
