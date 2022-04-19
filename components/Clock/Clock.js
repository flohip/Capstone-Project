import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Clock({
  gameStarted,
  setGameStarted,
  timeBoni,
  setTimeBoni,
  setTimeOver,
}) {
  let gameDuration = 5;
  const [display, setDisplay] = useState("01:00");
  const [duration, setDuration] = useState(gameDuration - 1);

  useEffect(() => {
    if (gameStarted && timeBoni !== 0) {
      let newTime = CountdownTimer(duration + timeBoni + 1);
      setTimeBoni(0);
      setDisplay(newTime);
    } else if (gameStarted && timeBoni === 0) {
      const interval = setInterval(() => {
        let newTime = CountdownTimer(duration);
        setDisplay(newTime);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [duration, gameStarted]);

  function CountdownTimer(duration) {
    let minutes = formatMinutes(duration);
    let seconds = formatSeconds(duration);
    let timer = minutes * 60 + seconds;

    if (timer > 0) {
      setDuration(minutes * 60 + (seconds - 1));
    } else {
      // GAME OVER
      setDuration(gameDuration - 1);
      setTimeOver(true);
      setGameStarted(false);
    }
    return minutes + ":" + seconds;
  }

  return <StyledClock>{display}</StyledClock>;
}

const StyledClock = styled.div`
  color: var(--fontColor);
  font-size: 1.5rem;
`;

function formatMinutes(duration) {
  let minutes = Math.floor(duration / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return minutes;
}
function formatSeconds(duration) {
  let seconds = duration % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return seconds;
}
