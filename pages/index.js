import { useState } from "react";
import styled from "styled-components";
import Button from "../src/components/Button/Button";
import Header from "../src/components/Header/Header";
import Game from "./game";

export default function Home() {
  const [gameState, setGameState] = useState(false);
  const [category, setCategory] = useState(false);
  const [introduction, setIntroduction] = useState(false);

  console.log(
    "gameState => ",
    gameState,
    "category => ",
    category,
    "introduction => ",
    introduction
  );

  function clickHandler(input) {
    switch (input) {
      case "startGame":
        setGameState(true);
        setCategory(false);
        setIntroduction(false);
        break;
      case "chooseCategory":
        setGameState(false);
        setCategory(true);
        setIntroduction(false);
        break;
      case "readIntroduction":
        setGameState(false);
        setCategory(false);
        setIntroduction(true);
        break;
      default:
        break;
    }
    return;
  }

  return (
    <>
      {gameState ? (
        <Game setGameState={setGameState} />
      ) : (
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
      )}
    </>
  );
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
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
