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
import StartGame from "../components/Button/StartGame";
import Score from "../components/Score/Score";

export default function Home({}) {
  const [dataArray, setDataArray] = useState(data);
  const [num, setNum] = useState();
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [wonGame, setWonGame] = useState(false);
  const [checkIfWonArray, setCheckIfWonArray] = useState([false]);
  const [requestedWord, setRequestedWord] = useState(
    splitDataName(dataArray, num)
  );
  const [submittedGuess, setSubmittedGuess] = useState({
    name: "",
    state: "inactive",
  });
  const [checkedGuessArray, setCheckedGuessArray] = useState([false]);
  const [keyState, setKeystate] = useState("");
  const [keyName, setKeyName] = useState("");
  const [keyboardKeys, setkeyboardKeys] = useState(initialState);
  //get an random integer, to select a object out of the dataArray
  console.log(requestedWord);
  console.log(dataArray);
  console.log("dataArrayLength => ", dataArray.length);
  useEffect(() => {
    let newNumIsNotInIndexRange = false;
    let oldNum = null;
    oldNum = num;
    let newNum = getRandomInt(dataArray.length);
    console.log("oldNum=>", oldNum, " and ", "newNum=>", newNum);
    //rerolls the number, if it's the same as the last number,
    //because the dataArray-entry gets removed and the current index isn't
    //available anymore. Prevents an error, when trying to read the index entry
    while (oldNum === newNum || newNumIsNotInIndexRange) {
      newNum = getRandomInt(dataArray.length);
      if (dataArray.length < newNum) {
        newNumIsNotInIndexRange = true;
      } else {
        newNumIsNotInIndexRange = false;
      }
    }
    setNum(newNum);
  }, [dataArray]);
  //split the requested word in an array of strings

  //e.g. "React" => ["R","E","A","C","T"]
  useEffect(() => {
    const word = splitDataName(dataArray, num);
    setRequestedWord(word);
  }, [num]);
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

  //resetting the game
  useEffect(() => {
    if (checkIfWonArray !== null && gameStarted === true) {
      if (checkIfWonArray.length === 0) {
        setGameStarted(false);
        setWonGame(true);
        setScore(score + 1);
        setCheckIfWonArray([false]);
        setkeyboardKeys(initialState);
        if (submittedGuess.name !== "" && submittedGuess.state !== "inactive") {
        }
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
              //"stays in the list of possible words"
              return true;
            } else if (index === num) {
              //"gets sorted out of possible words"
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
          <StartGame
            setGameStarted={setGameStarted}
            wonGame={wonGame}
            setWonGame={setWonGame}
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
