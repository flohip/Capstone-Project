import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Score({ score }) {
  const [color, setColor] = useState("orange");
  useEffect(() => {
    checkColor(setColor, score);
  }, [score]);
  return (
    <StyledScore>
      Score: <div style={{ color: color }}>{score}</div>
    </StyledScore>
  );
}
const StyledScore = styled.div`
  font-size: 1.5rem;
  color: var(--fontColor);
  display: flex;
  gap: 1rem;
`;
function checkColor(setColor, score) {
  if (score <= 3) {
    setColor("red");
  } else if (score <= 6) {
    setColor("orange");
  } else if (score <= 9) {
    setColor("yellow");
  } else if (score <= 12) {
    setColor("lightgreen");
  } else if (score <= 15) {
    setColor("lightblue");
  } else {
    setColor("hotpink");
  }
}
