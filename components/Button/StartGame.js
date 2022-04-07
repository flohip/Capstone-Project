import styled from "styled-components";
export default function StartGame({ setGameStarted }) {
  function startTheGame() {
    setGameStarted(true);
  }
  return (
    <StyledStartButton onClick={startTheGame}>StartGame</StyledStartButton>
  );
}
const StyledStartButton = styled.button`
  width: 50vw;
  height: 10vw;
  border-radius: 10px;
  font-size: 2rem;
  background-color: var(--fontColor);
`;
