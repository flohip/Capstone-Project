import Image from "next/image";
import gummiBearPicture from "../../images/altair-valasek-6uHnajYSsW0-unsplash.jpg"; // 4000 x 1844 px
import fireworksPicture from "../../images/ray-hennessy-gdTxVSAE5sk-unsplash.jpg"; // 4091 x 2720 px
import styled from "styled-components";
export default function GameMenu({
  startTheGame,
  wonGame,
  guessedAllWords,
  score,
}) {
  const gummiBearWidth = 300;
  const fireworksWidth = 300;

  return guessedAllWords ? (
    <>
      <StyledHeader>
        Du hast das Spiel beendet und alle <strong>{score}</strong> Wörter
        erraten!
      </StyledHeader>
      <Image
        src={fireworksPicture}
        alt="a picture of fireworksPicture at the sea"
        width={fireworksWidth}
        height={calculateHeight(fireworksWidth, 0.6648)}
      />
      <StyledStartButton onClick={() => startTheGame(true)}>
        Neues Spiel starten
      </StyledStartButton>
    </>
  ) : wonGame ? (
    <>
      <StyledHeader>
        Du hast das Wort erraten!!! Hier sind ein paar Gummibärchen als
        Belohnung...
      </StyledHeader>
      <Image
        src={gummiBearPicture}
        alt="a picture of gummi bears"
        width={gummiBearWidth}
        height={calculateHeight(gummiBearWidth, 0.461)}
      />
      <StyledStartButton onClick={() => startTheGame(false)}>
        Nächstes Spiel
      </StyledStartButton>
    </>
  ) : (
    <>
      <StyledHeader>
        Mal sehen wie dein Wissen über <strong>deutsche Großstädte</strong>{" "}
        ist...
      </StyledHeader>

      <StyledStartButton onClick={() => startTheGame(true)}>
        Spiel starten
      </StyledStartButton>
    </>
  );
}

function calculateHeight(width, ratio) {
  let height = width * ratio;
  console.log(height);
  return height;
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
