import styled from "styled-components";

export default function Key({ onClick, name, currentStyle, isDisabled }) {
  return (
    <StyledButtons onClick={onClick} style={currentStyle} disabled={isDisabled}>
      {name}
    </StyledButtons>
  );
}

const StyledButtons = styled.button`
  @media (min-width: 600px) {
    width: 45px;
    border-radius: 10px;

    margin: 4px;
  }
  @media (max-width: 600px) {
    width: 27px;
    border-radius: 6px;

    margin: 2px;
  }

  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
