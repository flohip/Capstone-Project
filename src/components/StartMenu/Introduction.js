import styled from "styled-components";
import Button from "../Button/Button";

export default function Introduction({ setIntroductionState }) {
  return (
    <>
      <StyledIntroduction>
        <StyledContainer>
          <p>
            In{" "}
            <span
              style={{
                color: "hotpink",
                textDecoration: "underline",
                textUnderlineOffset: "1px",
                letterSpacing: "1px",
              }}
            >
              Worducation
            </span>{" "}
            werden Wörter zu verschiedenen Themen, durch tippen einzelner
            Buchstaben erraten.
          </p>
          <p>
            Für jeden richtig getippten
            <br />
            <span
              style={{
                color: "rgb(0,222,0)",
                textDecoration: "underline",
                textUnderlineOffset: "1px",
                letterSpacing: "1px",
              }}
            >
              grünen Buchstaben
            </span>
            <br />
            erhält der Spielende Sekunden auf die herunterlaufende Uhr, wenn das
            komplette Wort erraten wurde.
          </p>
          <p>
            Für jeden falsch geratenen
            <br />
            <span
              style={{
                color: "rgb(222,222,222)",
                textDecoration: "underline",
                textUnderlineOffset: "1px",
                letterSpacing: "1px",
              }}
            >
              grauen Buchstaben
            </span>
            <br />
            wird Zeit abgezogen.
          </p>
          <p>
            Das Ziel ist es, sämtliche Wörter einer Kategorie innerhalb des
            gegebenen Zeitlimits zu erraten.
          </p>
        </StyledContainer>
        <Button
          onClick={() => setIntroductionState(false)}
          content={"Zum Hauptmenü"}
        />
      </StyledIntroduction>
    </>
  );
}

<a
  href="https://github.com/flohip/capstone-project"
  rel="noreferrer"
  target="_blank"
>
  Capstone-Project!
</a>;

const StyledIntroduction = styled.section`
  padding: 1rem;
  min-height: 100vh;
  max-width: 1100px;
  color: var(--fontColor);
  font-size: 1rem;
  margin: 1rem;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 100px;
  justify-items: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  font-size: 1rem;
  color: var(--fontColor);

  font-weight: 400;
  word-spacing: 1px;
  > p {
    /* margin: 1rem 0 1rem 0; */
  }
`;
