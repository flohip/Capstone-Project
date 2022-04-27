import styled from "styled-components";
import Button from "../Button/Button";

export default function DataCategory({
  setGameState,
  setCategoryState,
  setCategory,
}) {
  function clickHandler(input) {
    if (input) {
      setGameState(true);
      setCategoryState(false);
      setCategory(input);
    }
  }

  return (
    <StyledContainer>
      <Button
        onClick={() => clickHandler("cityDataGermany")}
        content={"Städte in Deutschland"}
      />
      <Button
        onClick={() => clickHandler("countryDataEurope")}
        content={"Länder in Europa"}
      />
      <Button
        onClick={() => clickHandler("animalDataWorldwide")}
        content={"Tiere der Welt"}
      />
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border: dotted 5px var(--backgroundColor);
`;
