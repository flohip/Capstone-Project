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

export default function Home({}) {
  const [num, setNum] = useState(Number);
  const [gameStarted, setGameStarted] = useState(false);
  const [wonGame, setWonGame] = useState(false);

  const [requestedWord, setRequestedWord] = useState([]);
  const [submittedGuess, setSubmittedGuess] = useState({
    name: "",
    state: "inactive",
  });
  const [checkedGuessArray, setCheckedGuessArray] = useState([]);
  const [keyState, setKeystate] = useState("");
  const [keyName, setKeyName] = useState("");
  const [keyboardKeys, setkeyboardKeys] = useState(initialState);

  //get an random integer, to select a object out of the data
  useEffect(() => {
    setNum(getRandomInt(data.length));
  }, []);

  //split the requested word in an array of strings
  //e.g. "React" => ["R","E","A","C","T"]
  useEffect(() => {
    const word = splitDataName(data, num);
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
          <WordCategory data={data} num={num} />
          <RequestedWord
            data={data}
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
          <StartGame setGameStarted={setGameStarted} />
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
