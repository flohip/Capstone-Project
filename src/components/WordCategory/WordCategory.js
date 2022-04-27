import styled from "styled-components";
import { useEffect, useState } from "react";

export default function WordCategory({ dataArray, num }) {
  const [wordCategory, setWordCategory] = useState("");
  const [wordHint, setWordHint] = useState("");

  useEffect(() => {
    setWordCategory(dataArray[num].category);
    setWordHint(dataArray[num].hint);
  }, [dataArray, num]);

  return (
    <>
      <StyledCategory>{wordCategory}</StyledCategory>
      <StyledWordHint>{wordHint}</StyledWordHint>
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

const StyledWordHint = styled.div`
  color: var(--fontColor);
  font-size: 1rem;
  text-shadow: -1px 0 black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
