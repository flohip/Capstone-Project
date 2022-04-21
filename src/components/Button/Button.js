import styled from "styled-components";

export default function Button({ onClick, content }) {
  return <StyledButton onClick={onClick}>{content}</StyledButton>;
}

const StyledButton = styled.button`
  @media (min-width: 600px) {
    width: 300px;
    height: 60px;
    border-radius: 12px;
    margin: 1.5rem;
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    width: 200px;
    height: 40px;
    border-radius: 8px;
    margin: 1rem;
    font-size: 1rem;
  }
  margin: 2rem;
  padding: 0.3rem;
  height: fit-content;
  color: black;
  cursor: pointer;
  background-color: var(--fontColor);
  border-color: var(--buttonBorderColor);
`;
