import { useState } from "react";
import styled from "styled-components";
import Button from "../src/components/Button/Button";
import DataCategory from "../src/components/StartMenu/DataCategory";
import Header from "../src/components/Header/Header";
import Game from "./game";
import Introduction from "../src/components/StartMenu/Introduction";

export default function Home() {
  const [gameState, setGameState] = useState(false);
  const [categoryState, setCategoryState] = useState(false);
  const [category, setCategory] = useState(false);
  const [introductionState, setIntroductionState] = useState(false);

  console.log(category);

  console.log(
    "gameState => ",
    gameState,
    "categoryState => ",
    categoryState,
    "introductionState => ",
    introductionState
  );

  function clickHandler(input) {
    switch (input) {
      case "startGame":
        setGameState(true);
        setCategoryState(false);
        setIntroductionState(false);
        break;
      case "chooseCategory":
        setGameState(false);
        setCategoryState(true);
        setIntroductionState(false);
        break;
      case "readIntroduction":
        setGameState(false);
        setCategoryState(false);
        setIntroductionState(true);
        break;
      default:
        break;
    }
    return;
  }
  if (gameState) {
    return (
      <>
        <Game setGameState={setGameState} />;
      </>
    );
  } else if (categoryState) {
    return (
      <>
        <Header />
        <ContentWrapper>
          <StyledInfo>
            <DataCategory
              setCategoryState={setCategoryState}
              setCategory={setCategory}
            />
          </StyledInfo>
        </ContentWrapper>
      </>
    );
  } else if (introductionState) {
    return (
      <>
        <ContentWrapper>
          <Introduction setIntroductionState={setIntroductionState} />
        </ContentWrapper>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <ContentWrapper>
          <StyledInfo>
            <Button
              onClick={() => clickHandler("startGame")}
              content={"Neues Spiel"}
            />
            <Button
              onClick={() => clickHandler("chooseCategory")}
              content={"Kategorien"}
            />
            <Button
              onClick={() => clickHandler("readIntroduction")}
              content={"Spielanleitung"}
            />
          </StyledInfo>
        </ContentWrapper>
      </>
    );
  }
}

const StyledInfo = styled.div`
  color: var(--fontColor);
  font-size: 1rem;
  margin: 1rem;
  display: grid;
  justify-content: center;
  align-content: space-between;
`;
const ContentWrapper = styled.div`
  max-width: 1100px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
