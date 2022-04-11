import Head from "next/head";
import styled from "styled-components";
import WordCategory from "../components/WordCategory/WordCategory";
import RequestedWord from "../components/RequestedWord/RequestedWord";
import Keyboard, { initialState } from "../components/Keyboard/Keyboard";
import data from "../data/cityData.json";
import getRandomInt from "../utils/getRandomInt";
import splitDataName from "../components/RequestedWord/splitDataName";
import { useEffect, useState } from "react";
import { checkGuess } from "../utils/checkGuess";
import GameMenu from "../components/GameMenu/GameMenu";
import Score from "../components/Score/Score";

export default function Home({}) {
  const [dataArray, setDataArray] = useState(data);
  const [num, setNum] = useState();
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [wonGame, setWonGame] = useState(false);
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

  //get an random integer, to select a object out of the dataArray
  useEffect(() => {
    let newNumIsNotInIndexRange = false;
    let oldNum = null;
    oldNum = num;
    let newNum = getRandomInt(dataArray.length);
    setNum(newNum);
  }, [dataArray]);

  //split the requested word in an array of strings
  //e.g. "React" => ["R","E","A","C","T"]
  useEffect(() => {
    const word = splitDataName(dataArray, num);
    setRequestedWord(word);
  }, [num, dataArray]);

  //Check the submitted guess
  useEffect(() => {
    if (submittedGuess.state !== "inactive") {
      const [returnValue, state, key] = checkGuess(
        requestedWord,
        submittedGuess,
        checkedGuessArray
      );
      setkeyboardKeys(
        keyboardKeys.map((k) => {
          if (k.name === key) k.state = state;
          return k;
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
      if (checkIfWonArray.length === 0) {
        setGameStarted(false);
        setWonGame(true);
        setScore(score + 1);
        setCheckIfWonArray([false]);
        setkeyboardKeys(initialState);
        // if (submittedGuess.name !== "" && submittedGuess.state !== "inactive") {
        // }
        setSubmittedGuess({
          name: "",
          state: "inactive",
        });
        setRequestedWord([]);
        setCheckedGuessArray([false]);
        setKeystate("");
        setKeyName("");
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
      } else {
        return null;
      }
    }
  }, [checkIfWonArray, gameStarted, submittedGuess, wonGame]);

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
      setScore(0);
    }
  }

  return (
    <>
      <Head>
        <title>Capstone-Project</title>
        <meta
          name="Capstone-Project by flohip"
          content="Learning Quiz with next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {gameStarted ? (
        <StyledMain>
          <StyledGameInfo>
            <Score score={score} />
          </StyledGameInfo>
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
            keyName={keyName}
            keyboardKeys={keyboardKeys}
            setkeyboardKeys={setkeyboardKeys}
          />
        </StyledMain>
      ) : (
        <StyledMain>
          <GameMenu
            startTheGame={startTheGame}
            wonGame={wonGame}
            guessedAllWords={guessedAllWords}
            score={score}
          />
        </StyledMain>
      )}
    </>
  );
}

const StyledMain = styled.main`
  @media (min-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  min-height: 100vh;
  margin-top: 1rem;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: inherit;
`;

const StyledGameInfo = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 1rem;
  display: flex;
`;
