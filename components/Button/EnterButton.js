import styled from "styled-components";

export const EnterButton = () => {
  return <StyledButton>Eingabe</StyledButton>;
};
const StyledButton = styled.button`
  @media (min-width: 600px) {
    width: 300px;
    height: 60px;
    margin: 1.5rem;
  }
  @media (max-width: 600px) {
    width: 200px;
    height: 40px;
    margin: 1rem;
  }

  width: inherit;
  height: inherit;
  margin: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
