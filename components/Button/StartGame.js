import Image from "next/image";
import gummiBearPicture from "../../images/altair-valasek-6uHnajYSsW0-unsplash.jpg";
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
      <Image
        src={gummiBearPicture}
        alt="a picture of gummi bears"
        width="200"
        height="92"
      />
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
  padding: 0.3rem;
  width: 50vw;
  min-height: 10vw;
  height: fit-content;
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

const StyledImage = styled.img`
  color: red;
`;
