import styled from "styled-components";
import { useEffect, useState } from "react";

export default function WordCategory({ data, num }) {
  const [wordCategory, setWordCategory] = useState("");

  useEffect(() => {
    setWordCategory(data[num].category);
  }, [data, num]);

  return (
    <>
      <StyledCategory>{wordCategory}</StyledCategory>
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
