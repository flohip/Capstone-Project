import styled from "styled-components";

export default function EnterButton({ onSubmitGuess }) {
  return <StyledButton onClick={onSubmitGuess}>Eingabe</StyledButton>;
}
const StyledButton = styled.button`
  @media (min-width: 600px) {
    width: 300px;
    height: 60px;
    border-radius: 12px;
    margin: 1.5rem;
  }
  @media (max-width: 600px) {
    width: 200px;
    height: 40px;
    border-radius: 8px;

    margin: 1rem;
  }
  background-color: var(--fontColor);
  width: inherit;
  height: inherit;
  margin: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
