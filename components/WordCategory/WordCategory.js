import styled from "styled-components";
import { useEffect, useState } from "react";

export default function WordCategory({ data, num }) {
  const [wordCategory, setWordCategory] = useState("");
  const [wordFederalState, setWordFederalState] = useState("");

  useEffect(() => {
    setWordCategory(data[num].category);
    setWordFederalState(data[num].federalState);
  }, [data, num]);

  return (
    <>
      <StyledCategory>{wordCategory}</StyledCategory>
      <StyledFederelState>
        Auf dem Gebiet von {wordFederalState}
      </StyledFederelState>
    </>
  );
}

const StyledCategory = styled.div`
  color: var(--fontColor);
  font-size: 2rem;
  text-shadow: -1px 0 black;
  display: flex;
  flex-wrap: wrap;
`;

const StyledFederelState = styled.div`
  color: var(--fontColor);
  font-size: 1rem;
  text-shadow: -1px 0 black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
