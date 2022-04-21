import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Clock({
  gameDuration,
  setGameDuration,
  maxGameDuration,
  display,
  setDisplay,
  gameStarted,
  timeBoni,
  setTimeBoni,
  setTimeOver,
}) {
  const [displayColor, setDisplayColor] = useState();
  useEffect(() => {
    if (!gameStarted) {
      // time gets checked and displayed when a word is guessed
      let newTime = countdownTimer(gameDuration + timeBoni + 1);
      handleLogic(newTime, maxGameDuration);
      setTimeBoni(0);
    }
    if (gameStarted) {
      // time gets checked and displayed every second
      const interval = setInterval(() => {
        let newTime = countdownTimer(gameDuration);
        handleLogic(newTime, maxGameDuration);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameDuration, gameStarted]);

  function handleLogic(newTime, maxGameDuration) {
    const checkedDuration = checkMaxDuration(newTime, maxGameDuration);
    let newDisplayTime = formatDisplayTime(checkedDuration);
    setGameDuration(checkedDuration);
    setDisplay(newDisplayTime);
    return checkedDuration;
  }

  function checkMaxDuration(newTime, maxGameDuration) {
    if (newTime > maxGameDuration) {
      return maxGameDuration;
    } else {
      return newTime;
    }
  }
  function countdownTimer(gameDuration) {
    let minutes = formatMinutes(gameDuration);
    let seconds = formatSeconds(gameDuration);
    let timer = minutes * 60 + seconds;

    if (timer > 0) {
      return minutes * 60 + (seconds - 1);
    } else {
      // GAME OVER
      setTimeOver(true);
      return maxGameDuration;
    }
  }

  return <StyledClock>{display}</StyledClock>;
}

const StyledClock = styled.div`
  color: var(--fontColor);
  font-size: 1.5rem;
`;

export function formatDisplayTime(gameDuration) {
  let minutes = formatMinutes(gameDuration);
  let seconds = formatSeconds(gameDuration);
  return minutes + ":" + seconds;
}

function formatMinutes(gameDuration) {
  let minutes = Math.floor(gameDuration / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return minutes;
}
function formatSeconds(gameDuration) {
  let seconds = gameDuration % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return seconds;
}
