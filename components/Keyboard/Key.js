import styled from "styled-components";

export const Key = ({ onClick, name, style }) => {
  return (
    <StyledButtons onClick={onClick} style={style}>
      {name}
    </StyledButtons>
  );
};

const StyledButtons = styled.button`
  @media (min-width: 600px) {
    width: 45px;
    margin: 4px;
  }
  @media (max-width: 600px) {
    width: 25px;
    margin: 2px;
  }

  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
