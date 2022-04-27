import { useState } from "react";
import styled from "styled-components";
import Button from "../src/components/Button/Button";
import DataCategory from "../src/components/StartMenu/DataCategory";
import Header from "../src/components/Header/Header";
import Game from "./Game.js";
import Introduction from "../src/components/StartMenu/Introduction";

export default function Home() {
  const [gameState, setGameState] = useState(false);
  const [categoryState, setCategoryState] = useState(false);
  const [category, setCategory] = useState("none");
  const [introductionState, setIntroductionState] = useState(false);

  function clickHandler(input) {
    switch (input) {
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
  }
  if (gameState) {
    return (
      <StyledAppWindow>
        <Game setGameState={setGameState} category={category} />
      </StyledAppWindow>
    );
  } else if (categoryState) {
    return (
      <StyledAppWindow>
        <ContentWrapper>
          <StyledInfo>
            <DataCategory
              setGameState={setGameState}
              setCategoryState={setCategoryState}
              setCategory={setCategory}
            />
          </StyledInfo>
        </ContentWrapper>
      </StyledAppWindow>
    );
  } else if (introductionState) {
    return (
      <StyledAppWindow>
        <Header content={"capstone"} />
        <ContentWrapper>
          <Introduction setIntroductionState={setIntroductionState} />
        </ContentWrapper>
      </StyledAppWindow>
    );
  } else {
    return (
      <StyledAppWindow>
        <ContentWrapper>
          <Header content={"title"} />
          <StyledInfo>
            <Button
              onClick={() => clickHandler("chooseCategory")}
              content={"Neues Spiel"}
            />
            <Button
              onClick={() => clickHandler("readIntroduction")}
              content={"Spielanleitung"}
            />
          </StyledInfo>
        </ContentWrapper>
      </StyledAppWindow>
    );
  }
}

const StyledAppWindow = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

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
