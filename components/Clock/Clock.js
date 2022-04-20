import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Clock({
  duration,
  setDuration,
  gameStarted,
  timeBoni,
  setTimeBoni,
  setTimeOver,
  guessedAllWords,
}) {
  const gameDuration = duration;
  const maxGameDuration = gameDuration;
  const [display, setDisplay] = useState("");
  useEffect(() => {
    //resets time when all words are guessed
    if (guessedAllWords) {
      handleLogic(gameDuration, maxGameDuration, setDuration);
    }
  }, [guessedAllWords]);

  useEffect(() => {
    if (!gameStarted) {
      // time gets checked and displayed when a word is guessed
      let newTime = countdownTimer(duration + timeBoni + 1);
      handleLogic(newTime, maxGameDuration, setDuration);
      setTimeBoni(0);
    }
    if (gameStarted) {
      // time gets checked and displayed every second
      const interval = setInterval(() => {
        let newTime = countdownTimer(duration);
        handleLogic(newTime, maxGameDuration, setDuration);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [duration, gameStarted]);

  function handleLogic(newTime, maxGameDuration, setDuration) {
    const checkedDuration = checkMaxDuration(newTime, maxGameDuration);
    setDuration(checkedDuration);
    let newDisplayTime = getDisplayTime(checkedDuration);
    setDisplay(newDisplayTime);
  }

  function checkMaxDuration(newTime, maxGameDuration) {
    if (newTime > maxGameDuration) {
      return maxGameDuration;
    } else {
      return newTime;
    }
  }
  function countdownTimer(duration) {
    let minutes = formatMinutes(duration);
    let seconds = formatSeconds(duration);
    let timer = minutes * 60 + seconds;

    if (timer > 0) {
      return minutes * 60 + (seconds - 1);
    } else {
      // GAME OVER
      setTimeOver(true);
      return gameDuration;
    }
  }
  function getDisplayTime(duration) {
    let minutes = formatMinutes(duration);
    let seconds = formatSeconds(duration);
    return minutes + ":" + seconds;
  }
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

  return <StyledClock>{display}</StyledClock>;
}

const StyledClock = styled.div`
  color: var(--fontColor);
  font-size: 1.5rem;
`;
