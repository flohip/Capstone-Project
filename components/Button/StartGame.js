import styled from "styled-components";
export default function StartGame({ setGameStarted, wonGame, setWonGame }) {
  function startTheGame() {
    setGameStarted(true);
    setWonGame(false);
  }
  return wonGame ? (
    <>
      <StyledHeader>
        Du hast das Wort erraten!!! Hier sind ein paar Gummibärchen als
        Belohnung...
      </StyledHeader>
      <StyledStartButton onClick={startTheGame}>
        Nächstes Spiel
      </StyledStartButton>
    </>
  ) : (
    <>
      <StyledHeader>
        Mal sehen wie dein Wissen über <strong>deutsche Großstädte</strong>{" "}
        ist...
      </StyledHeader>
      <StyledStartButton onClick={startTheGame}>
        Spiel starten
      </StyledStartButton>
    </>
  );
}
const StyledStartButton = styled.button`
  margin: 2rem;
  width: 50vw;
  height: 10vw;
  border-radius: 10px;
  font-size: 2rem;

  background-color: rgb(0, 170, 0);
`;
const StyledHeader = styled.h1`
  margin: 2rem;
  border-radius: 10px;
  font-size: 2rem;
  color: var(--fontColor);
  text-shadow: -1px 0 black;
`;
