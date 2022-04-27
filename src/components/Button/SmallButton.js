import styled from "styled-components";

export default function SmallButton({ onClick, content }) {
  return <StyledButton onClick={onClick}>{content}</StyledButton>;
}

const StyledButton = styled.button`
  @media (min-width: 600px) {
    width: 150px;
    height: 30px;
    border-radius: 6px;
    margin: 1.5rem;
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    width: 100px;
    height: 20px;
    border-radius: 4px;
    margin: 1rem;
    font-size: 1rem;
  }
  margin: 2rem;
  padding: 0.3rem;
  height: fit-content;
  width: fit-content;
  color: black;
  cursor: pointer;
  background-color: var(--fontColor);
  border-color: var(--buttonBorderColor);

  :hover,
  :active,
  :focus {
    color: var(--fontColor);
    background-color: var(--backgroundColor);
    border-color: var(--buttonBorderColor);
    transition-duration: 300ms;
    transform: scale(1.05);
  }
`;
