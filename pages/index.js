import Head from "next/head";
import styled from "styled-components";
import WordCategory from "../components/WordCategory/WordCategory";
import RequestedWord from "../components/RequestedWord/RequestedWord";
import Keyboard from "../components/Keyboard/Keyboard";
import data from "../data/cityData.json";
import getRandomInt from "../utils/getRandomInt";
import splitDataName from "../components/RequestedWord/splitDataName";
import { useEffect, useState } from "react";
import { checkGuess } from "../utils/checkGuess";

export default function Home({}) {
  const [num, setNum] = useState(Number);
  const [requestedWord, setRequestedWord] = useState([]);
  const [submittedGuess, setSubmittedGuess] = useState({
    name: "",
    state: "inactive",
  });
  const [checkedGuessArray, setCheckedGuessArray] = useState([]);
  const [keyState, setKeystate] = useState("");
  const [keyName, setKeyName] = useState("");
  console.log(requestedWord);

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
      <StyledMain>
        <WordCategory data={data} num={num} />
        <RequestedWord
          data={data}
          num={num}
          requestedWord={requestedWord}
          checkedGuessArray={checkedGuessArray}
        />
        <Keyboard
          setSubmittedGuess={setSubmittedGuess}
          keyState={keyState}
          keyName={keyName}
        />
      </StyledMain>
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
