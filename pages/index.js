import Head from "next/head";
import styled from "styled-components";
import WordCategory from "../components/WordCategory/WordCategory";
import RequestedWord from "../components/RequestedWord/RequestedWord";
import Keyboard from "../components/Keyboard/Keyboard";
import data from "../data/cityData.json";
import getRandomInt from "../utils/getRandomInt";
import { useEffect, useState } from "react";
import splitDataName from "../components/RequestedWord/splitDataName";
import { checkGuess } from "../utils/checkGuess";

export default function Home({}) {
  const [num, setNum] = useState(Number);
  const [requestedWord, setRequestedWord] = useState([]);
  const [submittedGuess, setSubmittedGuess] = useState(null);
  const [checkedGuessArray, setCheckedGuessArray] = useState();
  useEffect(() => {
    setNum(getRandomInt(data.length));
  }, []);

  useEffect(() => {
    const word = splitDataName(data, num);
    setRequestedWord(word);
  }, [num]);

  //Check the submitted guess
  function onSubmitCheck() {
    setCheckedGuessArray(checkGuess(requestedWord, submittedGuess));
  }

  console.log("checkedGuessArray: ", checkedGuessArray);
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
      <Header>
        Welcome to my{" "}
        <a
          href="https://github.com/flohip/capstone-project"
          rel="noreferrer"
          target="_blank"
        >
          Capstone-Project!
        </a>
      </Header>
      <StyledMain>
        <WordCategory data={data} num={num} />
        <RequestedWord data={data} num={num} requestedWord={requestedWord} />
        <Keyboard
          setSubmittedGuess={setSubmittedGuess}
          onSubmitCheck={onSubmitCheck}
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

const Header = styled.h1`
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  color: var(--fontColor);
  margin-bottom: 1rem;
  font-size: inherit;
  text-align: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  > a {
    color: #0070f3;
  }

  > a:hover,
  > a:focus,
  > a:active {
    text-decoration: underline;
  }
`;
