import styled from "styled-components";
import WordCategory from "../src/components/WordCategory/WordCategory";
import RequestedWord from "../src/components/RequestedWord/RequestedWord";
import Keyboard, { initialState } from "../src/components/Keyboard/Keyboard";
import data from "../src/data/cityData.json";
import getRandomInt from "../src/utils/getRandomInt";
import splitDataName from "../src/components/RequestedWord/splitDataName";
import { useEffect, useState } from "react";
import { checkGuess } from "../src/utils/checkGuess";
import GameMenu from "../src/components/GameMenu/GameMenu";
import Score from "../src/components/Score/Score";
import Clock, { formatDisplayTime } from "../src/components/Clock/Clock";
import checkTime from "../src/utils/checkTime";
import Button from "../src/components/Button/Button";

export default function Game({ setGameState }) {
  const [dataArray, setDataArray] = useState(data);
  const [num, setNum] = useState();
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [wonGame, setWonGame] = useState(false);
  const [timeBoni, setTimeBoni] = useState(0);
  const [timeOver, setTimeOver] = useState(false);

  const [guessedAllWords, setGuessedAllWords] = useState(false);
  const [checkIfWonArray, setCheckIfWonArray] = useState([false]);
  const [requestedWord, setRequestedWord] = useState();
  const [submittedGuess, setSubmittedGuess] = useState({
    name: "",
    state: "inactive",
  });
  const [checkedGuessArray, setCheckedGuessArray] = useState([false]);
  const [keyState, setKeystate] = useState("");
  const [keyName, setKeyName] = useState("");
  const [keyboardKeys, setkeyboardKeys] = useState(initialState);

  //clock
  const DEFAULT_GAME_TIME = 120;
  const [gameDuration, setGameDuration] = useState(DEFAULT_GAME_TIME);
  const [maxGameDuration, setMaxGameDuration] = useState(DEFAULT_GAME_TIME);
  const [display, setDisplay] = useState("");

  // currentKey, enterKey and pressedKey - states are for keyboard input
  const [currentKey, setCurrentKey] = useState("");
  const [enterKey, setEnterKey] = useState(false);
  const [pressedKey, setPressedKey] = useState("");

  // physical keyboard eventlistener
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      setPressedKey(e.key.toUpperCase());
    });
  }, []);
  useEffect(() => {
    if (pressedKey === "ENTER" || pressedKey === " ") {
      setEnterKey(true);
      setPressedKey("");
    } else {
      //check if the key is in available keyboard keys
      const foundKey = keyboardKeys.find(
        (key) => key.name === pressedKey && key.state === "inactive"
      );
      if (foundKey !== undefined) {
        setCurrentKey(foundKey.name);
        setPressedKey("");
      } else {
        return;
      }
    }
  }, [pressedKey]);

  //get an random integer, to select a object out of the dataArray
  function getNewNum(dataArray, num) {
    let oldNum = null;
    oldNum = num;
    let newNum = getRandomInt(dataArray.length);
    setNum(newNum);
  }
  useEffect(() => {
    getNewNum(dataArray, num);
  }, [dataArray]);

  //split the requested word in an array of strings
  //e.g. "React" => ["R","E","A","C","T"]
  function getNewRequestedWord(dataArray, num) {
    const word = splitDataName(dataArray, num);
    setRequestedWord(word);
  }
  useEffect(() => {
    getNewRequestedWord(dataArray, num);
  }, [num, dataArray]);

  //Check the submitted guess
  useEffect(() => {
    if (submittedGuess.state !== "inactive") {
      const [returnValue, state, key] = checkGuess(
        requestedWord,
        submittedGuess,
        checkedGuessArray
      );

      // this setter adds "correct" or "wrong" as >state<
      setkeyboardKeys(
        keyboardKeys.map((key) => {
          if (key.name === key) key.state = state;
          return key;
        })
      );
      setKeystate(state);
      setKeyName(key);
      setCheckedGuessArray(returnValue);
    } else {
      return;
    }
  }, [requestedWord, submittedGuess]);

  // checking if full word was guessed
  useEffect(() => {
    setCheckIfWonArray(
      checkedGuessArray.filter((bool) => {
        if (bool === false) {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [checkedGuessArray]);
  //resetting the game and filtering the recent word for the next round
  useEffect(() => {
    if (checkIfWonArray !== null && gameStarted === true) {
      if (checkIfWonArray.length === 0 || timeOver) {
        setGameStarted(false);
        setCheckIfWonArray([false]);
        setkeyboardKeys(initialState);
        setSubmittedGuess({
          name: "",
          state: "inactive",
        });
        // setRequestedWord([]);
        setCheckedGuessArray([false]);
        setKeystate("");
        setKeyName("");
        if (timeOver) {
          setDataArray(data);
          getNewNum(dataArray, num);
          getNewRequestedWord(dataArray, num);
        }
        if (checkIfWonArray.length === 0) {
          setWonGame(true);
          setScore(score + 1);
          setTimeBoni(checkTime(keyboardKeys));
          setDataArray(
            dataArray.filter((entry, index) => {
              if (index !== num) {
                // stays in the list of possible words
                return true;
              } else if (index === num) {
                // gets sorted out of possible words
                return false;
              } else {
                return;
              }
            })
          );
        }
      } else {
        return null;
      }
    }
  }, [checkIfWonArray, gameStarted, submittedGuess, wonGame, timeOver]);

  //resetting the dataArray when all possible words are guessed correct
  // to give the option to restart the game
  useEffect(() => {
    if (dataArray.length <= 0) {
      setGuessedAllWords(true);
      setDataArray(data);
    }
  }, [dataArray.length]);

  function startTheGame(restart) {
    setGameStarted(true);
    setWonGame(false);
    setGuessedAllWords(false);
    if (restart) {
      setTimeOver(false);
      setScore(0);
      setGameDuration(DEFAULT_GAME_TIME);
      setDisplay(formatDisplayTime(DEFAULT_GAME_TIME));
      setDataArray(data);
    }
  }
  return (
    <StyledAppWindow>
      {gameStarted ? (
        <>
          <StyledGameInfo>
            <Score score={score} />
            <Clock
              gameDuration={gameDuration}
              setGameDuration={setGameDuration}
              maxGameDuration={maxGameDuration}
              display={display}
              setDisplay={setDisplay}
              gameStarted={gameStarted}
              timeBoni={timeBoni}
              setTimeBoni={setTimeBoni}
              setTimeOver={setTimeOver}
              guessedAllWords={guessedAllWords}
            />
          </StyledGameInfo>
          <StyledMain>
            <WordCategory dataArray={dataArray} num={num} />
            <RequestedWord
              dataArray={dataArray}
              num={num}
              requestedWord={requestedWord}
              checkedGuessArray={checkedGuessArray}
            />
            <Keyboard
              submittedGuess={submittedGuess}
              setSubmittedGuess={setSubmittedGuess}
              keyState={keyState}
              setKeystate={setKeystate}
              keyName={keyName}
              setKeyName={setKeyName}
              keyboardKeys={keyboardKeys}
              setkeyboardKeys={setkeyboardKeys}
              currentKey={currentKey}
              setCurrentKey={setCurrentKey}
              enterKey={enterKey}
              setEnterKey={setEnterKey}
            />
            <StyledButtonContainer>
              <Button
                onClick={() => setGameState(false)}
                content={"Spiel beenden"}
              />
            </StyledButtonContainer>
          </StyledMain>
        </>
      ) : (
        <>
          <StyledGameInfo>
            <Score score={score} />
            <Clock
              gameDuration={gameDuration}
              setGameDuration={setGameDuration}
              maxGameDuration={maxGameDuration}
              display={display}
              setDisplay={setDisplay}
              gameStarted={gameStarted}
              timeBoni={timeBoni}
              setTimeBoni={setTimeBoni}
              setTimeOver={setTimeOver}
              guessedAllWords={guessedAllWords}
            />
          </StyledGameInfo>
          <StyledMain>
            <GameMenu
              startTheGame={startTheGame}
              wonGame={wonGame}
              guessedAllWords={guessedAllWords}
              score={score}
              timeOver={timeOver}
            />
            <StyledButtonContainer>
              <Button
                onClick={() => setGameState(false)}
                content={"Zum Hauptmenü"}
              />
            </StyledButtonContainer>
          </StyledMain>
        </>
      )}
    </StyledAppWindow>
  );
}

const StyledAppWindow = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;

const StyledMain = styled.div`
  @media (min-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  max-width: 1100px;
  min-height: 100vh;
  margin-top: 1rem;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: inherit;
`;

const StyledGameInfo = styled.div`
  max-width: 1100px;
  width: 100%;
  position: absolute;
  top: 0;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
`;

const StyledButtonContainer = styled.div`
  position: absolute;
  bottom: 1rem;
`;
